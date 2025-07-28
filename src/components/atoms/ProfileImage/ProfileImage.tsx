import React from "react";
import type { AvatarProps } from "./ProfileImage-types";
import { ProfileImageDimensions } from "./ProfileImage-constants";

const ProfileImage: React.FC<AvatarProps> = (props) => {
  const { src, alt, size = "small", onClick } = props;
  
  // Calculate dimensions based on size variant
  const dimensionValue = ProfileImageDimensions[size];
  
  // Determine interaction styles
  const hasClickHandler = Boolean(onClick);

  // Create inline styles object to avoid style duplication
  const profileImageStyles: React.CSSProperties = {
    borderRadius: "50%",
    width: `${dimensionValue}px`,
    height: `${dimensionValue}px`,
    objectFit: "cover",
    cursor: hasClickHandler ? "pointer" : "default",
    transition: "transform 0.2s",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement>) => {
    if (hasClickHandler) {
      e.currentTarget.style.transform = "scale(1.05)";
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    if (hasClickHandler) {
      e.currentTarget.style.transform = "none";
    }
  };

  return (
    <img
      className="profile-picture"
      src={src}
      alt={alt}
      onClick={onClick}
      style={profileImageStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default ProfileImage;
