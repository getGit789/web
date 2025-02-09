import React, { useState, useMemo, Suspense, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, CircularProgress } from '@mui/material';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { initGA, logPageView } from './utils/analytics';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CookieConsent from './components/CookieConsent/CookieConsent';

// Lazy load non-critical components
const Projects = React.lazy(() => import('./components/Projects/Projects'));
const Skills = React.lazy(() => import('./components/Skills/Skills'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));
const Privacy = React.lazy(() => import('./components/Privacy/Privacy'));

// Loading fallback component
const LoadingFallback = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
    <CircularProgress color="primary" />
  </Box>
);

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    initGA('G-JTMK33YMW7');
    
    // Google Analytics page views will only be tracked if consent is given
    const hasConsent = localStorage.getItem('cookieConsent') === 'accepted';
    if (hasConsent) {
      logPageView();
    }
  }, []);

  const [mode, setMode] = useState('light');

  const theme = useMemo(
    () =>
      createTheme({
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
              }
            : {
                // Dark mode
                primary: {
                  main: '#CE93D8',
                },
                background: {
                  default: '#121212',
                  paper: '#1E1E1E',
                },
              }),
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header mode={mode} setMode={setMode} />
          <Box component="main" sx={{ flex: 1 }}>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/" element={
                  <>
                    <Box id="home">
                      <Hero />
                    </Box>
                    <Box id="projects">
                      <Projects />
                    </Box>
                    <Box id="skills">
                      <Skills />
                    </Box>
                    <Box id="contact">
                      <Contact />
                    </Box>
                  </>
                } />
              </Routes>
            </Suspense>
          </Box>
          <Footer />
          <CookieConsent />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
