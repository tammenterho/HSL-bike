import { useState } from "react";
import { Data } from "./components/trips";
import { store } from "./store";
import { Provider } from "react-redux";
import { StationsData } from "./components/stations";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { tripsApi } from "./features/apiSlice";

function App() {
  const [view, setView] = useState("stations");

  const toggleView = () => {
    setView(view === "stations" ? "data" : "stations");
  };

  return (
    <Provider store={store}>
      {/* <ApiProvider api={tripsApi}> */}
      <div className="App">
        <button onClick={toggleView}>Switch View</button>
        {view === "stations" ? <StationsData /> : <Data />}
      </div>
      {/* </ApiProvider> */}
    </Provider>
  );
}

export default App;
