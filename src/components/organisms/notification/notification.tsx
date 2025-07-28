import { useState } from "react";
import { AppIcons } from "../../../resources/icons";
import FlexContainer from "../../atoms/flex-container/flex-container";
import { IconAction } from "../../atoms/icon-action/icon-action";
import { Text } from "../../atoms/text/text";
import { NotificationVariantMapping } from "./notification-constants";
import type { NotificationProps } from "./notification-types";
import { ThemeColors } from "../../../theme/theme";

const Notification: React.FC<NotificationProps> = ({
  content,
  variant = "info",
  canDismiss = true,
  onDismiss,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const {
    iconType,
    iconTint: iconTintKey,
    backgroundTint,
  } = NotificationVariantMapping[variant] || {};
  
  const iconTint = ThemeColors[iconTintKey as keyof typeof ThemeColors];
  const IconComponent = iconType ? AppIcons[iconType as keyof typeof AppIcons] : null;

  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss();
    }
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <FlexContainer
      backgroundColor={backgroundTint}
      spacing={8}
      cornerRadius={4}
      alignChildren="center"
      verticalPadding={8}
      horizontalPadding={8}
    >
      {IconComponent && (
        <div className="notification-icon" style={{ color: iconTint }}>
          <IconComponent style={{ height: '20px', width: '20px' }} />
        </div>
      )}
      <FlexContainer flexValue={1}>
        <Text $renderAs="bodyPrimary" $userSelect="none">
          {content}
        </Text>
      </FlexContainer>
      {canDismiss && (
        <IconAction
          iconKey="Close"
          buttonScale="medium"
          buttonStyle="secondary"
          accessibilityLabel="Close"
          onClick={handleDismiss}
        />
      )}
    </FlexContainer>
  );
};

export default Notification;
