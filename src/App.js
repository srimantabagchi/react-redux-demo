import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import LoginContainer from "./components/LoginContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LoginContainer />
      </div>
    </Provider>
  );
}

export default App;
