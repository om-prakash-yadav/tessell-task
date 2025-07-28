import { useCallback, useRef, useState, type ChangeEvent } from "react";
import {
  DATABASE_ENGINE_OPTIONS,
  BUILD_VERSION_OPTIONS,
} from "../sections/application-configuration-panel/application-config-data";
import { TextInputTagProps, TextInputTagRef } from "../../components/molecules/textinput-tag/textinput-tag-types";
import { DropdownItemProps } from "../../components/organisms/dropdown";

const useApplicationConfigurationPanel = () => {
  const tagComponentRef = useRef<TextInputTagRef>(null);
  const wrapperReference = useRef<HTMLDivElement | null>(null);

  const [loadingIndicator, setLoadingIndicator] = useState<boolean>(false);

  const [databaseEngineChoices, setDatabaseEngineChoices] = useState<
    DropdownItemProps[]
  >(DATABASE_ENGINE_OPTIONS);
  const [buildVersionChoices, setBuildVersionChoices] =
    useState<DropdownItemProps[]>(BUILD_VERSION_OPTIONS);
  const [currentDatabaseEngine, setCurrentDatabaseEngine] = useState<
    string | number
  >(DATABASE_ENGINE_OPTIONS[0].value);
  const [currentBuildVersion, setCurrentBuildVersion] = useState<string | number>(
    BUILD_VERSION_OPTIONS[0].value
  );

  const [applicationTitle, setApplicationTitle] = useState<string>("");
  const [applicationTitleError, setApplicationTitleError] = useState<string>("");
  const [applicationSummary, setApplicationSummary] = useState<string>("");
  const [tagValidationMessages, setTagValidationMessages] =
    useState<TextInputTagProps["$helpText"]>();
  const [enableContainerMode, setEnableContainerMode] =
    useState<boolean>(false);

  const performFormValidation = useCallback(() => {
    let validationResult = true;

    if (applicationTitle.trim() === "") {
      setApplicationTitleError("Service name cannot be empty.");
      validationResult = false;
    }
    if (tagComponentRef.current?.getTags().length === 0) {
      setTagValidationMessages({
        message: "Please add at least one tag.",
        color: "danger-100",
      });
      validationResult = false;
    }

    return validationResult;
  }, [applicationTitle]);

  const modifyApplicationTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      setApplicationTitle(inputValue);
      if (inputValue.trim() === "") {
        setApplicationTitleError("Service name cannot be empty.");
      } else {
        setApplicationTitleError("");
      }
    },
    []
  );

  const modifyApplicationSummary = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setApplicationSummary(e.target.value);
    },
    []
  );

  const processTagModification = useCallback(() => {
    setTagValidationMessages(undefined);
  }, []);

  const updateDatabaseEngineSelection = useCallback((selectedValue: string | number) => {
    setCurrentDatabaseEngine(selectedValue);
    setDatabaseEngineChoices((previousChoices) =>
      previousChoices.map((choice) => ({
        ...choice,
        $isSelected: choice.value === selectedValue,
      }))
    );
  }, []);

  const updateBuildVersionSelection = useCallback((selectedValue: string | number) => {
    setCurrentBuildVersion(selectedValue);
    setBuildVersionChoices((previousChoices) =>
      previousChoices.map((choice) => ({
        ...choice,
        $isSelected: choice.value === selectedValue,
      }))
    );
  }, []);

  const toggleContainerModeStatus = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setEnableContainerMode(e.target.checked);
    },
    []
  );

  const executeFormSubmission = useCallback(async () => {
    if (performFormValidation()) {
      setLoadingIndicator(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoadingIndicator(false);
      setApplicationTitleError("");
      setApplicationSummary("");
      tagComponentRef.current?.clear();
      setCurrentDatabaseEngine(DATABASE_ENGINE_OPTIONS[0].value);
      setCurrentBuildVersion(BUILD_VERSION_OPTIONS[0].value);
      setDatabaseEngineChoices(DATABASE_ENGINE_OPTIONS);
      setBuildVersionChoices(BUILD_VERSION_OPTIONS);
      setEnableContainerMode(false);
      return true;
    }
    return false;
  }, [performFormValidation]);

  const navigateToSection = useCallback(() => {
    wrapperReference.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [wrapperReference]);

  return {
    tagComponentRef,
    wrapperReference,
    applicationTitle,
    applicationTitleError,
    applicationSummary,
    databaseEngineChoices,
    buildVersionChoices,
    currentDatabaseEngine,
    currentBuildVersion,
    enableContainerMode,
    tagValidationMessages,
    loadingIndicator,
    updateDatabaseEngineSelection,
    updateBuildVersionSelection,
    modifyApplicationTitle,
    processTagModification,
    modifyApplicationSummary,
    toggleContainerModeStatus,
    executeFormSubmission,
    navigateToSection,
  };
};

export default useApplicationConfigurationPanel;
