import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function Skills() {
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
          Skills
        </Typography>

        <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: "bold" }}>
          Programming Languages & Frameworks:
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="JavaScript (ES6+)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="React & Node.js" />
          </ListItem>
          <ListItem>
            <ListItemText primary="HTML5 & CSS3" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Core Java" />
          </ListItem>
        </List>

        <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
          Development Tools & Platforms:
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Git & GitHub for version control" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Docker for containerization" />
          </ListItem>
          <ListItem>
            <ListItemText primary="VS Code as primary IDE" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Storybook for UI component development" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Postman for API testing" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
