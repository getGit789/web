import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CookieConsent = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
    localStorage.setItem('cookieConsent', 'accepted');
    setShow(false);
  };

  const handleDecline = () => {
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
    localStorage.setItem('cookieConsent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        p: 2,
        bgcolor: 'primary.main',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 9999,
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="body2">
          This website uses cookies for analytics to improve your experience. If you decline, we'll only collect anonymous usage data 
          without cookies or personal information.{' '}
          <Link
            href="#/privacy-policy"
            onClick={(e) => {
              e.preventDefault();
              navigate('/privacy-policy');
            }}
            sx={{ color: 'white', textDecoration: 'underline' }}
          >
            Learn more
          </Link>
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
        <Button
          onClick={handleDecline}
          sx={{
            color: 'white',
            border: '1px solid white',
            '&:hover': {
              border: '1px solid white',
              bgcolor: 'rgba(255,255,255,0.1)',
            },
          }}
          variant="outlined"
        >
          Decline
        </Button>
        <Button
          onClick={handleAccept}
          sx={{
            bgcolor: 'white',
            color: 'primary.main',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.9)',
            },
          }}
          variant="contained"
        >
          Accept
        </Button>
      </Box>
    </Box>
  );
};

export default CookieConsent;
