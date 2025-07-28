import React from "react";
import Breadcrumbs from "../../molecules/breadcrumbs/breadcrumbs";
import type { HeaderProps } from "./header-props";
import { Text } from "../../atoms/text/text";
import SpacingDivider from "../../atoms/spacing-divider/spacing-divider";
import { IconAction } from "../../atoms/icon-action/icon-action";
import ProfileImage from "../../atoms/ProfileImage/ProfileImage";
import FlexContainer from "../../atoms/flex-container/flex-container";
import { ThemeSpacing } from "../../../theme/theme";


const Header: React.FC<HeaderProps> = ({
  breadcrumbs,
  credits,
  userAvatarSrc,
  backgroundColor,
}) => {
  return (
    <FlexContainer
      backgroundColor={backgroundColor ?? "opacity-transparent"}
      horizontalPadding={20} // GAP equivalent
      justifyItems="space-between"
      alignChildren="center"
      containerHeight={`calc(3 * ${ThemeSpacing.variables.GUTTER})`}
    >
      <Breadcrumbs items={breadcrumbs} />
      
      <FlexContainer
        spacing={8} // GUTTER / 2 equivalent
        alignChildren="center"
        flexDirection="row"
        className="header-icon-content"
      >
        <Text
          $renderAs="Text-body/primary/primary"
          $marginHorizontal={`calc(0.5 * ${ThemeSpacing.variables.GUTTER})`}
        >
          Credits: ${credits ?? 0}
        </Text>
        <SpacingDivider backgroundTone="surface-200" dividerHeight={20} dividerWidth={1} />
        
        <FlexContainer
          containerHeight={32}
          containerWidth={32}
          alignChildren="center"
          justifyItems="center"
        >
          <IconAction
            accessibilityLabel="Announcement"
            iconKey="Announcement"
            buttonScale="medium"
            buttonStyle="secondary"
          />
        </FlexContainer>
        
        <FlexContainer
          containerHeight={32}
          containerWidth={32}
          alignChildren="center"
          justifyItems="center"
        >
          <IconAction
            accessibilityLabel="FAQ"
            iconKey="QuestionMark"
            buttonScale="medium"
            buttonStyle="secondary"
          />
        </FlexContainer>
        
        <FlexContainer
          containerHeight={32}
          containerWidth={32}
          alignChildren="center"
          justifyItems="center"
        >
          <IconAction
            accessibilityLabel="Notifications"
            iconKey="Bell"
            buttonScale="medium"
            buttonStyle="secondary"
          />
        </FlexContainer>
      </FlexContainer>
      
      <SpacingDivider horizontalSizeMultiplier={1} />
      
      <ProfileImage
        size="small"
        alt="User Avatar"
        src={userAvatarSrc}
        onClick={() => {}}
      />
    </FlexContainer>
  );
};

export default Header;
