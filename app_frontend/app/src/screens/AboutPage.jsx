import React from "react";
import Header from '../components/Header';
// Import MUI components
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Paper, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CodeIcon from '@mui/icons-material/Code';

// Import your theme if needed
// import { theme } from '../path/to/your/theme';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background-color)] text-[var(--text-color)]">
      {/* Header */}
      <Header/>

      {/* Team section */}
      <Container className="section-container" maxWidth="lg" sx={{ mb: 5, mt: 3 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2, bgcolor: 'whitecolor.main' }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ 
            fontWeight: 'bold', 
            color: 'var(--color-navy, inherit)',
            pb: 1,
            borderBottom: '2px solid',
            borderColor: 'var(--color-navy, inherit)'
          }}>
            About our Team - Party Poopers
          </Typography>
          
          <Typography variant="body1" paragraph className="mt-3">
            Welcome! We are the creative minds behind this web application developed as part of our SOEN 343 course. 
            We are a team of four students, dedicated to building strong solutions and discovering the world of design patterns and architecture. 
            Let us introduce ourselves and provide some insight into our project.
          </Typography>

          <Typography variant="h6" className="mt-3" sx={{ mb: 2 }}>
            Our Team:
          </Typography>
          
          <Grid container spacing={3}>
            {[
              { name: "Marchelino Habchi", id: "40259668" },
              { name: "Dominique Proulx", id: "40177566" },
              { name: "Tanim Chowdhury", id: "40245607" },
              { name: "Mathieu Phan", id: "40176824" }
            ].map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ 
                  height: '100%', 
                  transition: '0.3s', 
                  bgcolor: 'buttons.main',
                  '&:hover': { transform: 'translateY(-5px)' , bgcolor: 'secondary.main',}
                }}>
                  <CardContent>
                    <Avatar sx={{ 
                      width: 56, 
                      height: 56, 
                      mb: 2, 
                      bgcolor: 'accent.main',
                      color: 'whitecolor.main',
                    }}>
                      {member.name.charAt(0)}
                    </Avatar>
                    <Typography variant="h6" component="div">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="accent.main">
                      ID: {member.id}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>

      {/* Mission section */}
      <Container className="section-container" maxWidth="lg" sx={{ mb: 5 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2,bgcolor: 'whitecolor.main'  }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            <SchoolIcon sx={{ fontSize: 32, mr: 1, verticalAlign: 'text-bottom', color: 'var(--color-navy)' }} />
            SEES - Our Mission
          </Typography>
          
          <Typography variant="body1" paragraph>
            SEES is a comprehensive web-based platform designed to revolutionize educational event management. 
            We empower organizers to create, manage, and promote impactful educational events, while enabling 
            attendees to discover, register for, and actively participate in meaningful learning experiences.
          </Typography>

          <Typography variant="h5" className="mt-3" gutterBottom>
            What Makes Us Different
          </Typography>
          <Typography variant="body1" paragraph>
            Unlike traditional event platforms, SEES focuses on the complete event lifecycle - including pre-event 
            engagement and post-event interaction. We believe that educational events shouldn't be isolated 
            experiences but ongoing journeys of learning and connection.
          </Typography>
        </Paper>
      </Container>

      {/* Features section */}
      <Container className="section-container" maxWidth="lg" sx={{ mb: 5 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2, bgcolor: 'whitecolor.main'}}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            <EmojiEventsIcon sx={{ fontSize: 32, mr: 1, verticalAlign: 'text-bottom', color: 'var(--color-navy)' }} />
            The Power of SEES
          </Typography>
          
          <Grid container spacing={4}>
            {/* Organizers section */}
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'var(--color-navy, #1976d2)' }}>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                    <GroupIcon sx={{ fontSize: 24, mr: 1 }} />
                    For Organizers
                  </Typography>
                  
                  <List>
                    {[
                      "Create and manage educational events with powerful tools",
                      "Generate excitement with pre-event engagement features",
                      "Collect valuable feedback after events",
                      "Build ongoing communities around educational content",
                      "Reach larger audiences through enhanced promotion features"
                    ].map((item, index) => (
                      <ListItem key={index} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleOutlineIcon sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary={item} primaryTypographyProps={{ color: 'white' }} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            
            {/* Attendees section */}
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'var(--color-navy, #1976d2)' }}>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                    <GroupIcon sx={{ fontSize: 24, mr: 1 }} />
                    For Attendees
                  </Typography>
                  
                  <List>
                    {[
                      "Discover relevant educational events tailored to your interests",
                      "Preview events accurately before registering",
                      "Engage with content before, during, and after events",
                      "Share feedback and experiences with organizers and other attendees",
                      "Continue learning beyond the scheduled event time"
                    ].map((item, index) => (
                      <ListItem key={index} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleOutlineIcon sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary={item} primaryTypographyProps={{ color: 'white' }} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          
          {/* Technology section */}
          <Paper elevation={1} sx={{ mt: 4, p: 3, borderRadius: 2, bgcolor: 'accent.main' }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ display: 'flex', alignItems: 'center',color: 'white'}}>
              <CodeIcon sx={{ fontSize: 24, mr: 1, color: 'whitecolor.main' }} />
              Our Technology
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>
              SEES is built using modern web technologies focused on creating seamless, responsive, 
              and accessible experiences for all users. Our platform integrates robust event management 
              tools with community-building features to create a unique educational ecosystem.
            </Typography>
          </Paper>
        </Paper>
      </Container>

      {/* FAQ section */}
      <Container maxWidth="lg" sx={{ mb: 5 }} id="faq-section">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2, bgcolor: 'whitecolor.main' }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ 
            fontWeight: 'bold', 
            mb: 4,
            textAlign: 'center',
            color: 'var(--color-navy, inherit)'
          }} id="faq-section-header">
            Frequently Asked Questions
          </Typography>
          
          {[
            {
              question: "How can I create an event on SEES?",
              answer: "Clicking on the Button \"Become an organizer\" will bring you to the create event form. From there you can add all the event information and the agenda as well! Try it out now and become an organizer of SEES events!"
            },
            {
              question: "What types of events can be hosted on SEES?",
              answer: "SEES is designed for all types of educational events - from webinars, workshops, and conferences to seminars, training sessions, and educational meetups. If your event has a learning component, SEES can help you manage and enhance it."
            },
            {
              question: "How do I register for events as an attendee?",
              answer: "Once you create a user account, you can browse events by category, date, or topic, preview event details, and register with just a few clicks. Your dashboard will track all your registered and past events."
            },
            {
              question: "Can I help work on this Website?",
              answer: "We encourage you to register an account on our platform and provide us with valuable feedback. Your insights will help us enhance the platform and make it even more user-friendly. If you have any questions, suggestions, or inquiries, please feel free to reach out to us!"
            },
          ].map((faq, index) => (
            <Accordion 
              key={index} 
              sx={{ 
                mb: 2, 
                '&:before': { display: 'none' },
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'whitecolor.main',
                '&.Mui-expanded': { 
                  mt: 0,
                  boxShadow: 2
                }
              }}
              className="faq-container"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'var(--color-navy)' }} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{ bgcolor: 'buttons.main' }}
                className="faq-title"
              >
                <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="faq-text">
                <Typography variant="body1">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>
      </Container>

      {/* Footer */}
      <footer className="bg-[var(--color-navy)] text-white py-6 mt-auto">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Smart Education Events System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}