import Modal from "../core/Modal";
import { useModalActions, useModalState } from "../../contexts/useModal";
import { Box, Button, Container, Fab, Typography } from "@mui/material";
import AddTemplateForm from "./AddTemplateForm";
import AddIcon from "@mui/icons-material/Add";
import { relative } from "path";

const AddTemplateModal = () => {
  const { closeModal, openModal } = useModalActions();
  const { isOpen } = useModalState();
  return (
    <Container sx={{ position: "relative" }}>
      <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
        <Fab onClick={() => openModal()} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>

      <Modal handleClose={closeModal} open={isOpen}>
        <AddTemplateForm />
      </Modal>
    </Container>
  );
};

export default AddTemplateModal;
