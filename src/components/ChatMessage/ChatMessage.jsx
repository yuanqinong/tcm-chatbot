import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const MessageContainer = styled(Box)(({ theme, isai }) => ({
  display: 'flex',
  padding: theme.spacing(2),
  justifyContent: isai ? 'flex-start' : 'flex-end',
}));

const MessageContent = styled(Box)(({ theme, isai }) => ({
  maxWidth: '80%',
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(2),
  backgroundColor: isai ? 'rgba(68, 70, 84, 0.5)' : theme.palette.primary.main,
  color: 'white',
}));

const ChatMessage = ({ message, isai }) => {
  return (
    <MessageContainer isai={isai}>
      <MessageContent isai={isai}>
        <Typography variant="body1">{message}</Typography>
      </MessageContent>
    </MessageContainer>
  );
};

export default ChatMessage;
