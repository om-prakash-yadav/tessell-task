import { memo } from "react";
import { Button } from "../components/atoms/button/button";
import FlexContainer from "../components/atoms/flex-container/flex-container";
import SpacingDivider from "../components/atoms/spacing-divider/spacing-divider";
import { Text } from "../components/atoms/text/text";
import IconAction from "../components/atoms/icon-action/icon-action";
import { useDrawerContext } from "../components/organisms/drawer/hooks/use-drawer-context";
import AdditionalSettingsSection from "./sections/additional-settings-section/additional-settings-section";
import ServiceDetailsSection from "./sections/service-details-section/service-details-section";
import StepsSection from "./sections/steps-section/steps-section";
import { CreateServiceSectionWrapper, ContentContainer } from "./provisioning.styled";
import { useProvisioning } from "./use-provisioning";
import { ProvisioningProvider } from "./context/provisioning-context";
import { ThemeColors, ThemeSpacing } from "../theme/theme";
import { AppIcons } from "../assets/icons";

const ProvisioningComp: React.FC = () => {
  const { toggleDrawer } = useDrawerContext();
  const { steps, currentStepIndex } = useProvisioning();

  // Header styles
  const headerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: ThemeColors["surface-200"],
    padding: `calc(${ThemeSpacing.variables.GUTTER}) calc(${ThemeSpacing.variables.GUTTER} * 1.5)`,
    borderBottom: `1px solid ${ThemeColors["surface-100"]}`,
  };

  // Breadcrumb styles
  const breadcrumbStyles = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  // Header title styles
  const headerTitleStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: ThemeColors["surface-200"],
    padding: `calc(${ThemeSpacing.variables.GUTTER}) calc(${ThemeSpacing.variables.GUTTER} * 1.5)`,
    borderBottom: `1px solid ${ThemeColors["surface-100"]}`,
  };

  // Content wrapper styles
  const contentWrapperStyles = {
    display: "flex",
    flexDirection: "column" as const,
    minHeight: "100vh",
  };

  // Main content area styles
  const contentAreaStyles = {
    display: "flex",
    padding: `calc(${ThemeSpacing.variables.GUTTER} * 1.5)`,
    gap: `calc(${ThemeSpacing.variables.GAP})`,
    flex: 1,
  };

  return (
    <div style={contentWrapperStyles}>
      {/* Header */}
      <div style={headerStyles}>
        <FlexContainer alignChildren="center" spacing={8}>
          <Text $renderAs="bodySecondary" $color="subtler">Credits: 777</Text>
          <div style={breadcrumbStyles}>
            <Text $renderAs="bodySecondary" $color="subtler">Provisioning</Text>
            <Text $renderAs="bodySecondary" $color="subtlest">/</Text>
            <Text $renderAs="bodySecondary" $color="subtler">Relational Databases</Text>
            <Text $renderAs="bodySecondary" $color="subtlest">/</Text>
            <Text $renderAs="bodySecondary" $color="subtler">Oracle Server</Text>
          </div>
        </FlexContainer>
        <div style={{ width: "48px", height: "48px", borderRadius: "50%", overflow: "hidden" }}>
          <img 
            src="https://i.pinimg.com/236x/8c/52/14/8c5214d30329d77c9564ab31fd9d0579.jpg" 
            alt="User Avatar" 
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Header Title */}
      <div style={headerTitleStyles}>
        <FlexContainer alignChildren="center" spacing={12}>
          <IconAction
            iconKey="Close"
            buttonScale="medium"
            accessibilityLabel="Close"
            buttonStyle="secondary"
            onClick={toggleDrawer}
          />
          <Text $renderAs="heading/Titles" $color="primary">
            Create New Oracle Database Service
          </Text>
        </FlexContainer>
        <Button
          $icon="Code"
          $size="small"
          $isSelected={true}
          $type="tertiary"
          $isHorizontallyCentered={true}
          onClick={() => {}}
        >
          Code
        </Button>
      </div>

      <SpacingDivider verticalSizeMultiplier={1.5} />

      {/* Main Content */}
      <div style={contentAreaStyles}>
        <CreateServiceSectionWrapper>
          <StepsSection steps={steps} currentStepIndex={currentStepIndex} />
        </CreateServiceSectionWrapper>
        <FlexContainer 
          flexValue={1} 
          spacing={16} 
          flexDirection="column"
        >
          <ServiceDetailsSection />
          <AdditionalSettingsSection />
        </FlexContainer>
      </div>

      <SpacingDivider verticalSizeMultiplier={2} />
    </div>
  );
};

const ProvisioningPage = () => (
  <ProvisioningProvider>
    <ProvisioningComp />
  </ProvisioningProvider>
);

export default memo(ProvisioningPage);
