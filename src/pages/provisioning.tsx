import { Button } from "../components/atoms/button/button";
import FlexContainer from "../components/atoms/flex-container/flex-container";
import HeaderTitle from "../components/organisms/header-title/header-title";
import Header from "../components/organisms/header/header";
import SpacingDivider from "../components/atoms/spacing-divider/spacing-divider";
import { useDrawerContext } from "../components/organisms/drawer/hooks/use-drawer-context";
import AdditionalSettingsSection from "./sections/additional-settings-section/additional-settings-section";
import ServiceDetailsSection from "./sections/service-details-section/service-details-section";
import StepsSection from "./sections/steps-section/steps-section";
import * as S from "./common-style";
import { useProvisioning } from "./use-provisioning";
import { ProvisioningProvider } from "./context/provisioning-context";
import { memo } from "react";
import { ThemeSpacing } from "../theme/theme";

const ProvisioningComp: React.FC = () => {
  const { toggleDrawer } = useDrawerContext();

  const { steps, currentStepIndex } = useProvisioning();

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
        onDismiss={toggleDrawer}
      />
      <SpacingDivider verticalSizeMultiplier={1.5} />
      <S.ContentArea>
        <S.CreateServiceSectionWrapper>
          <StepsSection steps={steps} currentStepIndex={currentStepIndex} />
        </S.CreateServiceSectionWrapper>
        <FlexContainer flexValue={1} spacing={20} flexDirection="column">
          <ServiceDetailsSection />
          <AdditionalSettingsSection />
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
