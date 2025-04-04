import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function DeveloperSetup() {
  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: 4,
        background: "rgba(255, 255, 255, 0.75)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 6px 25px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <Typography variant="h5" gutterBottom>
        Development Environment
      </Typography>

      <List dense>
        <ListItem>
          <ListItemText
            primary="Code Editor"
            secondary="Visual Studio Code (Theme: One Dark Pro)"
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Terminal" secondary="Windows PowerShell" />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Font of Choice"
            secondary="Fira Code with ligatures"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Go-To Tech Stack"
            secondary="React & Node.js, Docker, GitHub, and basic CI/CD integration"
          />
        </ListItem>
      </List>
    </Box>
  );
}
