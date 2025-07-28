import React from "react";
import Breadcrumbs from "../../molecules/breadcrumbs/breadcrumbs";
import type { HeaderProps } from "./header-props";
import { Text } from "../../atoms/text/text";
import SpacingDivider from "../../atoms/spacing-divider/spacing-divider";
import { IconAction } from "../../atoms/icon-action/icon-action";
import ProfileImage from "../../atoms/ProfileImage/ProfileImage";
import FlexContainer from "../../atoms/flex-container/flex-container";
import { GITHUB_LINK } from "../../constants/constants";
import { ThemeSpacing } from "../../../theme/theme";

/**
 * There is a static part to the header, that doesn't change.
 * The left part where we show Breadcrums is dynamic, it changes from page to page.
 * The right part is static, the icons, the avatars remain as is.
 */
const Header: React.FC<HeaderProps> = ({
  breadcrumbs,
  credits,
  userAvatarSrc,
  backgroundColor,
}) => {
  const headerWrapperStyle = {
    minHeight: `calc(3 * ${ThemeSpacing.variables.GUTTER})`,
  };

  return (
    <FlexContainer
      backgroundColor={backgroundColor ?? "opacity-transparent"}
      horizontalPadding={12} // GAP equivalent
      justifyItems="space-between"
      alignChildren="center"
      style={headerWrapperStyle}
    >
      <Breadcrumbs items={breadcrumbs} />
      
      <FlexContainer
        spacing={8} // GUTTER / 2 equivalent
        alignChildren="center"
        flexDirection="row"
        className="header-icon-content"
      >
        <Text
          $renderAs="bodyXs"
          $marginHorizontal="8px"
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
            buttonScale="large"
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
            buttonScale="large"
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
            buttonScale="large"
            buttonStyle="secondary"
          />
        </FlexContainer>
      </FlexContainer>
      
      <SpacingDivider dividerWidth={1} />
      
      <ProfileImage
        size="small"
        alt="User Avatar"
        src={userAvatarSrc}
        onClick={() => window.open(GITHUB_LINK, "_blank")}
      />
    </FlexContainer>
  );
};

export default Header;
