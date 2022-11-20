import { Box, Button, TextField } from "@mui/material";
// using uuid
import { v4 as uuidv4 } from "uuid";
import React from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = React.useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleOnClick = () => {
    if (title) {
      props.addTodo({
        title,
        completed: false,
      });
      setTitle("");
    }
  };

  return (
    <Box className="AddTodo">
      <TextField
        className="AddTodo__input"
        value={title}
        onChange={handleOnChange}
      />
      <Button
        className="AddTodo__add"
        variant="contained"
        onClick={handleOnClick}
      >
        Add Todo
      </Button>
    </Box>
  );
};
