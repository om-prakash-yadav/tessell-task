import { createContext, useContext } from "react";
import type useAdditionalSettingsSection from "./use-additional-settings-section";
import type useServiceDetailsSection from "./use-service-details-section";

type PageContextType = {
  additionalSection: ReturnType<typeof useAdditionalSettingsSection>;
  serviceSection: ReturnType<typeof useServiceDetailsSection>;
};

export const ProvisioningContext = createContext<PageContextType | undefined>(
  undefined
);

export const useProvisioningPageContext = () => {
  const ctx = useContext(ProvisioningContext);
  if (!ctx) throw new Error("useProvisioningPageContext must be inside ProvisioningProvider");
  return ctx;
};
