import * as React from "react";
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
import "./App.css";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#212121',
    color: '#ffffff',
    height: '100vh',
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const ContentContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '800px', // Match this with StyledTextField maxWidth
  flexGrow: 1,
  overflowY: 'auto',
  padding: theme.spacing(0, 2), // Add horizontal padding
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
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

const StyledTextField = styled(PromptField, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    marginTop: 'auto', // Push to the bottom
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: '100%',
    maxWidth: '800px', // Match this with ContentContainer maxWidth
    padding: theme.spacing(2),
  })
);

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "#171717",
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
        <ContentContainer>
          <Typography sx={{ marginBottom: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
            quisque non tellus. Convallis convallis tellus id interdum velit
            laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
            adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at consectetur
            lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
            faucibus et molestie ac.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
            sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
            mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
            risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
            purus viverra accumsan in. In hendrerit gravida rutrum quisque non
            tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
            morbi tristique senectus et. Adipiscing elit duis tristique
            sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
            posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
        </ContentContainer>
        <StyledTextField />
      </Main>
    </Box>
  );
}
