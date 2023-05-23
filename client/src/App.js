
import './App.css';
import { Data } from './components/trips';
import { store } from "./store";
import { Provider } from 'react-redux';
import { StationsData } from './components/stations';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { tripsApi } from './features/apiSlice';



function App() {
  return (
    <Provider store ={store}>
      {/* <ApiProvider api={tripsApi}> */}
        <div className="App">
      <StationsData/>
      <Data/>
    </div>
   {/* </ApiProvider> */}
    </Provider>
  );
}

export default App;
