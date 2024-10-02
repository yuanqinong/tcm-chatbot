import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  maxWidth: '800px',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'rgba(64, 65, 79, 0.9)',
  borderRadius: 24,
  padding: theme.spacing(0.5, 2),
  margin: '0 auto',
  marginTop: theme.spacing(2),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  flex: 1,
  color: theme.palette.common.white,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: 10,
  color: theme.palette.common.white,
}));

export default function PromptField() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      console.log('Submitted:', inputValue);
      // Here you would typically send the input value to your chat handler
      setInputValue(''); // Clear the input after submitting
    }
  };

  return (
    <StyledPaper elevation={3}>
      <StyledInputBase
        placeholder="Message ChatGPT"
        multiline
        maxRows={4}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
          }
        }}
      />
      <StyledIconButton aria-label="send" onClick={handleSubmit}>
        <SendIcon />
      </StyledIconButton>
    </StyledPaper>
  );
}

