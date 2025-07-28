import React from "react";
import { AppIcons } from "../../../resources/icons";
import SpacingDivider from "../../../components/atoms/spacing-divider/spacing-divider";
import InputField from "../../../components/atoms/input-field/input-field";
import { Text } from "../../../components/atoms/text/text";
import FlexContainer from "../../../components/atoms/flex-container/flex-container";
import { Dropdown } from "../../../components/organisms/dropdown/dropdown";
import { Checkbox } from "../../../components/atoms/checkbox/checkbox";
import TextinputTag from "../../../components/molecules/textinput-tag/textinput-tag";
import { useProvisioningPageContext } from "../../hooks/use-provisioning-context";
import { ThemeColors, ThemeSpacing } from "../../../theme/theme";

const ApplicationConfigurationPanel = () => {
  const { serviceSection } = useProvisioningPageContext();
  const {
    wrapperReference,
    tagValidationMessages,
    tagComponentRef,
    applicationTitle,
    applicationTitleError,
    applicationSummary,
    databaseEngineChoices,
    buildVersionChoices,
    currentDatabaseEngine,
    currentBuildVersion,
    enableContainerMode,
    updateDatabaseEngineSelection,
    updateBuildVersionSelection,
    modifyApplicationTitle,
    modifyApplicationSummary,
    processTagModification,
    toggleContainerModeStatus,
  } = serviceSection;

  // Wrapper Component styles
  const wrapperComponentStyles: React.CSSProperties = {
    position: 'relative',
    backgroundColor: ThemeColors["surface-0"],
    borderRadius: '4px',
    paddingTop: `calc(${ThemeSpacing.variables.GUTTER})`,
    paddingBottom: `calc(${ThemeSpacing.variables.GUTTER})`,
    paddingLeft: `calc(${ThemeSpacing.variables.GUTTER})`,
    paddingRight: `calc(1.75 * ${ThemeSpacing.variables.GUTTER})`,
  };

  return (
    <div ref={wrapperReference} style={wrapperComponentStyles}>
      <Text $renderAs="heading/primary">Service Details</Text>
      <SpacingDivider dividerHeight={2} />
      <Text $renderAs="Text-body/primary/primary" $color="subtler">
        Service Name, Service Description, Software Release
      </Text>
      <SpacingDivider verticalSizeMultiplier={2} />
      <InputField
        $label="Service Name"
        name="serviceName"
        placeholder="Enter service name"
        $trailingItem={
          applicationTitle.length !== 0 && <AppIcons.Check color={ThemeColors.primary} />
        }
        $maxWidth={"360px"}
        $marginBottomX={1.5}
        value={applicationTitle}
        onChange={modifyApplicationTitle}
        $helpText={{
          color: "danger-100",
          message: applicationTitleError,
        }}
      />
      <InputField
        $label="Description (Optional)"
        name="serviceDescription"
        placeholder="Enter service description"
        $maxWidth={"83.6%"}
        $multiline={true}
        $marginBottomX={1.5}
        value={applicationSummary}
        onChange={modifyApplicationSummary}
      />
      <TextinputTag
        ref={tagComponentRef}
        label="Tags"
        name="tags"
        placeholder="Key                              : Value"
        maxWidth={"300px"}
        marginBottomX={2}
        $helpText={tagValidationMessages}
        onChange={processTagModification}
      />
      <Text $renderAs="Heading/3">Engine Configuration</Text>
      <SpacingDivider verticalSizeMultiplier={2} />
      <Text $renderAs="Text-body/primary/primary" $color="subtler">
        Adjustable parameters, performance optimization, &nbsp;fine-tuning
        options
      </Text>
      <SpacingDivider verticalSizeMultiplier={1.5} />
      <FlexContainer horizontalSpacing={1} bottomMarginMultiplier={2} flexWrap="wrap">
        <FlexContainer flexValue={1}>
          <Dropdown
            $label="Software Release"
            $size="default"
            $options={databaseEngineChoices}
            $value={currentDatabaseEngine}
            $placeholder="Oracle 21c"
            onChange={updateDatabaseEngineSelection}
          />
        </FlexContainer>
        <FlexContainer flexValue={1}>
          <Dropdown
            $label="Version"
            $size="default"
            $options={buildVersionChoices}
            $value={currentBuildVersion}
            $placeholder="21.0.0.0.0"
            onChange={updateBuildVersionSelection}
          />
        </FlexContainer>
      </FlexContainer>
      <Checkbox
        name="createAsContainerDb"
        $label="Create as a Container Database"
        $checked={enableContainerMode}
        onChange={toggleContainerModeStatus}
      />
    </div>
  );
};

export default ApplicationConfigurationPanel;
