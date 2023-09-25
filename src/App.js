import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import { HashRouter as Router, Switch, Route, } from 'react-router-dom';

// template component
import AppBar from '@mui/material/AppBar';
// import Drawer from '@mui/material/Drawer';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


// pages
import DashBoard from './Pages/Dashboard';

// TODO: add translations here



function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <AppBar className="bg-primary-10" position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(true)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              drawer title
            </Typography>
          </Toolbar>
        </AppBar>
        {/* 
        TODO: add router here
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
        >
          <div className='flex items-center p-1 justify-end'>
            <IconButton onClick={() => setOpen(false)} className=''>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
        </Drawer> 
        */}
        <DashBoard />
    </StyledEngineProvider>
  );
}

export default App;
