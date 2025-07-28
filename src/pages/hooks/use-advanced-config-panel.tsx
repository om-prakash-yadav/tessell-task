import { useCallback, useRef, useState, type ChangeEvent } from "react";
import moment from "moment";
import { DropdownItemProps } from "../../components/organisms/dropdown";
import { TIME_INTERVAL_OPTIONS } from "../sections/advanced-config-panel/config-data";

const useAdvancedConfigurationPanel = () => {
  const [maintenanceWindowChoice, setMaintenanceWindowChoice] = useState<"none" | "select">("select");
  const panelContainerRef = useRef<HTMLDivElement | null>(null);
  const [displayLoadingState, setDisplayLoadingState] = useState(false);

  const [weekdayChoices, setWeekdayChoices] = useState<DropdownItemProps[]>(
    moment.weekdays().map((dayName, dayIndex) => ({
      label: dayName,
      value: dayIndex,
      $isSelected: dayIndex === moment().day(),
    }))
  );

  const [selectedWeekday, setSelectedWeekday] = useState(moment().day());
  const [weekdayValidationMsg, setWeekdayValidationMsg] = useState("");

  const [scheduledTime, setScheduledTime] = useState("");
  const [timeValidationMsg, setTimeValidationMsg] = useState("");

  const [timeIntervalChoices, setTimeIntervalChoices] = useState<DropdownItemProps[]>(TIME_INTERVAL_OPTIONS);
  const [chosenTimeInterval, setChosenTimeInterval] = useState<string | number>("");
  const [intervalValidationMsg, setIntervalValidationMsg] = useState("");

  const [enableAutoUpdates, setEnableAutoUpdates] = useState(true);

  const [serviceLevel, setServiceLevel] = useState("");
  const [serviceValidationMsg, setServiceValidationMsg] = useState("");

  const [backupTimeSchedule, setBackupTimeSchedule] = useState("");
  const [backupTimeValidationMsg, setBackupTimeValidationMsg] = useState("");

  const performFormValidation = useCallback(() => {
    let validationPassed = true;

    if (maintenanceWindowChoice === "select") {
      if (!selectedWeekday) {
        setWeekdayValidationMsg("Start day is required.");
        validationPassed = false;
      } else {
        setWeekdayValidationMsg("");
      }

      if (!scheduledTime) {
        setTimeValidationMsg("Start time is required.");
        validationPassed = false;
      } else {
        setTimeValidationMsg("");
      }

      if (!chosenTimeInterval) {
        setIntervalValidationMsg("Duration is required.");
        validationPassed = false;
      } else {
        setIntervalValidationMsg("");
      }
    }

    if (!serviceLevel) {
      setServiceValidationMsg("SLA is required.");
      validationPassed = false;
    } else {
      setServiceValidationMsg("");
    }

    if (!backupTimeSchedule) {
      setBackupTimeValidationMsg("Snapshot time is required.");
      validationPassed = false;
    } else {
      setBackupTimeValidationMsg("");
    }

    return validationPassed;
  }, [maintenanceWindowChoice, selectedWeekday, scheduledTime, chosenTimeInterval, serviceLevel, backupTimeSchedule]);

  const updateMaintenanceChoice = useCallback((preference: "none" | "select") => {
    setMaintenanceWindowChoice(preference);
  }, []);

  const updateSelectedWeekday = useCallback((dayValue: string | number) => {
    setSelectedWeekday(Number(dayValue));
    setWeekdayValidationMsg("");
  }, []);

  const updateScheduledTime = useCallback((timeEvent: ChangeEvent<HTMLInputElement>) => {
    setScheduledTime(timeEvent.target.value);
    setTimeValidationMsg("");
  }, []);

  const updateTimeInterval = useCallback((intervalValue: string | number) => {
    setChosenTimeInterval(intervalValue);
    setIntervalValidationMsg("");
  }, []);

  const toggleAutoUpdates = useCallback(() => {
    setEnableAutoUpdates(currentState => !currentState);
  }, []);

  const updateServiceLevel = useCallback((slaEvent: ChangeEvent<HTMLInputElement>) => {
    setServiceLevel(slaEvent.target.value);
    setServiceValidationMsg("");
  }, []);

  const updateBackupTime = useCallback((timeEvent: ChangeEvent<HTMLInputElement>) => {
    setBackupTimeSchedule(timeEvent.target.value);
    setBackupTimeValidationMsg("");
  }, []);

  const submitConfigurationForm = useCallback(async (): Promise<boolean> => {
    setDisplayLoadingState(true);
    
    try {
      const isFormValid = performFormValidation();
      if (!isFormValid) {
        return false;
      }
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      return true;
    } catch (error) {
      console.error("Configuration submission failed:", error);
      return false;
    } finally {
      setDisplayLoadingState(false);
    }
  }, [performFormValidation]);

  const navigateToConfigPanel = useCallback((scrollPosition: ScrollLogicalPosition = "start") => {
    panelContainerRef.current?.scrollIntoView({
      block: scrollPosition,
      behavior: "smooth",
    });
  }, []);

  return {
    showLoading: displayLoadingState,
    startDayOptions: weekdayChoices, // Alias for compatibility
    containerRef: panelContainerRef,
    weekdayChoices,
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
    handleSubmit: submitConfigurationForm, // Alias for compatibility  
    submit: submitConfigurationForm,
    scrollIntoView: navigateToConfigPanel,
  };
};

export default useAdvancedConfigurationPanel;
