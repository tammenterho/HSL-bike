import { useSelector, useDispatch } from "react-redux";
import { useGetAllTripsQuery, useSearchBikeRentsQuery } from "./../features/apiSlice";
import { increment5Pages, incrementPage, returnPage, setInputValue } from "./../features/tripsSlice";
import './../App.css';



export const Data = () => {
  const page = useSelector((state) => state.trips?.page);
  const { data: allTripsData } = useGetAllTripsQuery({ page });
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.trips?.inputValue);
  const { data: searchTripsData } = useSearchBikeRentsQuery({ searchTerm: inputValue, page: 0 });


  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  const handle5pages = () => {
    dispatch(increment5Pages());
  };

  const handlereturnPage = () => {
    dispatch(returnPage());
  };

  // vaihtaa input valueksi joka kerta kun laittaa yhdenkin kirjaimen
  const handleInputChange = (event) => {
    dispatch(setInputValue(event.target.value));
  };
  
  const handleButtonClick = () => {
    console.log(inputValue)
    dispatch(setInputValue(inputValue));
    
  };


  // formatoidaan sekunnit minuuteiksi ja sekunneiksi
  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes} min ${seconds} s`;
  };

  return (
    <div>
      <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Search</button>
      
        {allTripsData && allTripsData.length > 0 ? (
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
              {allTripsData.map((trip) => (
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
          <p>No results found.</p> // Näytetään "No results found", jos ei hakutuloksia
        )}
      </div>
      <div className="buttonMore">
        <p>Page: {page + 1}</p>
        <button onClick={handlereturnPage}>Return</button>
        <button onClick={handleLoadMore}>Load more</button>
        <button onClick={handle5pages}>+5 pages</button>
      </div>
    </div>
  );
};
