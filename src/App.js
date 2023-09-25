import React from 'react';

// material ui
import { StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// template component
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';

// pages
import DashBoard from './Pages/Dashboard';

// i18n
import { I18nextProvider } from 'react-i18next';
import i18next from './Config/i18n';



function AppContent() {
  const [open, setOpen] = React.useState(false);
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <AppBar className="bg-primary-10 py-3" position="fixed" open={open}>
        <Toolbar className="min-h-[29px]">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <p>
            Logo Here
          </p>
        </Toolbar>
      </AppBar>
      <DashBoard />
    </StyledEngineProvider>
  );
}

function ThemeProvider(props) {
  const { children } = props;

  return (
    <StyledEngineProvider injectFirst>
      {children}
    </StyledEngineProvider>
  );
}

function IntlProvider(props) {
  const { children } = props;
  return (
    <I18nextProvider i18n={i18next}>
      {children}
    </I18nextProvider>
  );
}

  function Providers(props) {
    const { children } = props;
    return (
      <IntlProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </IntlProvider>
    );
  }

  export default function App() {
    return (
      <Providers>
        <AppContent />
      </Providers>
    );
  }
