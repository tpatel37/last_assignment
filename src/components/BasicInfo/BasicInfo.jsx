import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

export default function BasicInfo() {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
          textAlign: "center",
        }}
      >
        <Avatar
          src="/avatar.png"
          alt="Tiya Patel"
          sx={{
            width: 120,
            height: 120,
            margin: "0 auto 16px auto",
            boxShadow: 2,
            border: "3px solid #fff",
          }}
        />

        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Tiya Patel
        </Typography>

        <Typography variant="body1" sx={{ mt: 1 }}>
          Full-Stack Web Development Student | Passionate Coder
        </Typography>

        <Typography variant="body2" sx={{ mt: 2 }}>
          From Gujarat, India 🇮🇳 to Canada 🇨🇦 — building modern, responsive, and
          meaningful web experiences.
        </Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          Experienced in JavaScript, React, PHP, and Docker with a focus on
          clean UI/UX and functionality.
        </Typography>
      </Box>
    </Box>
  );
}
