import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Todo from "../components/Todo";
import FormDialog from "../Dialogs/FormDialog";
import ShouldRender from "../components/ShouldRender";
import { useFormik } from "formik";
import formSchema from "../schema/formSchema";
import DeleteDialog from "../Dialogs/DeleteDialog";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  addTodos,
  deleteTodo,
  editTask,
  TodoTypes,
} from "../redux/slices/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

const todos = [
  {
    id: "1",
    todoTitle: "Eat",
    completed: false,
  },
  {
    id: "2",
    todoTitle: "Eat",
    completed: false,
  },
];

type TodoProp = {
  todoTitle: string;
};

const Todos = () => {
  const [openAddDialog, setOpenAddDialog] = React.useState<boolean>(false);
  const [openEditDialog, setOpenEditDialog] = React.useState<boolean>(false);
  const [openDelDialog, setOpenDelDialog] = React.useState<boolean>(false);
  const [todoId, setTodoId] = React.useState<string>("");
  const [todoToBeEdited, setTodoToBeEdited] = React.useState<TodoTypes>();
  const [search, setSearch] = React.useState<string>("");
  const [todos, setTodos] = React.useState<TodoTypes[]>([]);
  const [filteredTodos, setFilteredTodos] = React.useState<TodoTypes[]>([]);

  const state = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const [editTodo, setEditTodo] = React.useState<string>(
    todoToBeEdited?.todoTitle!
  );

  React.useEffect(() => {
    setTodos(state.todos);
    setFilteredTodos(state.todos);
  }, [state.todos]);

  React.useEffect(() => {
    if (search === "") {
      setFilteredTodos(state.todos);
    } else {
      setFilteredTodos(() =>
        todos?.filter((todo) =>
          todo.todoTitle.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

  React.useEffect(() => {
    setTodoToBeEdited(state.todos.find((item) => item.id === todoId));
  }, [todoId]);

  const handleSubmit = (values: TodoProp) => {
    try {
      dispatch(
        addTodos({
          ...values,
          id: nanoid(),
          completed: false,
        })
      );
    } catch (error) {
      console.log(error, ">>>>");
    } finally {
      setOpenAddDialog(false);
    }
  };

  const handleEdit = () => {
    try {
      dispatch(
        editTask({
          id: todoId,
          completed: false,
          todoTitle: editTodo,
        })
      );
    } catch (error) {
      console.log(error);
    } finally {
      setOpenEditDialog(false);
    }
  };

  const handleDelete = (id: string) => {
    try {
      dispatch(deleteTodo({ id }));
    } catch (error) {
      console.log(error);
    } finally {
      setOpenDelDialog(false);
    }
  };

  const formik = useFormik({
    initialValues: { todoTitle: "" } as TodoProp,
    validateOnBlur: true,
    validationSchema: formSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="flex flex-col gap-4 w-full max-w-[450px]  min-h-[70vh] pt-10 pb-10 mx-auto container-box mt-10 mb-10 p-5 rounded-md">
      <div className="flex justify-between">
        <h2 className="uppercase font-bold text-xl">
          Todo<span className="text-pink-500">list</span>
        </h2>
        <div className="flex gap-2">
          <Button label="Add" onClick={() => setOpenAddDialog(true)} />
        </div>
      </div>
      <Input
        placeholder="Serach todo"
        name="search"
        value={search}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(event.target.value)
        }
      />
      <div className="flex flex-col gap-3 mt-5">
        {Array.from(filteredTodos ?? [], (todo) => (
          <Todo
            key={todo.id}
            onDelete={() => {
              setOpenDelDialog(true);
              setTodoId(todo.id);
            }}
            onEdit={() => {
              setOpenEditDialog(true);
              setTodoId(todo.id);
            }}
            title={todo.todoTitle}
          />
        ))}
      </div>
      <ShouldRender visible={openAddDialog}>
        <FormDialog
          openDialog={openAddDialog}
          title="Create todo"
          onCloseDialog={() => setOpenAddDialog(false)}
          name="todoTitle"
          value={formik.values.todoTitle}
          onChange={formik.handleChange}
          error={
            formik.touched && formik.errors.todoTitle && formik.errors.todoTitle
          }
          onSubmitForm={formik.handleSubmit}
          onConfirm={formik.handleSubmit}
        />
      </ShouldRender>
      <ShouldRender visible={openEditDialog}>
        <FormDialog
          openDialog={openEditDialog}
          title="Edit Todo"
          onCloseDialog={() => setOpenEditDialog(false)}
          name="editTodo"
          value={editTodo}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEditTodo(event.target.value)
          }
          required
          onSubmitForm={handleEdit}
          onConfirm={handleEdit}
        />
      </ShouldRender>
      <ShouldRender visible={openDelDialog}>
        <DeleteDialog
          openDialog={true}
          title="Delete Task"
          onCloseDialog={() => setOpenDelDialog(false)}
          onConfirm={() => handleDelete(todoId)}
        />
      </ShouldRender>
    </div>
  );
};

export default Todos;
