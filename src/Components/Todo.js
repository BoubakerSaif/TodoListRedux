import React from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../Redux/todoSlice";
import UpdateTodo from "./UpdateTodo";

const Todo = ({ todoInfo }) => {
  const dispatch = useDispatch();
  const editHandler = (e) => {
    e.preventDefault();
    dispatch(editTodo(todoInfo.id));
  };

  return (
    <div>
      <p> {todoInfo.task} </p>
      {todoInfo.isEdited && (
        <UpdateTodo todoTask={todoInfo.task} todoid={todoInfo.id} />
      )}
      <button onClick={editHandler}>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default Todo;
