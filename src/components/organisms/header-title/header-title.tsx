import React from "react";
import FlexContainer from "../../atoms/flex-container/flex-container";
import { Text } from "../../atoms/text/text";
import type { HeaderTitleProps } from "./header-title-types";
import { IconAction } from "../../atoms/icon-action/icon-action";
import { ThemeSpacing } from "../../../theme/theme";

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  title,
  onDismiss,
  trailingItem,
  backgroundColor,
}) => {
  return (
    <FlexContainer
      alignChildren="center"
      justifyItems="space-between"
      horizontalPadding={20} // GAP equivalent
      backgroundColor={backgroundColor ?? "opacity-transparent"}
      topBorderWidth={1}
      containerHeight={`calc(3 * ${ThemeSpacing.variables.GUTTER})`}
    >
      <FlexContainer flexValue={1}>
        <Text $renderAs="heading/primary">{title}</Text>
      </FlexContainer>
      <FlexContainer 
        alignChildren="center" 
        spacing={8} // GUTTER / 2 equivalent
        flexDirection="row"
      >
        {trailingItem}
        {onDismiss && (
          <IconAction
            iconKey="Close"
            buttonScale="medium"
            buttonStyle="secondary"
            accessibilityLabel="Close"
            onClick={onDismiss}
          />
        )}
      </FlexContainer>
    </FlexContainer>
  );
};

export default HeaderTitle;
