import { useGetAllStationsQuery } from "./../features/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import { setStations } from "./../features/stationsSlice";
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

  return (
    <div>
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
    </div>
  );
};
