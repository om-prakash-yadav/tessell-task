import { BreakpointDevices } from "./breakpoints-devices";

export const MediaQuery = {
  minWidthMobileOnly: `@media (min-width: ${
    BreakpointDevices.mobile
  }px) and (max-width: ${BreakpointDevices.tablet - 1}px)`,
  minWidthTablet: `@media (min-width: ${BreakpointDevices.tablet}px)`,
  minWidthDesktop: `@media (min-width: ${BreakpointDevices.desktop}px)`,
  minWidthWidescreen: `@media (min-width: ${BreakpointDevices.widescreen}px)`,
};
