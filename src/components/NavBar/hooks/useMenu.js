import { useState, useCallback } from 'react';

export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = useCallback((e) => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  return {
    handleToggleMenu,
    isMenuOpen
  };
};
