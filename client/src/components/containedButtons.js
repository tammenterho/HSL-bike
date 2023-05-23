import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons({ handleTripsClick, handleStationsClick }) {
return (
<Stack direction="row" spacing={2}>
<Button variant="contained" onClick={handleTripsClick}>
Trips
</Button>
<Button variant="contained" onClick={handleStationsClick}>
Stations
</Button>
</Stack>
);
}