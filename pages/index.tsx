import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "../src/components/core/Table";
import { LocalStorageProvider } from "../src/contexts/useLocalStorage";

export default function Home() {
  return (
    <LocalStorageProvider>
      <Container
        maxWidth="lg"
        sx={{
          height: "100vh",
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "grid",
            gridTemplateRows: "auto 1fr auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Material UI - Next.js example in TypeScript
          </Typography>
        </Box>
      </Container>
    </LocalStorageProvider>
  );
}
