import { useMemo, type ReactNode } from "react";
import useAdditionalSettingsSection from "../hooks/use-additional-settings-section";
import useServiceDetailsSection from "../hooks/use-service-details-section";
import { ProvisioningContext } from "../hooks/use-provisioning-context";

export const ProvisioningProvider = ({ children }: { children: ReactNode }) => {
  const additionalSection = useAdditionalSettingsSection();
  const serviceSection = useServiceDetailsSection();

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
