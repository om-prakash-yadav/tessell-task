import { createContext, useContext } from "react";
import type useAdvancedConfigurationPanel from "./use-advanced-config-panel";
import type useApplicationConfigurationPanel from "./use-application-configuration-panel";

type PageContextType = {
  additionalSection: ReturnType<typeof useAdvancedConfigurationPanel>;
  serviceSection: ReturnType<typeof useApplicationConfigurationPanel>;
};

export const ProvisioningContext = createContext<PageContextType | undefined>(
  undefined
);

export const useProvisioningPageContext = () => {
  const ctx = useContext(ProvisioningContext);
  if (!ctx) throw new Error("useProvisioningPageContext must be inside ProvisioningProvider");
  return ctx;
};
