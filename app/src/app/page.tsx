import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Next.js with TypeScript example</h1>
      </Box>
    </Container>
  );
}
