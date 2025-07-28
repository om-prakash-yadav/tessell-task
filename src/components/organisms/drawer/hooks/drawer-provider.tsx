import React, { useState, useEffect } from 'react';
import { DrawerContext } from './use-drawer-context';
import { BreakpointDevices } from '../../../../theme/constants/breakpoints-devices';

interface DrawerProviderProps {
  children: React.ReactNode;
  initialOpen?: boolean;
}

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ 
  children, 
  initialOpen = false 
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(initialOpen);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

  // Check if screen is tablet or mobile
  useEffect(() => {
    const checkScreenSize = () => {
      const isTabletOrBelow = window.innerWidth < BreakpointDevices.desktop;
      setIsTabletOrMobile(isTabletOrBelow);
      
      // Auto-close drawer on tablet/mobile screens
      if (isTabletOrBelow && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };

    // Check initial screen size
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [isDrawerOpen]);

  const toggleDrawer = () => setIsDrawerOpen(prev => !prev);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <DrawerContext.Provider 
      value={{ 
        isDrawerOpen, 
        toggleDrawer, 
        openDrawer, 
        closeDrawer,
        isTabletOrMobile
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
