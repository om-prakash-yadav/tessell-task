import React from 'react';
import FlexContainer from '../components/atoms/flex-container/flex-container';
import { ThemeColors, ThemeSpacing } from '../theme/theme';
import { MediaQuery } from '../theme/constants/media-query';
// CSS-in-JS styled components using React.CSSProperties

export const ContentWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const styles: React.CSSProperties = {
    flex: 1,
    backgroundColor: ThemeColors["surface-50"],
    gap: ThemeSpacing.variables.GAP,
  };

  return <div style={styles}>{children}</div>;
};

export const ContentArea: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth >= 1024);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <FlexContainer
      flexValue={1}
      spacing={20} // GAP value (20px)
      horizontalPadding={20} // PAGE_PADDING value (20px)
      flexDirection={isDesktop ? "row" : "column"}
      alignChildren="flex-start"
      justifyItems="space-between"
    >
      {children}
    </FlexContainer>
  );
};

export const CreateServiceSectionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth >= 1024);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles: React.CSSProperties = {
    backgroundColor: ThemeColors["surface-0"],
    borderRadius: '4px',
    width: '100%',
    maxWidth: isDesktop ? '380px' : 'none',
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
    paddingTop: ThemeSpacing.variables.GUTTER,
    paddingBottom: ThemeSpacing.variables.GUTTER,
    paddingLeft: ThemeSpacing.variables.GUTTER,
    paddingRight: `calc(${ThemeSpacing.variables.GUTTER} * ${$paddingRightX})`,
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
    WebkitBackdropFilter: 'blur(2px)', // Fixed the webkit prefix
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return <div style={styles}>{children}</div>;
};
