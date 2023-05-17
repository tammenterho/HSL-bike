import { useSelector, useDispatch } from "react-redux";
import { useGetAllTripsQuery } from "./../features/apiSlice";
import {incrementPage} from "./../features/tripsSlice"
import './../App.css'


export const Data = () => {
  const page = useSelector((state) => state.trips?.page);
  const { data } = useGetAllTripsQuery({ page });
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(incrementPage()); // Dispatch incrementPage action to update the page state
  };

  console.log(page);
  

  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes} min ${seconds} s`;
  };

  return (
    <div>
    <div className="tripsContainer">
      {data ? (
        <table className="tripsTable">
          <thead>
            <tr>
              <th>Start</th>
              <th>End</th>
              <th>Distance (km)</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {data.map((trip) => (
              <tr key={trip.id}>
                <td>{trip.departureStationName}</td>
                <td>{trip.returnStationName}</td>
                <td>{trip.coveredDistance / 1000}</td>
                <td>{formatDuration(trip.duration)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    <div className="buttonMore">
      <button onClick={handleLoadMore}>Load more</button>
    </div>
    </div>
  );
};
