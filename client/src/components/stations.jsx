import { useGetAllStationsQuery } from "./../features/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import { setStations, increment5Pages, incrementPage, returnPage } from "./../features/stationsSlice";
import { useEffect } from "react";

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

  console.log(page)


  return (
    <div>
      <h1>STATIONS</h1>
      <table className="tripsTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {allStationsData && allStationsData.map((station) => (
            <tr key={station.id}>
              <td>{station.nimi}</td>
              <td>{station.osoite}</td>
            </tr>
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
