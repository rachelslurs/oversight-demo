import type { Meta, StoryObj } from "@storybook/react-vite";
import { StepInput } from "./StepInput";

const meta = {
  title: "Forms/Step Input",
  component: StepInput,
} satisfies Meta<typeof StepInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Seats", value: 2, min: 1, max: 8 },
};
