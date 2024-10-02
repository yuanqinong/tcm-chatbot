import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const MessageContainer = styled(Box)(({ theme, isAi }) => ({
  display: 'flex',
  padding: theme.spacing(2),
  justifyContent: isAi ? 'flex-start' : 'flex-end',
}));

const MessageContent = styled(Box)(({ theme, isAi }) => ({
  maxWidth: '80%',
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(2),
  backgroundColor: isAi ? 'rgba(68, 70, 84, 0.5)' : theme.palette.primary.main,
  color: 'white',
}));

const ChatMessage = ({ message, isAi }) => {
  return (
    <MessageContainer isAi={isAi}>
      <MessageContent isAi={isAi}>
        <Typography variant="body1">{message}</Typography>
      </MessageContent>
    </MessageContainer>
  );
};

export default ChatMessage;
