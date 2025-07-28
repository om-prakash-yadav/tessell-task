import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useCallback, useState } from "react";
import { AppIcons } from "../../../assets/icons";
import { Dropdown } from "./dropdown";
import type { DropdownItemProps } from "./dropdown-types";
import FlexContainer from "../../atoms/flex-container/flex-container";
import { Text } from "../../atoms/text/text";

const meta: Meta<typeof Dropdown> = {
  title: "ORGANISMS/Dropdown",
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const DropdownStory = () => {
  const [selected, setSelected] = useState<string | number>("item3");

  const [options, setOptions] = useState<DropdownItemProps[]>([
    {
      value: "item1",
      label: "Item Title",
      $isSelected: false,
      $leadingItem: <AppIcons.CirclePlus width={16} />,
      $trailingItem: <AppIcons.CmdE />,
    },
    {
      value: "item2",
      label: "Item Title",
      $leadingItem: <AppIcons.Cloud width={16} />,
      $trailingItem: <AppIcons.CmdE />,
    },
    {
      value: "item3",
      label: "Item Title",
      $isSelected: true,
      $leadingItem: <AppIcons.Chart width={16} />,
      $trailingItem: <AppIcons.CmdE />,
    },
  ]);

  const handleSelect = useCallback((val: string | number) => {
    setSelected(val);
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.value === val
          ? { ...option, $isSelected: true }
          : { ...option, $isSelected: false }
      )
    );
  }, []);

  return (
    <FlexContainer 
      flexDirection="column" 
      spacing={16} 
      containerWidth="300px"
    >
      <Text $renderAs="headingLg">DropDown</Text>
      <Dropdown
        $label="Service Name"
        $size="default"
        $placeholder="Text Input"
        $options={options}
        $value={selected}
        $helpText={{
          message: "Only numbers between 100 ~ 1000 are allowed",
          color: "subtlest",
        }}
        onChange={handleSelect}
      />
    </FlexContainer>
  );
};


export const Basic: Story = {
  render: () => <DropdownStory />,
};
