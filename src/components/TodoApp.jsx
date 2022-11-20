import { Box, Divider } from "@mui/material";
import React from "react";
import { AddTodo } from "./AddTodo";
import TodoHeader from "./TodoHeader";
import Todos from "./Todos";
import axios from "axios";
import { useEffect } from "react";

const TodoApp = () => {
  // state
  const [todos, setTodos] = React.useState([
    // { _id: 1, title: "todo1", completed: false },
    // { _id: 2, title: "todo2", completed: false },
    // { _id: 3, title: "todo3", completed: false },
  ]);

  // useEffect
  useEffect(() => {
    const config = {
      params: {
        // _limit: 5,
      },
    };
    axios
      .get("https://todo-backend-ruby.vercel.app/todos", config)
      .then((respone) => {
        setTodos(respone.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // methods

  const addTodo = (todo) => {
    axios
      .post("https://todo-backend-ruby.vercel.app/todos", todo)
      .then((response) => {
        setTodos([...todos, response.data]);
      });
  };

  const deleteTodo = (id) => {
    axios
      .delete(`https://todo-backend-ruby.vercel.app/todos/${id}`)
      .then((response) => {
        setTodos(todos.filter((todo) => todo._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateTodo = (id, todo) => {
    axios
      .put(`https://todo-backend-ruby.vercel.app/todos/${id}`, todo)
      .then((response) => {
        setTodos(
          todos.map((todo) => {
            if (todo._id === id) {
              return response.data;
            }
            return todo;
          })
        );
      });
  };

  return (
    <Box className="TodoApp">
      <TodoHeader />
      <Divider />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </Box>
  );
};

export default TodoApp;
