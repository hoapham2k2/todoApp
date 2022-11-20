import { Box, Typography } from "@mui/material";
import React from "react";

const TodoHeader = () => {
  return (
    <Box className="header__container">
      <Typography className="header__title" variant="h4">
        This is my to do app
      </Typography>
    </Box>
  );
};

export default TodoHeader;
