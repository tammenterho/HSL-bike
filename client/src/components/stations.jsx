import { useGetAllStationsQuery, useCountTripsByDepartureStationQuery } from "./../features/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import { setStations, increment5Pages, incrementPage, returnPage } from "./../features/stationsSlice";
import { useEffect, useState } from "react";

export const StationsData = () => {
  const page = useSelector((state) => state.stations?.page);
  const dispatch = useDispatch();

  const { data: allStationsData } = useGetAllStationsQuery({ page });

  useEffect(() => {
    if (allStationsData) {
      dispatch(setStations(allStationsData));
    }
  }, [allStationsData, dispatch]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  const handle5pages = () => {
    dispatch(increment5Pages());
  };

  const handlereturnPage = () => {
    dispatch(returnPage());
  };

  return (
    <div>
      <h1>STATIONS</h1>
      <table className="tripsTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Journeys from station</th>
            <th>Journeys to station</th>
          </tr>
        </thead>
        <tbody>
          {allStationsData && allStationsData.map((station) => (
            <StationRow key={station.id} station={station} />
          ))}
        </tbody>
      </table>
      <div className="buttonMore">
        <p>Page: {page + 1}</p>
        <button onClick={handlereturnPage}>Return</button>
        <button onClick={handleLoadMore}>Load more</button>
        <button onClick={handle5pages}>+5 pages</button>
      </div>
    </div>
  );
};

const StationRow = ({ station }) => {
  const [tripCount, setTripCount] = useState(null);
  const { data: countData } = useCountTripsByDepartureStationQuery({ stationName: station.nimi });

  useEffect(() => {
    if (countData) {
      setTripCount(countData);
    }
  }, [countData]);

  return (
    <tr>
      <td>{station.nimi}</td>
      <td>{station.osoite}</td>
      <td>{tripCount !== null ? tripCount : 'Loading...'}</td>
      <td>{/* Journeys to station */}</td>
    </tr>
  );
};
