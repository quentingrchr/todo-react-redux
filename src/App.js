import React from "react";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import store from "./redux/store";
import TodoPage from "./page/TodoPage";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoPage />
      </Provider>
    </div>
  );
}

export default App;
