import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '../Icons/XIcon';

const FooterContainer = styled(Box)(({ theme }) => ({
  padding: '24px',
  textAlign: 'center',
  backgroundColor: theme.palette.mode === 'dark' ? '#1E1E1E' : theme.palette.background.paper,
  borderRadius: '24px 24px 0 0',
  marginTop: '80px',
}));

const SocialLinks = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
  marginBottom: '16px',
});

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateY(-2px)',
  },
}));

const Copyright = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '14px',
}));

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <SocialLinks>
        <StyledIconButton 
          href="https://github.com/getGit789" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <GitHubIcon />
        </StyledIconButton>
        <StyledIconButton 
          href="https://www.linkedin.com/in/damir-kranjcevic-613825200" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <LinkedInIcon />
        </StyledIconButton>
        <StyledIconButton 
          href="https://x.com/DKranjcevi1973" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter) Profile"
        >
          <XIcon />
        </StyledIconButton>
      </SocialLinks>
      <Copyright>
        &copy; {currentYear} Damir Kranjcevic. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
