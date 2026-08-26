import type { Meta, StoryObj } from "@storybook/react-vite";
import { MediaCard } from "./MediaCard";

const meta = {
  title: "Surfaces/Media Card",
  component: MediaCard,
} satisfies Meta<typeof MediaCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Northwind Assembly",
    subtitle: "Updated by Marcus on Tuesday",
    items: 4,
    tone: "accent",
  },
};
