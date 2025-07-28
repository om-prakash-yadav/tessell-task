import React, { useState } from 'react';
import { DrawerContext } from './use-drawer-context';

interface DrawerProviderProps {
  children: React.ReactNode;
  initialOpen?: boolean;
}

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ 
  children, 
  initialOpen = false 
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(initialOpen);

  const toggleDrawer = () => setIsDrawerOpen(prev => !prev);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <DrawerContext.Provider 
      value={{ 
        isDrawerOpen, 
        toggleDrawer, 
        openDrawer, 
        closeDrawer 
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
