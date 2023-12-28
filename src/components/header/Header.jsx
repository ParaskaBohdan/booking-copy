import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './style.css';

const activeLink = "NavList active";
const normalLink = "NavList";
const theme = createTheme({
  palette: {
    primary: {
      main: '#daedec',
    },
  },
});

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem('access_token');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar className="Content">
          <div className="Logo">
            <NavLink to="/home">
              <img src="/images/Logotype.svg" alt="" />
            </NavLink>
          </div>
          <nav className="Nav">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="top"
              open={open}
              onClose={handleDrawerClose}
            >
              <List className="NavListWrap centered-items">
              <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                <ListItem button>
                 
                    <span>Home</span>

                </ListItem>
                </NavLink>
                <NavLink to="/dwelling" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                <ListItem button>
                  
                    <span>Dwelling</span>
                
                </ListItem>
                </NavLink>
                {!token && (
                  <>
                  <NavLink to="/login" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <ListItem button>
                      
                        <span>Sign in</span>
                      
                    </ListItem>
                    </NavLink>
                    <NavLink to="/registry" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <ListItem button>
                      
                        <span>Sign up</span>
                      
                    </ListItem>
                    </NavLink>
                  </>
                )}
                {token && (
                  <>
                  <NavLink to="/user" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <ListItem button>
                      
                        <span>My profile</span>
                      
                    </ListItem>
                    </NavLink>
                    <NavLink to="/signout" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <ListItem button>
                      
                        <span>Sign out</span>
                     
                    </ListItem>
                    </NavLink>
                  </>
                )}
              </List>
            </Drawer>
          </nav>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
