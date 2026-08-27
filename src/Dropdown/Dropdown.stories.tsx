import { memo } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown as BaseDropdown } from "./Dropdown";

const Dropdown = memo(BaseDropdown);
Dropdown.displayName = "Dropdown";

const meta = {
  title: "Forms/Dropdown",
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Dropdown {...args} />,
  args: {
    label: "Region",
    placeholder: "Choose a region",
    options: ["Northern", "Central", "Coastal", "Highlands"],
  },
};
