import { useSelector, useDispatch } from "react-redux";
import { useGetAllTripsQuery, useSearchBikeRentsQuery } from "./../features/apiSlice";
import { increment5Pages, incrementPage, returnPage } from "./../features/tripsSlice"
import './../App.css'
import { useState } from "react";


export const Data = () => {
  const page = useSelector((state) => state.trips?.page);
  const { data } = useGetAllTripsQuery({ page });
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(""); // Lisätty searchTerm-tilamuuttuja
  const { data: searchResults } = useSearchBikeRentsQuery({ searchTerm }); // Lisätty hakutulosten käsittely

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  const handle5pages = () => {
    dispatch(increment5Pages());
  }
  const handlereturnPage = () => {
    dispatch(returnPage());
  }
  // formatoidaan sekunnit minuuteiksi ja sekunneiksi
  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes} min ${seconds} s`;
  };

  // Lisätty handleSearch -funktio hakukentän käsittelyä varten
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Suodatetaan data hakutulosten perusteella
  const filteredData = data ? data.filter((trip) => {
    const departureMatch = trip.departureStationName.toLowerCase().includes(searchTerm.toLowerCase());
    const returnMatch = trip.returnStationName.toLowerCase().includes(searchTerm.toLowerCase());
    return departureMatch || returnMatch;
  }) : [];

  return (
    <div>
      Search <input value={searchTerm} onChange={handleSearch} /> {/* Lisätty onChange-käsittelijä */}
      <div className="tripsContainer">
        {filteredData.length > 0 ? ( // Käytetään suodatettua dataa
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
              {filteredData.map((trip) => (
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
