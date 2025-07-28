// Mock hook for useProvisioningPageContext - adjust according to your actual context structure
import { useRef, useState } from "react";
import { DURATION_OPTIONS } from "../additional-settings-section/additional-settings-section-constants";

export const useProvisioningPageContext = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLoading, setShowLoading] = useState(false);
  const [windowPreference, setWindowPreference] = useState<"none" | "select">("none");
  const [startDay, setStartDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [autoMinorUpdate, setAutoMinorUpdate] = useState(false);
  const [sla, setSla] = useState("");
  const [snapshotTime, setSnapshotTime] = useState("");
  
  // Mock validation messages
  const [startDayMessage, setStartDayMessage] = useState("");
  const [startTimeMessage, setStartTimeMessage] = useState("");
  const [durationMessage, setDurationMessage] = useState("");
  const [slaMessage, setSlaMessage] = useState("");
  const [snapshotTimeMessage, setSnapshotTimeMessage] = useState("");

  const startDayOptions = [
    { label: "Monday", value: "monday" },
    { label: "Tuesday", value: "tuesday" },
    { label: "Wednesday", value: "wednesday" },
    { label: "Thursday", value: "thursday" },
    { label: "Friday", value: "friday" },
    { label: "Saturday", value: "saturday" },
    { label: "Sunday", value: "sunday" },
  ];

  const additionalSection = {
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
    durationOptions: DURATION_OPTIONS,
    startDayMessage,
    startTimeMessage,
    durationMessage,
    slaMessage,
    snapshotTimeMessage,
    handleWindowPreferenceChange: setWindowPreference,
    handleStartDayChange: (value: string | number) => setStartDay(String(value)),
    handleStartTimeChange: (e: React.ChangeEvent<HTMLInputElement>) => setStartTime(e.target.value),
    handleDurationChange: (value: string | number) => setSelectedDuration(String(value)),
    handleAutoMinorUpdateChange: (e: React.ChangeEvent<HTMLInputElement>) => setAutoMinorUpdate(e.target.checked),
    handleSlaChange: (e: React.ChangeEvent<HTMLInputElement>) => setSla(e.target.value),
    handleSnapshotTimeChange: (e: React.ChangeEvent<HTMLInputElement>) => setSnapshotTime(e.target.value),
  };

  return {
    additionalSection,
  };
};
