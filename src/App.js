import React, { useState, useMemo, Suspense } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, CircularProgress } from '@mui/material';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

// Lazy load non-critical components
const Projects = React.lazy(() => import('./components/Projects/Projects'));
const Skills = React.lazy(() => import('./components/Skills/Skills'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));

// Loading fallback component
const LoadingFallback = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
    <CircularProgress color="primary" />
  </Box>
);

function App() {
  const [mode, setMode] = useState('light');

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // Light mode
            primary: {
              main: '#9C27B0',
            },
            background: {
              default: '#f5f5f5',
              paper: '#ffffff',
            },
            text: {
              primary: '#1a1a1a',
              secondary: '#666666',
            },
          }
        : {
            // Dark mode
            primary: {
              main: '#E040FB',
            },
            background: {
              default: '#121212',
              paper: '#1E1E1E',
            },
            text: {
              primary: '#ffffff',
              secondary: '#B0B0B0',
            },
          }),
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: 'clamp(2rem, 6vw, 3.75rem)',
      },
      h2: {
        fontSize: 'clamp(1.5rem, 4vw, 3rem)',
      },
      body1: {
        fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Header toggleColorMode={toggleColorMode} mode={mode} />
        <Box component="main">
          <Box id="home">
            <Hero />
          </Box>
          <Suspense fallback={<LoadingFallback />}>
            <Box id="projects">
              <Projects />
            </Box>
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Box id="skills">
              <Skills />
            </Box>
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Box id="contact">
              <Contact />
            </Box>
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Footer />
          </Suspense>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
