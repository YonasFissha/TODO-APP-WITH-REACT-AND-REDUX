import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Add } from "../redux/actions";
const TodoInput = () => {
  const [input, setInput] = useState("");
  const onchange = (e) => {
    setInput(e.target.value);
  };

  const dispatch = useDispatch();
  return (
    <div>
      <div className="row m-2 justify-content-between">
        <input
          type="text"
          className="col form-control"
          value={input}
          onChange={onchange}
        />
        <button
          className="btn btn-primary mx-2"
          onClick={() => dispatch(Add({ id: 5, name: input }))}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
