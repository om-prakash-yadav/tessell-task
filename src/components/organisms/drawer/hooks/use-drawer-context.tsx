import { createContext, useContext, useState } from 'react';

interface DrawerContextType {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  isTabletOrMobile?: boolean;
}

export const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  if (!context) {
    // Return a default implementation if context is not available
    return {
      isDrawerOpen,
      toggleDrawer: () => setIsDrawerOpen(prev => !prev),
      openDrawer: () => setIsDrawerOpen(true),
      closeDrawer: () => setIsDrawerOpen(false),
      isTabletOrMobile: false,
    };
  }
  return context;
};
