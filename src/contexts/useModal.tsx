import { PropsWithChildren, useState } from "react";
import { createSafeContext } from "../utils/createSafeContext";

interface ModalState {
  isOpen: boolean;
}

interface ModalActions {
  openModal: () => void;
  closeModal: () => void;
}

const [useModalState, ModalStateProvider] = createSafeContext<ModalState>();
const [useModalActions, ModalActionsProvider] =
  createSafeContext<ModalActions>();

export { useModalState, useModalActions };

export function ModalContextProvider({ children }: PropsWithChildren<{}>) {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
  });

  const openModal = () => {
    setModalState({ isOpen: true });
  };

  const closeModal = () => {
    setModalState({ isOpen: false });
  };

  return (
    <ModalStateProvider value={modalState}>
      <ModalActionsProvider value={{ openModal, closeModal }}>
        {children}
      </ModalActionsProvider>
    </ModalStateProvider>
  );
}
