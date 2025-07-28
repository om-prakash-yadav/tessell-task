import React from 'react';
import FlexContainer from '../components/atoms/flex-container/flex-container';
import { ThemeColors, ThemeSpacing } from '../theme/theme';

// CSS-in-JS styled components using React.CSSProperties

export const ContentWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const styles: React.CSSProperties = {
    flex: 1,
    backgroundColor: ThemeColors["surface-50"],
    gap: `calc(${ThemeSpacing.variables.GAP})`,
  };

  return <div style={styles}>{children}</div>;
};

export const ContentArea: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <FlexContainer
      flexValue={1}
      spacing={parseInt(ThemeSpacing.variables.GAP.replace('px', ''))}
      horizontalPadding={parseInt(ThemeSpacing.variables.PAGE_PADDING.replace('px', ''))}
      flexDirection="column"
      alignChildren="flex-start"
      justifyItems="space-between"
    >
      {children}
    </FlexContainer>
  );
};

export const CreateServiceSectionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const styles: React.CSSProperties = {
    backgroundColor: ThemeColors["surface-0"],
    borderRadius: '4px',
    width: '100%',
    maxWidth: '380px',
  };

  return <div style={styles}>{children}</div>;
};

interface ContentContainerProps {
  children: React.ReactNode;
  $paddingRightX?: number;
}

export const ContentContainer = React.forwardRef<HTMLDivElement, ContentContainerProps>(({ 
  children, 
  $paddingRightX = 1 
}, ref) => {
  const styles: React.CSSProperties = {
    position: 'relative',
    backgroundColor: ThemeColors["surface-0"],
    borderRadius: '4px',
    paddingTop: `calc(${ThemeSpacing.variables.GUTTER})`,
    paddingBottom: `calc(${ThemeSpacing.variables.GUTTER})`,
    paddingLeft: `calc(${ThemeSpacing.variables.GUTTER})`,
    paddingRight: `calc(${$paddingRightX} * ${ThemeSpacing.variables.GUTTER})`,
  };

  return <div ref={ref} style={styles}>{children}</div>;
});

export const LoadingOverlay: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const styles: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    backdropFilter: 'blur(2px)',
    WebkitBackdropFilter: 'blur(2px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return <div style={styles}>{children}</div>;
};
