import React from "react";
import { useDispatch } from "react-redux";
import { Delete } from "../redux/actions";
const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="row mx-2 align-items-center">
        <div>{id}</div>
        <div className="col">{title}</div>
        <button className="btn btn-primary btn-sm m-2">Edit</button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => dispatch(Delete(id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
