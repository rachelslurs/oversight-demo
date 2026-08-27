import type { Meta, StoryObj } from "@storybook/react-vite";
import { MediaTile } from "./MediaTile";

const meta = {
  title: "Surfaces/Media Tile",
  component: MediaTile,
} satisfies Meta<typeof MediaTile>;

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
