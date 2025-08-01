import { Button } from "../components/atoms/button/button";
import FlexContainer from "../components/atoms/flex-container/flex-container";
import HeaderTitle from "../components/organisms/header-title/header-title";
import Header from "../components/organisms/header/header";
import SpacingDivider from "../components/atoms/spacing-divider/spacing-divider";
import { AdvancedConfigurationPanel } from "./sections/advanced-config-panel";
import ApplicationConfigurationPanel from "./sections/application-configuration-panel/application-configuration-panel";
import StepsSection from "./sections/steps-section/steps-section";
import * as S from "./common-style";
import { useProvisioning } from "./use-provisioning";
import { ProvisioningProvider } from "./context/provisioning-context";
import { memo } from "react";

const ProvisioningComp: React.FC = () => {

  const { steps, currentStepIndex, isLoading, handleServiceSubmit, handleAdditionalSettingsSubmit } = useProvisioning();

  return (
    <S.ContentWrapper>
      <Header
        credits={777}
        userAvatarSrc={
          "https://avatars.githubusercontent.com/u/72172954?v=4"
        }
        breadcrumbs={[
          { label: "Provisioning" },
          { label: "Relational Databases" },
          { label: "Oracle Server" },
        ]}
        backgroundColor="inverse"
      />
      <HeaderTitle
        title="Create New Oracle Database Service"
        backgroundColor="inverse"
        trailingItem={
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
        }
        onDismiss={()=>{}}
      />
      <SpacingDivider verticalSizeMultiplier={1.5} />
      <S.ContentArea>
        <S.CreateServiceSectionWrapper>
          <StepsSection 
            steps={steps} 
            currentStepIndex={currentStepIndex}
            isLoading={isLoading}
            onCreateService={currentStepIndex === 0 ? handleServiceSubmit : handleAdditionalSettingsSubmit}
          />
        </S.CreateServiceSectionWrapper>
        <FlexContainer flexValue={1} spacing={20} flexDirection="column">
          <ApplicationConfigurationPanel />
          <AdvancedConfigurationPanel />
        </FlexContainer>
      </S.ContentArea>
      <SpacingDivider verticalSizeMultiplier={2} />
    </S.ContentWrapper>
  );
};

const ProvisioningPage = () => (
  <ProvisioningProvider>
    <ProvisioningComp />
  </ProvisioningProvider>
);

export default memo(ProvisioningPage);
