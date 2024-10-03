import React, { useState, useEffect, useRef } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PaymentIcon from "@mui/icons-material/Payment";
import ViewSidebarRoundedIcon from "@mui/icons-material/ViewSidebarRounded";
import PromptField from "./components/UserPromptField/PromptField.jsx";
import ChatMessage from "./components/ChatMessage/ChatMessage.jsx";
import Skeleton from "@mui/material/Skeleton";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Avatar from "@mui/material/Avatar";
import "./App.css";

const drawerwidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    minHeight: "100vh",
    backgroundColor: "#212121",
    padding: theme.spacing(3),
    paddingBottom: 100,
    color: "white",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerwidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerwidth}px)`,
    marginLeft: `${drawerwidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSendMessage = async (message) => {
    console.log("handling send message");
    setMessages((prev) => [...prev, { text: message, isai: false }]);
    setIsLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "This is a simulated AI response.", isai: true },
      ]);
      setIsLoading(false);
    }, 10000);
  };

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        elevation={0}
        sx={{ backgroundColor: "#212121" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2,
              },
              open && { display: "none" },
            ]}
          >
            <ViewSidebarRoundedIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            ChatTCM
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerwidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerwidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "#171717",
            opacity: 0.9,
            color: "white",
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} color="inherit">
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Loyalty Program", "Purchase History", "Payment"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: "white",
                    }}
                  >
                    {index === 0 ? (
                      <LoyaltyIcon />
                    ) : index === 1 ? (
                      <ShoppingBasketIcon />
                    ) : (
                      <PaymentIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.text} isai={msg.isai} />
        ))}
        {isLoading && (
          <Box sx={{ display: 'flex', alignItems: 'flex-start', marginLeft: 2, marginTop: 2 }}>
            <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
              <SmartToyIcon />
            </Avatar>
            <Skeleton
              variant="rounded"
              width={210}
              height={60}
              sx={{
                marginLeft: 2,
                bgcolor: "rgba(68, 70, 84, 0.5)",
                borderRadius: "15px",
              }}
              />
          </Box>
        )}
        <div ref={messagesEndRef} />
      </Main>
      <PromptField
        onSendMessage={handleSendMessage}
        open={open}
        drawerwidth={drawerwidth}
        isLoading={isLoading}
      />
    </Box>
  );
}
