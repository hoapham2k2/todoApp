import { Box, Divider } from "@mui/material";
import React from "react";
import { TodoItem } from "./TodoItem";

const Todos = (props) => {
  return (
    <Box className="todos">
      {props.todos.map((todo) => {
        return (
          <TodoItem
            key={todo._id}
            todo={todo}
            deleteTodo={props.deleteTodo}
            updateTodo={props.updateTodo}
          />
        );
      })}
    </Box>
  );
};

export default Todos;
