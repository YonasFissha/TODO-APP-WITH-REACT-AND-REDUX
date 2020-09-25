import React from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import TodoInput from "./Components/TodoInput";
import { store } from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="App m-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card p-5">
              <TodoInput></TodoInput>
              <TodoList></TodoList>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
