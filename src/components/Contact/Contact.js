import { init, send } from '@emailjs/browser';
import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, styled } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Snackbar, Alert } from '@mui/material';

const ContactContainer = styled(Box)({
  padding: '80px 24px',
  maxWidth: '1200px',
  margin: '0 auto',
});

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '40px',
  color: theme.palette.text.primary,
  textAlign: 'center',
}));

const ContactForm = styled(Box)(({ theme }) => ({
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '24px',
  padding: '32px',
  boxShadow: theme.palette.mode === 'dark' 
    ? '0 8px 24px rgba(0, 0, 0, 0.2)'
    : '0 8px 24px rgba(0, 0, 0, 0.05)',
}));

const EmailLink = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  fontSize: '16px',
  '& .MuiSvgIcon-root': {
    color: '#9C27B0',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: '24px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
  },
}));

const SubmitButton = styled(Button)({
  width: '100%',
  padding: '16px',
  borderRadius: '12px',
  fontSize: '16px',
  textTransform: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
});

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send notification to admin
      await send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ADMIN,
        {
          to_name: 'Admin',
          to_email: 'contact@damirkranjcevic.com', 
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email
        }
      );

      // Send confirmation to user
      await send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_USER,
        {
          to_name: formData.name,
          to_email: formData.email, 
          message: formData.message,
          reply_to: 'contact@damirkranjcevic.com'
        }
      );

      setSnackbar({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success'
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ContactContainer>
      <SectionTitle>Get in Touch</SectionTitle>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <EmailLink href="mailto:contact@damirkranjcevic.com">
          <EmailIcon />
          contact@damirkranjcevic.com
        </EmailLink>
      </Box>
      <ContactForm component="form" onSubmit={handleSubmit}>
        <StyledTextField
          fullWidth
          placeholder="Name *"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <StyledTextField
          fullWidth
          placeholder="Email *"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <StyledTextField
          fullWidth
          placeholder="Message *"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <SubmitButton 
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          disabled={loading}
        >
          {loading ? 'SENDING...' : 'SEND MESSAGE'}
        </SubmitButton>
      </ContactForm>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </ContactContainer>
  );
}

export default Contact;
