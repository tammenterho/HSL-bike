import { useGetAllTripsQuery } from './../features/apiSlice';

export const Data = () => {
  const { data } = useGetAllTripsQuery();
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
    </div>
  );
};
