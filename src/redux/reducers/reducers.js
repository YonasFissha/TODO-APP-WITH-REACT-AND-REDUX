import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions";
import { todos } from "../state";
export const reducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      const id = state.length;
      action.payload.id = id + 1;
      return [...state, action.payload];
    case DELETE_TODO:
      let newTodo = [...state];
      newTodo = newTodo.filter((todo) => todo.id != action.payload);
      return newTodo;
    case UPDATE_TODO:
      let updatedTodo = [...state];
      updatedTodo = updatedTodo.filter((todo) => {
        if (todo.id == action.payload.id) {
          todo = action.payload;
        }
      });
      return newTodo;

    default:
      return state;
  }
};
