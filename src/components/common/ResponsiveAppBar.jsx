import { useState, Fragment } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';


const pages = [
  { name: 'works', href: '/lamps-website/#/works' },
  { name: 'about me', href: '/lamps-website/#/about-me' },
  { name: 'contacts', href: '/lamps-website/#/contacts' }
]

export default function ResponsiveAppBar() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerIsOpen(!drawerIsOpen);
  };

  const list = () => (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        {pages.map((page) => (
          <ListItem button={true} component="a" href={page.href} key={page.name} disablePadding>
            <ListItemButton>
              <ListItemText>
                <Typography
                  fontFamily='Roboto Slab'
                  sx={{ textDecoration: "/lamps-website/" + window.location.hash === page.href ? 'underline' : null }}
                >
                  {page.name}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <AppBar position="sticky" style={{ background: '#2E3B55' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="hamburguer-menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer()}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <div>
              <Fragment>
                <SwipeableDrawer
                  anchor={'top'}
                  open={drawerIsOpen}
                  onClose={toggleDrawer()}
                  onOpen={toggleDrawer()}
                >
                  {list()}
                </SwipeableDrawer>
              </Fragment>
            </div>
            <IconButton
              onClick={() => window.location.href = "/lamps-website/#/"}
            >
              <LightbulbOutlinedIcon sx={{ color: "white", display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                
                sx={{
                  mr: 3,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'Roboto Slab',
                  fontWeight: 700,
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                luís jesus art
              </Typography>
            </IconButton>
          </Box>





          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              onClick={() => window.location.href = "/lamps-website/#/"}
            >
              <LightbulbOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: "white" }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Roboto Slab',
                  fontWeight: 700,
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                luís jesus art
              </Typography>
            </IconButton>
            {pages.map((page) => {
              return (
                <IconButton
                  key={page.name}
                  href={page.href}
                  sx={{ my: 2, color: 'white', display: 'block', "&:hover": { color: "gray" } }}
                >
                  <Typography
                    fontFamily='Roboto Slab'
                    sx={{ textDecoration: "/lamps-website/" + window.location.hash === page.href ? 'underline' : null }}
                  >
                    {page.name}
                  </Typography>
                </IconButton>
              )
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
