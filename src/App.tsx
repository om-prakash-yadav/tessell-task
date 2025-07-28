import React, { useState } from 'react';
import './App.css';
import { DrawerProvider, Drawer, useDrawerContext, DRAWER_WIDTH } from './components/organisms/drawer';
import Provisioning from './pages/provisioning';
import type { DrawerBtnProps, DrawerDropdownProps } from './components/organisms/drawer/drawer-types';
import type { DropdownItemProps } from './components/organisms/dropdown/dropdown-types';

// Sample menu options matching the first image
const menuOptions: DrawerBtnProps[] = [
  {
    $icon: 'MyServices',
    label: 'My Services',
    $isSelected: false,
    onClick: () => console.log('My Services clicked'),
  },
  {
    $icon: 'Provisioning',
    label: 'Provisioning',
    $isSelected: true, // This should be selected since we're on provisioning page
    onClick: () => console.log('Provisioning clicked'),
  },
  {
    $icon: 'AvailabilityMachines',
    label: 'Availability Machines',
    $isSelected: false,
    onClick: () => console.log('Availability Machines clicked'),
  },
  {
    $icon: 'Servers',
    label: 'Servers',
    $isSelected: false,
    onClick: () => console.log('Servers clicked'),
  },
  {
    $icon: 'DataFlix',
    label: 'DataFlix',
    $isSelected: false,
    onClick: () => console.log('DataFlix clicked'),
  },
  {
    $icon: 'Benchmarks',
    label: 'Benchmarks',
    $isSelected: false,
    onClick: () => console.log('Benchmarks clicked'),
  },
  {
    $icon: 'ScriptLibrary',
    label: 'Script Library',
    $isSelected: false,
    onClick: () => console.log('Script Library clicked'),
  },
];

const footerOptions: DrawerBtnProps[] = [
  {
    $icon: 'Book',
    label: 'Documentation',
    $isSelected: false,
    onClick: () => console.log('Documentation clicked'),
  },
  {
    $icon: 'Announcement',
    label: "What's New",
    $isSelected: false,
    onClick: () => console.log("What's New clicked"),
  },
  {
    $icon: 'QuestionMark',
    label: 'Help & Support',
    $isSelected: false,
    onClick: () => console.log('Help & Support clicked'),
  },
];

// Dropdown options for DB Services
const dropdownOptions: DropdownItemProps[] = [
  {
    label: 'DB Services',
    value: 'db-services',
  },
  {
    label: 'Analytics Services',
    value: 'analytics-services',
  },
  {
    label: 'Storage Services',
    value: 'storage-services',
  },
];

const AppContent: React.FC = () => {
  const { isDrawerOpen } = useDrawerContext();
  const [selectedDropdownValue, setSelectedDropdownValue] = useState<string | number>('db-services');

  const dropdownConfig: DrawerDropdownProps = {
    options: dropdownOptions,
    selected: selectedDropdownValue,
    handleChange: (value) => {
      setSelectedDropdownValue(value);
      console.log('Dropdown selection changed:', value);
    },
  };

  // Main content styles that adjust based on drawer state
  const mainContentStyles = {
    marginLeft: isDrawerOpen ? `${DRAWER_WIDTH}px` : '0px',
    transition: 'margin-left 0.3s ease-in-out',
    minHeight: '100vh',
    width: isDrawerOpen ? `calc(100% - ${DRAWER_WIDTH}px)` : '100%',
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Drawer
        menuOptions={menuOptions}
        footerOptions={footerOptions}
        dropdown={dropdownConfig}
      />
      <div style={mainContentStyles}>
        <Provisioning />
      </div>
    </div>
  );
};

function App() {
  return (
    <DrawerProvider initialOpen={true}>
      <AppContent />
    </DrawerProvider>
  );
  }


export default App;
