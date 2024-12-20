import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TodoTypes = {
  id: string;
  todoTitle: string;
  completed: boolean;
};

type StateProps = {
  todos: TodoTypes[];
  completedTodos: TodoTypes[];
};

const initialState = {
  todos: [],
  completedTodos: [],
} as StateProps;

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<TodoTypes>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    editTask: (state, action: PayloadAction<TodoTypes>) => {
      const todoTobeEdited = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (!todoTobeEdited) {
        return;
      }

      todoTobeEdited.todoTitle = action.payload.todoTitle;
    },
    markAsCompleted: (state, action: PayloadAction<{ id: string }>) => {
      const todo = state.todos.find((item) => item.id === action.payload.id);
      const todoIndex = state.completedTodos.findIndex(
        (item) => item.id === todo?.id
      );
      if (
        Array.from(state.completedTodos ?? [], (item) => item.id).includes(
          todo?.id!
        )
      ) {
        state.completedTodos.splice(todoIndex, 1);

        return;
      }
      state.completedTodos.push(todo!);
    },
  },
});

export const { addTodos, deleteTodo, editTask, markAsCompleted } =
  todoSlice.actions;

export default todoSlice;
