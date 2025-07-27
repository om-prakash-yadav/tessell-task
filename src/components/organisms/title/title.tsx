import React from "react";
import FlexContainer from "../../atoms/flex-container/flex-container";
import { Text } from "../../atoms/text/text";
import type { TitleProps } from "./title-types";
import IconAction from "../../atoms/icon-action/icon-action";

const Title: React.FC<TitleProps> = ({
  title,
  onDismiss,
  trailingItem,
  backgroundColor,
}) => {
  return (
    <FlexContainer
      alignChildren="center"
      justifyItems="space-between"
      horizontalSpacing={1}
      containerHeight="calc(3 * var(--gutter))"
      topBorderWidth={1}
      backgroundColor={backgroundColor ?? "opacity-transparent"}
    >
      <FlexContainer flexValue={1}>
        <Text $renderAs="heading/primary">{title}</Text>
      </FlexContainer>
      <FlexContainer 
        alignChildren="center" 
        horizontalSpacing={0.5}
      >
        {trailingItem}
        {onDismiss && (
          <IconAction
            iconKey="Close"
            buttonScale="medium"
            buttonStyle="primary"
            accessibilityLabel="Close"
            onClick={onDismiss}
          />
        )}
      </FlexContainer>
    </FlexContainer>
  );
};

export default Title;
