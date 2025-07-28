import { useCallback, useRef, useState, type ChangeEvent } from "react";
import moment from "moment";
import { DropdownItemProps } from "../../components/organisms/dropdown";


const useAdditionalSettingsSection = () => {
  const [windowPreference, setWindowPreference] = useState<"none" | "select">(
    "select"
  );
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showLoading, setShowLoading] = useState(false);

  const [startDayOptions, setStartDayOptions] = useState<DropdownItemProps[]>(
    moment.weekdays().map((day, index) => ({
      label: day,
      value: index,
      $isSelected: index === moment().day(),
    }))
  );

  const [startDay, setStartDay] = useState(moment().day());
  const [startDayMessage, setStartDayMessage] = useState("");

  const [startTime, setStartTime] = useState("");
  const [startTimeMessage, setStartTimeMessage] = useState("");

  const [durationOptions, setDurationOptions] =
    useState<DropdownItemProps[]>(DURATION_OPTIONS);
  const [selectedDuration, setSelectedDuration] = useState<string | number>("");
  const [durationMessage, setDurationMessage] = useState("");

  const [autoMinorUpdate, setAutoMinorUpdate] = useState(true);

  const [sla, setSla] = useState("");
  const [slaMessage, setSlaMessage] = useState("");

  const [snapshotTime, setSnapshotTime] = useState("");
  const [snapshotTimeMessage, setSnapshotTimeMessage] = useState("");

  const validateForm = useCallback(() => {
    let isValid = true;

    if (windowPreference === "select") {
      if (!startDay) {
        setStartDayMessage("Start day is required.");
        isValid = false;
      } else {
        setStartDayMessage("");
      }

      if (!startTime) {
        setStartTimeMessage("Start time is required.");
        isValid = false;
      } else {
        setStartTimeMessage("");
      }

      if (!selectedDuration) {
        setDurationMessage("Duration must be selected.");
        isValid = false;
      } else {
        setDurationMessage("");
      }
    } else {
      setStartDayMessage("");
      setStartTimeMessage("");
      setDurationMessage("");
    }

    if (!sla.trim()) {
      setSlaMessage("SLA is required.");
      isValid = false;
    } else {
      setSlaMessage("");
    }

    if (!snapshotTime.trim()) {
      setSnapshotTimeMessage("Snapshot time is required.");
      isValid = false;
    } else {
      setSnapshotTimeMessage("");
    }

    return isValid;
  }, [
    windowPreference,
    startDay,
    startTime,
    selectedDuration,
    sla,
    snapshotTime,
  ]);

  const handleWindowPreferenceChange = useCallback(
    (value: "none" | "select") => {
      setWindowPreference(value);
    },
    []
  );

  const handleStartDayChange = useCallback((day: string | number) => {
    setStartDay(day as number);
    setStartDayMessage("");
    setStartDayOptions((prevOptions) =>
      prevOptions.map((opt) => ({
        ...opt,
        $isSelected: opt.value === day,
      }))
    );
  }, []);

  const handleStartTimeChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setStartTime(e.target.value);
      setStartTimeMessage("");
    },
    []
  );

  const handleDurationChange = useCallback((value: string | number) => {
    setSelectedDuration(value);
    setDurationOptions((prev) =>
      prev.map((opt) => ({
        ...opt,
        $isSelected: opt.value === value,
      }))
    );
    setDurationMessage("");
  }, []);

  const handleAutoMinorUpdateChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setAutoMinorUpdate(e.target.checked);
    },
    []
  );

  const handleSlaChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSla(e.target.value);
    setSlaMessage("");
  }, []);

  const handleSnapshotTimeChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSnapshotTime(e.target.value);
      setSnapshotTimeMessage("");
    },
    []
  );

  const scrollIntoView = useCallback(
    (position: ScrollLogicalPosition = "start") => {
      containerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: position,
      });
    },
    [containerRef]
  );

  const handleSubmit = useCallback(async () => {
    if (validateForm()) {
      setShowLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setShowLoading(false);
      return true;
    }
    return false;
  }, [validateForm]);

  return {
    showLoading,
    startDayOptions,
    containerRef,
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
    handleSubmit,
    scrollIntoView,
  };
};

export default useAdditionalSettingsSection;



export const DURATION_OPTIONS: DropdownItemProps[] = [
  { label: "30 minutes", value: "30m" },
  { label: "1 hour", value: "1h" },
  { label: "2 hours", value: "2h" },
];