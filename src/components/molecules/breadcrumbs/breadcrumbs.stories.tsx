import type { Meta } from "@storybook/react-webpack5";
import Breadcrumbs from "./breadcrumbs";


const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
};

export default meta;

export const Default = {
  args: {
    items: [
      { label: "Provisioning" },
      { label: "Relational Databases" },
      { label: "Oracle Server" },
    ],
  },
};
