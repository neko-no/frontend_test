import type { Meta, StoryObj} from "@storybook/react-vite";
import { Button } from "./Button";


const meta: Meta<typeof Button> = {
  component: Button,
  title: "Compnents/Button",
};


export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args:{
    children: "ボタン",
  },
};


export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};


export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};
