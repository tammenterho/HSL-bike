
import {useGetAllTripsQuery} from './../features/apiSlice';

export const Data = () => {

const {data} = useGetAllTripsQuery();
console.log(data)

return (
<div>
    data
</div>
)
};