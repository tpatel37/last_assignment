import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";

export default function Resources() {
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
        Learning Materials & References
      </Typography>

      <Stack spacing={2}>
        <div>
          <Typography variant="subtitle1" fontWeight="bold">
            React Portfolio Walkthrough
          </Typography>
          <Link
            href="https://www.freecodecamp.org/news/build-portfolio-website-react/"
            target="_blank"
            rel="noopener"
          >
            Step-by-step guide from FreeCodeCamp
          </Link>
        </div>

        <div>
          <Typography variant="subtitle1" fontWeight="bold">
            Design Inspiration
          </Typography>
          <Link
            href="https://dev.to/codebucks/build-a-stunning-portfolio-with-react-js-p1"
            target="_blank"
            rel="noopener"
          >
            Article by CodeBucks on creating standout portfolios
          </Link>
        </div>

        <div>
          <Typography variant="subtitle1" fontWeight="bold">
            Recommended Reading
          </Typography>
          <Typography variant="body2">
            <em>The Unicorn Project</em> by Gene Kim — a must-read on modern
            software development practices.
          </Typography>
        </div>
      </Stack>
    </Box>
  );
}
