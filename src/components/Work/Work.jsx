import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function Work() {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          padding: 3,
          borderRadius: 4,
          background: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          scrollBehavior: "smooth",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Work & Learning Journey
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>Projects Accomplished:</strong>
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Personal Portfolio with React & Tailwind" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Reusable UI Components with Storybook" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Containerized App using Docker Compose" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Version Management with Git and GitHub" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Automated Testing Setup" />
          </ListItem>
        </List>

        <Typography sx={{ mt: 2 }}>
          <strong>Skills Acquired:</strong>
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="ES6 JavaScript & React Fundamentals" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Component-driven development with Storybook" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Git workflows for team collaboration" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Docker for application isolation & scaling" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Test writing and running with Jest & React Testing Library" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Introduction to CI/CD pipelines" />
          </ListItem>
        </List>

        <Typography sx={{ mt: 2 }}>
          <strong>Takeaways from “The Unicorn Project”:</strong>
        </Typography>
        <Typography variant="body2">
          Reading the book highlighted how critical developer autonomy, rapid
          feedback, and shared understanding are in delivering quality software.
          It reshaped my mindset to prioritize continuous improvement,
          experimentation, and building systems that support innovation.
        </Typography>
      </Box>
    </Box>
  );
}
