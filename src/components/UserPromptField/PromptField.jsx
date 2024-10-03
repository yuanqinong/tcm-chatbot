import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

const StyledPaper = styled(Paper)(({ theme, open, drawerWidth }) => ({
  display: "flex",
  position: "fixed",
  bottom: 10,
  left: 20,
  width: "calc(98% - 40px)", // Subtract left and right padding
  alignItems: "center",
  backgroundColor: "rgba(64, 65, 79, 0.9)",
  borderRadius: 24,
  padding: theme.spacing(0.5, 2),
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(98% - ${drawerWidth}px - 40px)`, // Subtract drawer width and padding
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  flex: 1,
  color: theme.palette.common.white,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: 10,
  color: theme.palette.common.white,
}));

export default function PromptField({ onSendMessage, open, drawerWidth }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  // Check if the input is empty or only contains whitespace
  const isInputEmpty = !inputValue.trim();

  return (
    /*<StyledPaper elevation={3}>*/
    <StyledPaper elevation={3} open={open} drawerWidth={drawerWidth}>
      <StyledInputBase
        placeholder="Message ChatTCM"
        multiline
        maxRows={4}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey && !isInputEmpty) {
            e.preventDefault();
            handleSend();
          }
        }}
      />
      <StyledIconButton
        aria-label="send"
        onClick={handleSend}
        disabled={isInputEmpty}
      >
        <SendIcon />
      </StyledIconButton>
    </StyledPaper>
  );
}
