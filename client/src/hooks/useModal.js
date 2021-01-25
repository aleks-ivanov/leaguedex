import React, { createContext, useContext, useState } from "react";

const modalContext = createContext();

export const ModalProvider = ({ children }) => {
  const modal = useModalProvider();
  return (
    <modalContext.Provider value={modal} displayName="Modal">
      {children}
    </modalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(modalContext);
};

const useModalProvider = () => {
  const [modal, setModal] = useState(null);
  const [reverse, setReverse] = useState(false);

  const isOpen = (modalName) => modal === modalName;

  return {
    modal,
    setModal,
    isOpen,
    reverse,
    setReverse,
  };
};
