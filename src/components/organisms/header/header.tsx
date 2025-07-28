import React, { useState, useEffect } from "react";
import Breadcrumbs from "../../molecules/breadcrumbs/breadcrumbs";
import type { HeaderProps } from "./header-props";
import { Text } from "../../atoms/text/text";
import SpacingDivider from "../../atoms/spacing-divider/spacing-divider";
import IconAction from "../../atoms/icon-action/icon-action";
import ProfileImage from "../../atoms/ProfileImage/ProfileImage";
import FlexContainer from "../../atoms/flex-container/flex-container";
import { GITHUB_LINK } from "../../../constants/constants";
import { ThemeColors, ThemeSpacing } from "../../../theme/theme";
import { BreakpointDevices } from "../../../theme/constants/breakpoints-devices";

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
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= BreakpointDevices.desktop);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <FlexContainer 
      backgroundColor={backgroundColor ?? "opacity-transparent"}
      horizontalPadding={20}
      containerHeight={`calc(3 * ${ThemeSpacing.variables.GUTTER})`}
      flexDirection="row"
      justifyItems="space-between"
      alignChildren="center"
    >
      <Breadcrumbs items={breadcrumbs} />
      
      {isDesktop && (
        <FlexContainer
          flexDirection="row"
          alignChildren="center"
          spacing={8}
        >
          <Text
            $renderAs="Text-body/primary/primary"
            $marginHorizontal="8px"
          >
            Credits: ${credits ?? 0}
          </Text>
          
          <SpacingDivider 
            backgroundTone="surface-200" 
            dividerHeight={20} 
            dividerWidth={1} 
          />
          
          <FlexContainer
            containerHeight={32}
            containerWidth={32}
            alignChildren="center"
            justifyItems="center"
          >
            <IconAction
              iconKey="Announcement"
              accessibilityLabel="Announcement"
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
              iconKey="QuestionMark"
              accessibilityLabel="FAQ"
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
              iconKey="Bell"
              accessibilityLabel="Notifications"
              buttonScale="large"
              buttonStyle="secondary"
            />
          </FlexContainer>
        </FlexContainer>
      )}
      
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
