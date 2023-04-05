import { ReactNode } from "react";
import SearchAppBar from "./Appbar";
import { Box, Container } from "@mui/material";

function Shell({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        maxHeight: "100vh",
        maxWidth: "100vw",
        width: "100%",
        height: "100vh",
        border: "2px dotted blue",
        boxSizing: "border-box",
        padding: "100px",
      }}
    >
      <SearchAppBar />
      <Container
        maxWidth="lg"
        sx={{
          height: "100%",
          border: "2px dotted green",
        }}
      >
        {children}
      </Container>
    </Box>
  );
}

export default Shell;
