import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();
  const currentDate = '09/02/2025';

  return (
    <Container maxWidth="md" sx={{ py: 8, mt: 8 }}>
      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          variant="outlined"
          color="primary"
        >
          Back to Home
        </Button>
      </Box>

      <Typography variant="h4" component="h1" gutterBottom>
        Privacy Policy
      </Typography>
      
      <Typography variant="subtitle2" color="text.secondary" paragraph>
        Last updated: {currentDate}
      </Typography>

      <Typography paragraph>
        This Privacy Policy describes how your personal information is collected, used, and shared when you visit damirkranjcevic.com (the "Site").
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Personal Information We Collect
      </Typography>

      <Typography paragraph>
        When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as "Device Information."
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Cookies
      </Typography>

      <Typography paragraph>
        We use cookies and similar tracking technologies to track the activity on our Site and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Analytics
      </Typography>

      <Typography paragraph>
        We use two types of analytics to understand how visitors use our site:
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        1. Basic Anonymous Analytics
      </Typography>

      <Typography paragraph>
        We collect basic, anonymous usage data that doesn't require cookies or store any personal information. This includes:
        - Page views
        - Visit duration
        - Device type (e.g., mobile or desktop)
        - Country of origin (anonymized)
        This data collection complies with GDPR and continues even if you decline cookies.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        2. Google Analytics (Optional)
      </Typography>

      <Typography paragraph>
        If you accept cookies, we also use Google Analytics to collect more detailed information about how our site is used. 
        Google Analytics collects information such as how often users visit this site, what pages they visit, and what other 
        sites they used prior to coming to this site. We use this information to improve your experience.
      </Typography>

      <Typography paragraph>
        Google Analytics collects only the IP address assigned to you on the date you visit this site (anonymized), rather 
        than your name or other identifying information. We do not combine the information collected through Google Analytics 
        with personally identifiable information. You can prevent Google Analytics tracking by declining cookies in the cookie 
        consent banner.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Your Rights
      </Typography>

      <Typography paragraph>
        If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us.
      </Typography>

      <Typography paragraph>
        Additionally, if you are a European resident, we note that we are processing your information in order to fulfill contracts we might have with you, or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Changes
      </Typography>

      <Typography paragraph>
        We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Contact Us
      </Typography>

      <Typography paragraph>
        For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail or by mail using the details provided on the website.
      </Typography>
    </Container>
  );
};

export default Privacy;
