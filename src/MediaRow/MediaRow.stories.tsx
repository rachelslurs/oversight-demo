import type { Meta, StoryObj } from "@storybook/react-vite";
import { MediaRow } from "./MediaRow";

const meta = {
  title: "Surfaces/Media Row",
  component: MediaRow,
} satisfies Meta<typeof MediaRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Fairhaven Retrospective",
    subtitle: "Shared with six people",
    items: 12,
  },
};
