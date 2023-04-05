import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TemplateTable from "../src/components/template/TemplateTable";
import { LocalStorageProvider } from "../src/contexts/useLocalStorage";
import { useGridApiRef } from "@mui/x-data-grid";
import { ModalContextProvider } from "../src/contexts/useModal";
import AddTemplateModal from "../src/components/template/AddTemplateModal";
import Shell from "../src/components/core/Shell";

export default function Home() {
  const tableRef = useGridApiRef();
  return (
    <Shell>
      <LocalStorageProvider>
        <ModalContextProvider>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              border: "2px dotted orange",
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Templates
            </Typography>

            <Box
              sx={{
                height: "100%",
                width: "100%",
                border: "2px dotted black",
              }}
            >
              <TemplateTable tableRef={tableRef} />
            </Box>
          </Box>
          <AddTemplateModal />
        </ModalContextProvider>
      </LocalStorageProvider>
    </Shell>
  );
}
