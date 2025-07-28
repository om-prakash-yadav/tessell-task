import { useCallback, useRef, useState, type ChangeEvent } from "react";
import {
  SOFTWARE_RELEASE_OPTIONS,
  VERSION_OPTIONS,
} from "../sections/service-details-section/service-details-section-constants";
import { TextInputTagProps, TextInputTagRef } from "../../components/molecules/textinput-tag/textinput-tag-types";
import { DropdownItemProps } from "../../components/organisms/dropdown";

const useServiceDetailsSection = () => {
  const textInputTagRef = useRef<TextInputTagRef>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [showLoading, setShowLoading] = useState<boolean>(false);

  const [softwareReleaseOptions, setSoftwareReleaseOptions] = useState<
    DropdownItemProps[]
  >(SOFTWARE_RELEASE_OPTIONS);
  const [versionOptions, setVersionOptions] =
    useState<DropdownItemProps[]>(VERSION_OPTIONS);
  const [selectedSoftwareRelease, setSelectedSoftwareRelease] = useState<
    string | number
  >(SOFTWARE_RELEASE_OPTIONS[0].value);
  const [selectedVersion, setSelectedVersion] = useState<string | number>(
    VERSION_OPTIONS[0].value
  );

  const [serviceName, setServiceName] = useState<string>("");
  const [serviceNameMessage, setServiceNameMessage] = useState<string>("");
  const [serviceDescription, setServiceDescription] = useState<string>("");
  const [helpTextTags, setHelpTextTags] =
    useState<TextInputTagProps["$helpText"]>();
  const [createAsContainerDb, setCreateAsContainerDb] =
    useState<boolean>(false);

  const validateForm = useCallback(() => {
    let isFormValid = true;

    if (serviceName.trim() === "") {
      setServiceNameMessage("Service name cannot be empty.");
      isFormValid = false;
    }
    if (textInputTagRef.current?.getTags().length === 0) {
      setHelpTextTags({
        message: "Please add at least one tag.",
        color: "danger-100",
      });
      isFormValid = false;
    }

    return isFormValid;
  }, [serviceName]);

  const handleServiceNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setServiceName(value);
      if (value.trim() === "") {
        setServiceNameMessage("Service name cannot be empty.");
      } else {
        setServiceNameMessage("");
      }
    },
    []
  );

  const handleServiceDescriptionChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setServiceDescription(e.target.value);
    },
    []
  );

  const handleChangeTagText = useCallback(() => {
    setHelpTextTags(undefined);
  }, []);

  const handleSoftwareReleaseChange = useCallback((value: string | number) => {
    setSelectedSoftwareRelease(value);
    setSoftwareReleaseOptions((prevOptions) =>
      prevOptions.map((option) => ({
        ...option,
        $isSelected: option.value === value,
      }))
    );
  }, []);

  const handleVersionChange = useCallback((value: string | number) => {
    setSelectedVersion(value);
    setVersionOptions((prevOptions) =>
      prevOptions.map((option) => ({
        ...option,
        $isSelected: option.value === value,
      }))
    );
  }, []);

  const handleCreateAsContainerDbChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setCreateAsContainerDb(e.target.checked);
    },
    []
  );

  const handleSubmit = useCallback(async () => {
    if (validateForm()) {
      setShowLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setShowLoading(false);
      setServiceNameMessage("");
      setServiceDescription("");
      textInputTagRef.current?.clear();
      setSelectedSoftwareRelease(SOFTWARE_RELEASE_OPTIONS[0].value);
      setSelectedVersion(VERSION_OPTIONS[0].value);
      setSoftwareReleaseOptions(SOFTWARE_RELEASE_OPTIONS);
      setVersionOptions(VERSION_OPTIONS);
      setCreateAsContainerDb(false);
      return true;
    }
    return false;
  }, [validateForm]);

  const scrollIntoView = useCallback(() => {
    containerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [containerRef]);

  return {
    textInputTagRef,
    containerRef,
    serviceName,
    serviceNameMessage,
    serviceDescription,
    softwareReleaseOptions,
    versionOptions,
    selectedSoftwareRelease,
    selectedVersion,
    createAsContainerDb,
    helpTextTags,
    showLoading,
    handleSoftwareReleaseChange,
    handleVersionChange,
    handleServiceNameChange,
    handleChangeTagText,
    handleServiceDescriptionChange,
    handleCreateAsContainerDbChange,
    handleSubmit,
    scrollIntoView,
  };
};

export default useServiceDetailsSection;
