import React, { useState } from 'react';
import { Box, TextField, Button, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: `AI response to: ${input}`, sender: 'ai' }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          AI Chatbot
        </Typography>
        <List sx={{ height: 300, overflowY: 'auto', mb: 2 }}>
          {messages.map((message, index) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemText
                primary={message.sender === 'user' ? 'You' : 'AI'}
                secondary={message.text}
                sx={{
                  textAlign: message.sender === 'user' ? 'right' : 'left',
                  '& .MuiListItemText-primary': {
                    fontWeight: 'bold',
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button variant="contained" onClick={handleSend}>
            Send
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ChatBot;