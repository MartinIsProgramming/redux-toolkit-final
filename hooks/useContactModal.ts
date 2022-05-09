import { useState } from 'react';

export const useContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return {
    isOpen,
    closeModal,
    openModal,
  };
};
