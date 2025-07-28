export type ProfileImageSize = 'small' | 'regular' | 'large';

export type ProfileImageSizeMap = Record<ProfileImageSize, number>;

export interface ProfileImageProps {
  alt: string;
  src: string;
  size: ProfileImageSize;
  onClick?: () => void;
}

// Legacy type aliases for backward compatibility
export type AvatarSize = ProfileImageSize;
export type AvatarSizesType = ProfileImageSizeMap;
export type AvatarProps = ProfileImageProps;
