import React, { useState } from 'react';
import './App.css';
import Stepper from './components/molecules/stepper/stepper';
import { Text } from './components/atoms/text/text';
import FlexContainer from './components/atoms/flex-container/flex-container';
import { AppIcons } from './assets/icons';
import SpacingDivider from './components/atoms/spacing-divider/spacing-divider';

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      label: 'Service Details',
      children: (
        <FlexContainer flexDirection="column" spacing={8}>
          <FlexContainer alignChildren="center" spacing={8}>
            <Text $renderAs="bodySecondary" $color="primary">
              Oracle_service
            </Text>
            <AppIcons.OracleLogo 
              width={16} 
              height={16} 
              style={{ color: 'var(--danger-200)' }}
            />
            <SpacingDivider dividerHeight={10} dividerWidth={1} backgroundTone='surface-300' />
            <Text $renderAs="Text-body/secondary/secondary" $color="subtler">
              oracle_para_profile
            </Text>
          </FlexContainer>
        </FlexContainer>
      ),
    },
    {
      label: 'Additional Setting',
      children: (
        <FlexContainer flexDirection="column" spacing={8}>
          <FlexContainer alignChildren="center" spacing={8}>
            <Text $renderAs="bodySecondary" $color="subtler">
              No Preference
            </Text>
            <Text $renderAs="bodySecondary" $color="subtler">
              Enabled minor version update
            </Text>
          </FlexContainer>
          <FlexContainer alignChildren="center" spacing={8}>
            <Text $renderAs="bodySecondary" $color="subtler">
              7-day PITR
            </Text>
            <Text $renderAs="bodySecondary" $color="subtler">
              01:00 snapshot time
            </Text>
          </FlexContainer>
        </FlexContainer>
      ),
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h2>Stepper Example</h2>
        <div style={{ 
          maxWidth: '500px', 
          margin: '20px auto',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'left'
        }}>
          <Stepper 
            steps={steps} 
            currentStepIndex={currentStep}
            onStepChange={setCurrentStep}
          />
          
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <button 
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              style={{ marginRight: '10px' }}
            >
              Previous
            </button>
            <button 
              onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
              disabled={currentStep === steps.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
