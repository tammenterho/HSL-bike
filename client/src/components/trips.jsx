import { useSelector, useDispatch } from "react-redux";
import { useGetAllTripsQuery } from "./../features/apiSlice";
import {incrementPage} from "./../features/tripsSlice"


export const Data = () => {
  const page = useSelector((state) => state.trips?.page);
  const { data } = useGetAllTripsQuery({ page });
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(incrementPage()); // Dispatch incrementPage action to update the page state
  };

  console.log(page);
  console.log(data);

  return (
    <div>
      {data ? (
        <table>
          <thead>
            <tr>
              <th>Distance</th>
              <th>Start</th>
            </tr>
          </thead>
          <tbody>
            {data.map((trip) => (
              <tr key={trip.id}>
                <td>{trip.coveredDistance}</td>
                <td>{trip.departureStationName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={handleLoadMore}>Load more</button>
    </div>
  );
};
