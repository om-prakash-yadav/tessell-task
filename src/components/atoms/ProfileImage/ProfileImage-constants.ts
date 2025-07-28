import type { ProfileImageSizeMap } from "./ProfileImage-types";

// Profile image dimension configurations
export const ProfileImageDimensions: ProfileImageSizeMap = {
  small: 24,
  regular: 32,
  large: 40,
};

// Legacy export for backward compatibility
export const AvatarSizes = ProfileImageDimensions;
