import React from "react";
import { AppIcons } from "../../../resources/icons";
import SpacingDivider from "../../../components/atoms/spacing-divider/spacing-divider";
import InputField from "../../../components/atoms/input-field/input-field";
import { Text } from "../../../components/atoms/text/text";
import FlexContainer from "../../../components/atoms/flex-container/flex-container";
import { Dropdown } from "../../../components/organisms/dropdown/dropdown";
import { Checkbox } from "../../../components/atoms/checkbox/checkbox";
import TextinputTag from "../../../components/molecules/textinput-tag/textinput-tag";
import Spinner from "../../../components/atoms/spinner/spinner";
import { useProvisioningPageContext } from "../../hooks/use-provisioning-context";
import { ThemeColors, ThemeSpacing } from "../../../theme/theme";

const ServiceDetailsSection = () => {
  const { serviceSection } = useProvisioningPageContext();
  const {
    containerRef,
    showLoading,
    helpTextTags,
    textInputTagRef,
    serviceName,
    serviceNameMessage,
    serviceDescription,
    softwareReleaseOptions,
    versionOptions,
    selectedSoftwareRelease,
    selectedVersion,
    createAsContainerDb,
    handleSoftwareReleaseChange,
    handleVersionChange,
    handleServiceNameChange,
    handleServiceDescriptionChange,
    handleChangeTagText,
    handleCreateAsContainerDbChange,
  } = serviceSection;

  // Content Container styles
  const contentContainerStyles: React.CSSProperties = {
    position: 'relative',
    backgroundColor: ThemeColors["surface-0"],
    borderRadius: '4px',
    paddingTop: `calc(${ThemeSpacing.variables.GUTTER})`,
    paddingBottom: `calc(${ThemeSpacing.variables.GUTTER})`,
    paddingLeft: `calc(${ThemeSpacing.variables.GUTTER})`,
    paddingRight: `calc(1.75 * ${ThemeSpacing.variables.GUTTER})`,
  };

  // Loading Overlay styles
  const loadingOverlayStyles: React.CSSProperties = {
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

  return (
    <div ref={containerRef} style={contentContainerStyles}>
      {showLoading && (
        <div style={loadingOverlayStyles}>
          <Spinner />
        </div>
      )}
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
          serviceName.length !== 0 && <AppIcons.Check color={ThemeColors.primary} />
        }
        $maxWidth={"360px"}
        $marginBottomX={1.5}
        value={serviceName}
        onChange={handleServiceNameChange}
        $helpText={{
          color: "danger-100",
          message: serviceNameMessage,
        }}
      />
      <InputField
        $label="Description (Optional)"
        name="serviceDescription"
        placeholder="Enter service description"
        $maxWidth={"83.6%"}
        $multiline={true}
        $marginBottomX={1.5}
        value={serviceDescription}
        onChange={handleServiceDescriptionChange}
      />
      <TextinputTag
        ref={textInputTagRef}
        label="Tags"
        name="tags"
        placeholder="Key                              : Value"
        maxWidth={"300px"}
        marginBottomX={2}
        $helpText={helpTextTags}
        onChange={handleChangeTagText}
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
            $options={softwareReleaseOptions}
            $value={selectedSoftwareRelease}
            $placeholder="Oracle 21c"
            onChange={handleSoftwareReleaseChange}
          />
        </FlexContainer>
        <FlexContainer flexValue={1}>
          <Dropdown
            $label="Version"
            $size="default"
            $options={versionOptions}
            $value={selectedVersion}
            $placeholder="21.0.0.0.0"
            onChange={handleVersionChange}
          />
        </FlexContainer>
      </FlexContainer>
      <Checkbox
        name="createAsContainerDb"
        $label="Create as a Container Database"
        $checked={createAsContainerDb}
        onChange={handleCreateAsContainerDbChange}
      />
    </div>
  );
};

export default ServiceDetailsSection;
