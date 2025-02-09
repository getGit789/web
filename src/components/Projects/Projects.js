import React from 'react';
import { Box, Typography, Card, CardContent, Button, Grid, Chip, styled } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const ProjectsContainer = styled(Box)({
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

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.mode === 'dark' ? '#1E1E1E' : theme.palette.background.paper,
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  borderRadius: '24px',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.palette.mode === 'dark' 
      ? '0 8px 24px rgba(0, 0, 0, 0.3)'
      : '0 8px 24px rgba(0, 0, 0, 0.1)',
  },
}));

const ProjectImageWrapper = styled(Box)(({ isComingSoon }) => ({
  position: 'relative',
  '&::after': isComingSoon ? {
    content: '"Coming Soon..."',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
  } : {},
}));

const ProjectImage = styled('img')(({ isComingSoon }) => ({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  objectPosition: 'center top',
  filter: isComingSoon ? 'grayscale(100%)' : 'none',
}));

const ProjectContent = styled(CardContent)({
  flexGrow: 1,
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '16px',
  color: theme.palette.text.primary,
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  color: theme.palette.text.secondary,
  marginBottom: '24px',
}));

const TechStack = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginBottom: '24px',
});

const TechChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(156, 39, 176, 0.15)' : 'rgba(156, 39, 176, 0.1)',
  color: theme.palette.mode === 'dark' ? '#E040FB' : '#9C27B0',
  borderRadius: '16px',
  fontWeight: 500,
}));

const ButtonContainer = styled(Box)({
  display: 'flex',
  gap: '16px',
  marginTop: 'auto',
  justifyContent: 'center',
});

const projects = [
  {
    title: 'Real-time Chat Application',
    description: 'A modern chat application with real-time messaging, user authentication, and message history.',
    tech: ['Node.js', 'Socket.io', 'React', 'MongoDB'],
    demo: 'https://realtimechatapp-57e81.web.app/',
    code: 'https://github.com/getGit789/pingit',
    image: process.env.PUBLIC_URL + '/realtimechatappimage.png'
  },
  {
    title: 'E-commerce Dashboard',
    description: 'Admin dashboard for managing products, orders, and customer data with analytics.',
    tech: ['Next.js', 'TypeScript', 'React', 'Redux'],
    demo: 'https://fidlygrid-ce08b.web.app/',
    code: 'https://github.com/getGit789/ecommerce',
    image: process.env.PUBLIC_URL + '/ecommerce.png'
  },
  {
    title: 'Weather Application',
    description: 'Weather forecast app with location search and detailed weather information.',
    tech: ['JavaScript', 'OpenWeather API', 'HTML', 'CSS'],
    demo: 'https://getgit789.github.io/weather/',
    code: 'https://github.com/getGit789/weather',
    image: process.env.PUBLIC_URL + '/wheatherapp.png'
  },
  {
    title: 'Note-Taking Application',
    description: 'A modern task management app featuring a Pomodoro timer, drag-and-drop interface, task prioritization, real-time updates',
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Vite'],
    demo: 'https://notenook.up.railway.app',
    code: 'https://github.com/getGit789/notenook',
    image: process.env.PUBLIC_URL + '/notenook.png'
  },
  {
    title: 'Resume Builder',
    description: 'AI-powered Resume Builder in Next.js with customizable themes and dynamic components for professional,...',
    tech: ['Next.js', 'React', 'OpenAI', 'TailwindCSS', 'TypeScript'],
    image: process.env.PUBLIC_URL + '/websitebuilder.PNG',
    comingSoon: true
  }
];

function Projects() {
  return (
    <ProjectsContainer>
      <SectionTitle>Featured Projects</SectionTitle>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <ProjectCard elevation={0}>
              <ProjectImageWrapper isComingSoon={project.comingSoon}>
                <ProjectImage 
                  src={project.image} 
                  alt={project.title}
                  isComingSoon={project.comingSoon}
                />
              </ProjectImageWrapper>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, i) => (
                    <TechChip key={i} label={tech} />
                  ))}
                </TechStack>
                {!project.comingSoon && (
                  <ButtonContainer>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<GitHubIcon />}
                      href={project.code}
                      target="_blank"
                    >
                      Code
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<LaunchIcon />}
                      component="a"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </Button>
                  </ButtonContainer>
                )}
              </ProjectContent>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </ProjectsContainer>
  );
}

export default Projects;
