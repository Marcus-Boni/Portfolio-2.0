import { useState } from 'react';

export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = (e) => {
    setIsMenuOpen((prevState) => !prevState);

    e.target.classList.toggle('open');
  };

  return {
    handleToggleMenu,
    isMenuOpen
  };
};
