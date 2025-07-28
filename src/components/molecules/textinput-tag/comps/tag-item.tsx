import React from "react";
import FlexContainer from "../../../atoms/flex-container/flex-container";
import { AppIcons } from "../../../../resources/icons";
import { Text } from "../../../atoms/text/text";
import IconAction from "../../../atoms/icon-action/icon-action";

interface TagItemProps {
  label: string;
  onDismiss: () => void;
}

const TagItem: React.FC<TagItemProps> = ({ label, onDismiss }) => {
  return (
    <FlexContainer
      alignChildren="center"
      justifyItems="space-between"
      verticalPadding={2}
      horizontalPadding={6}
      spacing={2}
      cornerRadius={4}
      backgroundColor="surface-100"
    >
      <Text $renderAs="Text-body/secondary/secondary" $userSelect="none">
        {label}
      </Text>
      <IconAction
        iconKey="Close"
        buttonStyle="secondary"
        buttonScale="small"
        accessibilityLabel="Remove tag"
        onClick={onDismiss}
        noBorder={true}
      />
    </FlexContainer>
  );
};

export default TagItem;
