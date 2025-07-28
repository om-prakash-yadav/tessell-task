import { useMemo, type ReactNode } from "react";
import useAdvancedConfigurationPanel from "../hooks/use-advanced-config-panel";
import useApplicationConfigurationPanel from "../hooks/use-application-configuration-panel";
import { ProvisioningContext } from "../hooks/use-provisioning-context";

export const ProvisioningProvider = ({ children }: { children: ReactNode }) => {
  const additionalSection = useAdvancedConfigurationPanel();
  const serviceSection = useApplicationConfigurationPanel();

  const value = useMemo(
    () => ({
      additionalSection,
      serviceSection,
    }),
    [additionalSection, serviceSection]
  );

  return (
    <ProvisioningContext.Provider value={value}>
      {children}
    </ProvisioningContext.Provider>
  );
};
