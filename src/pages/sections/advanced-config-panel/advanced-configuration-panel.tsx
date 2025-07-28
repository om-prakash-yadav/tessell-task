import { AppIcons } from "../../../resources/icons";
import { Checkbox } from "../../../components/atoms/checkbox/checkbox";
import FlexContainer from "../../../components/atoms/flex-container/flex-container";
import InputField from "../../../components/atoms/input-field/input-field";
import SpacingDivider from "../../../components/atoms/spacing-divider/spacing-divider";
import { Text } from "../../../components/atoms/text/text";
import { Radio } from "../../../components/molecules/radio/radio";
import { Dropdown } from "../../../components/organisms/dropdown/dropdown";
import Notification from "../../../components/organisms/notification/notification";
import { useProvisioningPageContext } from "../../hooks/use-provisioning-context";
import { ContentContainer } from "../../common-style";
import DataGridComponent from "./components/data-grid-component";

const AdvancedConfigurationPanel = () => {
  const { additionalSection: configSectionData } = useProvisioningPageContext();
  
  // Destructure with new variable names
  const {
    containerRef: panelContainerRef,
    startDayOptions: weekdayChoices,
    windowPreference: maintenanceWindowChoice,
    startDay: selectedWeekday,
    startTime: scheduledTime,
    selectedDuration: chosenTimeInterval,
    autoMinorUpdate: enableAutoUpdates,
    sla: serviceLevel,
    snapshotTime: backupTimeSchedule,
    durationOptions: timeIntervalChoices,
    startDayMessage: weekdayValidationMsg,
    startTimeMessage: timeValidationMsg,
    durationMessage: intervalValidationMsg,
    slaMessage: serviceValidationMsg,
    snapshotTimeMessage: backupTimeValidationMsg,
    handleWindowPreferenceChange: updateMaintenanceChoice,
    handleStartDayChange: updateSelectedWeekday,
    handleStartTimeChange: updateScheduledTime,
    handleDurationChange: updateTimeInterval,
    handleAutoMinorUpdateChange: toggleAutoUpdates,
    handleSlaChange: updateServiceLevel,
    handleSnapshotTimeChange: updateBackupTime,
  } = configSectionData;

  // Helper function to render maintenance window selection
  const renderMaintenanceWindowSelector = () => (
    <FlexContainer spacing={8} bottomMarginMultiplier={1.5}>
      <Radio
        $label="No Preferences"
        $size="regular"
        $checked={maintenanceWindowChoice === "none"}
        onChange={() => updateMaintenanceChoice("none")}
      />
      <Radio
        $label="Select Window"
        $size="regular"
        $checked={maintenanceWindowChoice === "select"}
        onChange={() => updateMaintenanceChoice("select")}
      />
    </FlexContainer>
  );

  // Helper function to render time configuration fields
  const renderTimeConfigurationFields = () => (
    <>
      <FlexContainer spacing={8} bottomMarginMultiplier={1.5} flexWrap="wrap">
        <FlexContainer flexValue={1}>
          <Dropdown
            $label="Start Day"
            $size="default"
            $options={weekdayChoices}
            $value={selectedWeekday}
            $placeholder="Select Day"
            onChange={updateSelectedWeekday}
            $trailingItem={<AppIcons.Calendar />}
            $helpText={
              weekdayValidationMsg
                ? { message: weekdayValidationMsg, color: "danger-100" }
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
            value={scheduledTime}
            onChange={updateScheduledTime}
            $helpText={
              timeValidationMsg
                ? { message: timeValidationMsg, color: "danger-100" }
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
            $options={timeIntervalChoices}
            $value={chosenTimeInterval}
            $placeholder="Select duration"
            onChange={updateTimeInterval}
            $helpText={
              intervalValidationMsg
                ? { message: intervalValidationMsg, color: "danger-100" }
                : undefined
            }
          />
        </FlexContainer>
      </FlexContainer>
    </>
  );

  // Helper function to render availability machine section
  const renderAvailabilityMachineSection = () => (
    <>
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
            value={serviceLevel}
            onChange={updateServiceLevel}
            $helpText={
              serviceValidationMsg
                ? { message: serviceValidationMsg, color: "danger-100" }
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
            value={backupTimeSchedule}
            onChange={updateBackupTime}
            $helpText={
              backupTimeValidationMsg
                ? { message: backupTimeValidationMsg, color: "danger-100" }
                : undefined
            }
          />
        </FlexContainer>
      </FlexContainer>
    </>
  );

  // Main render function
  return (
    <ContentContainer ref={panelContainerRef} $paddingRightX={1}>
      <Text $renderAs="heading/primary">Additional settings</Text>
      <SpacingDivider dividerHeight={2} />
      <Text $renderAs="Text-body/primary/primary" $color="subtler">
        Maintenance Window, Availability machine
      </Text>
      <SpacingDivider verticalSizeMultiplier={2} />
      
      <Text $renderAs="heading/secondary">Maintenance Window</Text>
      <SpacingDivider dividerHeight={2} />
      <Text $renderAs="Text-body/secondary/secondary" $color="subtlest">
        Describing what maintenance window is
      </Text>
      <SpacingDivider verticalSizeMultiplier={2} />
      
      <Text $renderAs="heading/form titles">Window Preference</Text>
      <SpacingDivider verticalSizeMultiplier={0.5} />
      
      {renderMaintenanceWindowSelector()}

      {maintenanceWindowChoice === "select" && renderTimeConfigurationFields()}

      <Checkbox
        $label="Enable auto minor version update"
        $checked={enableAutoUpdates}
        onChange={toggleAutoUpdates}
      />
      <SpacingDivider verticalSizeMultiplier={2} />
      
      {renderAvailabilityMachineSection()}
      
      <DataGridComponent />
      <SpacingDivider verticalSizeMultiplier={2} />
      
      <Notification
        variant="info"
        content="Projecting an estimate total count of 71 snapshots with the above configuration."
        canDismiss={true}
      />
    </ContentContainer>
  );
};

export default AdvancedConfigurationPanel;
