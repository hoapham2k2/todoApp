import {
  Box,
  Button,
  Checkbox,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import React from "react";

export const TodoItem = (props) => {
  const handleOnClick = () => {
    props.deleteTodo(props.todo._id);
  };

  const handleOnCheck = (e) => {
    props.updateTodo(props.todo._id, {
      ...props.todo,
      completed: e.target.checked,
    });
  };

  return (
    <Box className="TodoItem">
      <Box className="container">
        <Checkbox
          className="TodoItem__checkbox"
          onClick={handleOnCheck}
          checked={props.todo.completed}
        />
        <Typography className="TodoItem__title" variant="h5">
          {props.todo.title}
        </Typography>
      </Box>
      <IconButton
        className="TodoItem__delete"
        aria-label="delete"
        onClick={handleOnClick}
      >
        <ClearIcon />
      </IconButton>
      <Divider />
    </Box>
  );
};
