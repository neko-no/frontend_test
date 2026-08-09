import type { Meta, StoryObj} from "@storybook/react-vite";
import { Button } from "./Button";


const meta = {
  component: Button,
  title: "Compnents/Button",
} satisfies Meta<typeof Button>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    children: "ボタン",
  },
};


export const Primary: Story = {
  args: {
    variant: "Primary",
    children: "Primary",
  },
};


export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};
