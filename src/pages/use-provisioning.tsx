import { useCallback, useMemo, useState } from "react";
import { AppIcons } from "../resources/icons";
import FlexContainer from "../components/atoms/flex-container/flex-container";
import SpacingDivider from "../components/atoms/spacing-divider/spacing-divider";
import type { StepperItem } from "../components/molecules/stepper/stepper.types";
import { Text } from "../components/atoms/text/text";
import { useProvisioningPageContext } from "./hooks/use-provisioning-context";

export const useProvisioning = () => {
  const { serviceSection, additionalSection } = useProvisioningPageContext();

  const [isLoading, setIsLoading] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleServiceSubmit = useCallback(async () => {
    setIsLoading(true);
    const res = await serviceSection.executeFormSubmission();
    if (res) {
      setCurrentStepIndex(1);
    }
    setIsLoading(false);
  }, [serviceSection]);

  const handleAdditionalSettingsSubmit = useCallback(async () => {
    setIsLoading(true);
    const res = await additionalSection.handleSubmit();
    if (res) {
      setCurrentStepIndex(0);
      additionalSection.scrollIntoView();
      // Using basic alert instead of SweetAlert2 to remove dependency
      alert('Service Created: Your Oracle Database Service has been created successfully.');
    }
    setIsLoading(false);
  }, [additionalSection]);

  const steps = useMemo(
    () =>
      [
        {
          label: "Service Details",
          children: (
            <FlexContainer
              flexDirection="row"
              alignChildren="center"
              flexWrap="wrap"
              spacing={6}
            >
              <FlexContainer spacing={6}>
                <Text
                  $renderAs="Text-body/secondary/secondary"
                  $color="subtler"
                >
                  Oracle_service
                </Text>
                <AppIcons.OracleLogo />
              </FlexContainer>
              <SpacingDivider dividerHeight={10} dividerWidth={1} backgroundTone="surface-300" />
              <Text $renderAs="Text-body/secondary/secondary" $color="subtler">
                oracle_para_profile
              </Text>
            </FlexContainer>
          ),
        },
        {
          label: "Additional Setting",
          children: (
            <FlexContainer
              flexDirection="row"
              alignChildren="center"
              flexWrap="wrap"
              spacing={6}
            >
              <Text $renderAs="Text-body/secondary/secondary" $color="subtler">
                No Preference
              </Text>
              <Text $renderAs="Text-body/secondary/secondary" $color="subtler">
                Enabled minor version update
              </Text>
              <SpacingDivider dividerHeight={10} dividerWidth={0.5} backgroundTone="surface-300" />
              <FlexContainer spacing={6}>
                <Text
                  $renderAs="Text-body/secondary/secondary"
                  $color="subtler"
                >
                  7-day PITR
                </Text>
                <Text
                  $renderAs="Text-body/secondary/secondary"
                  $color="subtler"
                >
                  01:00 snapshot time
                </Text>
              </FlexContainer>
              <SpacingDivider dividerHeight={10} dividerWidth={0.5} backgroundTone="surface-300" />
            </FlexContainer>
          ),
        },
      ] as StepperItem[],
    []
  );

  return {
    steps,
    currentStepIndex,
    isLoading,
    handleServiceSubmit,
    handleAdditionalSettingsSubmit,
  };
};
