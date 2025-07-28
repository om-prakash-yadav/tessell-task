import { AppIcons } from "../../../assets/icons";
import { Checkbox } from "../../../components/atoms/checkbox/checkbox";
import FlexContainer from "../../../components/atoms/flex-container/flex-container";
import InputField from "../../../components/atoms/input-field/input-field";
import SpacingDivider from "../../../components/atoms/spacing-divider/spacing-divider";
import Spinner from "../../../components/atoms/spinner/spinner";
import { Text } from "../../../components/atoms/text/text";
import { Radio } from "../../../components/molecules/radio/radio";
import { Dropdown } from "../../../components/organisms/dropdown/dropdown";
import Notification from "../../../components/organisms/notification/notification";
import { useProvisioningPageContext } from "../../hooks/use-provisioning-context";
import { ContentContainer, LoadingOverlay } from "../../common-style";
import TableItem from "./table-item";

const AdditionalSettingsSection = () => {
  const { additionalSection } = useProvisioningPageContext();
  const {
    containerRef,
    startDayOptions,
    showLoading,
    windowPreference,
    startDay,
    startTime,
    selectedDuration,
    autoMinorUpdate,
    sla,
    snapshotTime,
    durationOptions,
    startDayMessage,
    startTimeMessage,
    durationMessage,
    slaMessage,
    snapshotTimeMessage,
    handleWindowPreferenceChange,
    handleStartDayChange,
    handleStartTimeChange,
    handleDurationChange,
    handleAutoMinorUpdateChange,
    handleSlaChange,
    handleSnapshotTimeChange,
  } = additionalSection;

  return (
    <ContentContainer ref={containerRef} $paddingRightX={1}>
      {showLoading && (
        <LoadingOverlay>
          <Spinner />
        </LoadingOverlay>
      )}
      <Text $renderAs="heading/primary">Additional settings</Text>
      <SpacingDivider verticalSizeMultiplier={2} />
      <Text $renderAs="Text-body/primary/primary" $color="subtler">
        Maintenance Window, Availability machine
      </Text>
      <SpacingDivider verticalSizeMultiplier={2} />
      <Text $renderAs="heading/secondary">Maintenance Window</Text>
      <SpacingDivider verticalSizeMultiplier={2} />
      <Text $renderAs="Text-body/secondary/secondary" $color="subtlest">
        Describing what maintenance window is
      </Text>
      <SpacingDivider verticalSizeMultiplier={2} />
      <Text $renderAs="heading/form titles">Window Preference</Text>
      <SpacingDivider verticalSizeMultiplier={0.5} />
      <FlexContainer spacing={8} bottomMarginMultiplier={1.5}>
        <Radio
          $label="No Preferences"
          $size="regular"
          $checked={windowPreference === "none"}
          onChange={() => handleWindowPreferenceChange("none")}
        />
        <Radio
          $label="Select Window"
          $size="regular"
          $checked={windowPreference === "select"}
          onChange={() => handleWindowPreferenceChange("select")}
        />
      </FlexContainer>

      {windowPreference === "select" && (
        <>
          <FlexContainer spacing={8} bottomMarginMultiplier={1.5} flexWrap="wrap">
            <FlexContainer flexValue={1}>
              <Dropdown
                $label="Start Day"
                $size="default"
                $options={startDayOptions}
                $value={startDay}
                $placeholder="Select Day"
                onChange={handleStartDayChange}
                $trailingItem={<AppIcons.Calendar />}
                $helpText={
                  startDayMessage
                    ? { message: startDayMessage, color: "danger-100" }
                    : undefined
                }
              />
            </FlexContainer>
            <FlexContainer flexValue={1}>
              <InputField
                type="time"
                name="startTime"
                $label="Start Time"
                placeholder="Enter start time"
                value={startTime}
                onChange={handleStartTimeChange}
                $helpText={
                  startTimeMessage
                    ? { message: startTimeMessage, color: "danger-100" }
                    : undefined
                }
              />
            </FlexContainer>
          </FlexContainer>

          <FlexContainer spacing={8} bottomMarginMultiplier={1.5}>
            <FlexContainer flexValue={1}>
              <Dropdown
                $label="Duration"
                $size="default"
                $options={durationOptions}
                $value={selectedDuration}
                $placeholder="Select duration"
                onChange={handleDurationChange}
                $helpText={
                  durationMessage
                    ? { message: durationMessage, color: "danger-100" }
                    : undefined
                }
              />
            </FlexContainer>
          </FlexContainer>
        </>
      )}

      <Checkbox
        $label="Enable auto minor version update"
        $checked={autoMinorUpdate}
        onChange={handleAutoMinorUpdateChange}
      />
      <SpacingDivider verticalSizeMultiplier={2} />
      <Text $renderAs="heading/secondary">
        Availability Machine Preferences
      </Text>
      <SpacingDivider verticalSizeMultiplier={0.25} />
      <Text $renderAs="Text-body/secondary/secondary" $color="subtlest">
        Here you can define your data protection SLA and schedule. Once the
        database has been created, you can further define the data availability
        and access policies from the Availability Machine app.
      </Text>
      <SpacingDivider verticalSizeMultiplier={2} />
      <FlexContainer spacing={8} bottomMarginMultiplier={2} flexWrap="wrap">
        <FlexContainer flexValue={1}>
          <InputField
            name="sla"
            $label="SLA"
            placeholder="Enter SLA"
            value={sla}
            onChange={handleSlaChange}
            $helpText={
              slaMessage
                ? { message: slaMessage, color: "danger-100" }
                : undefined
            }
          />
        </FlexContainer>
        <FlexContainer flexValue={1}>
          <InputField
            type="time"
            placeholder="00:00"
            name="snapshotTime"
            $label="Snapshot Time"
            value={snapshotTime}
            onChange={handleSnapshotTimeChange}
            $helpText={
              snapshotTimeMessage
                ? { message: snapshotTimeMessage, color: "danger-100" }
                : undefined
            }
          />
        </FlexContainer>
      </FlexContainer>
      <TableItem />
      <SpacingDivider verticalSizeMultiplier={2} />
      <Notification
        variant="info"
        content="Projecting an estimate total count of 71 snapshots with the above configuration."
        canDismiss={true}
      />
    </ContentContainer>
  );
};

export default AdditionalSettingsSection;
