import type { Meta, StoryObj } from '@storybook/react-webpack5';
import TextinputTag from './textinput-tag';

const meta: Meta<typeof TextinputTag> = {
  title: 'Molecules/TextinputTag',
  component: TextinputTag,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    marginBottomX: {
      control: { type: 'number' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Tags',
    placeholder: 'Key           : Value',
    name: 'tags',
    maxWidth: '300px',
  },
};

