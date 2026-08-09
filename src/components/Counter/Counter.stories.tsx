import type { Meta, StoryObj} from "@storybook/react-vite";
import { expect } from "storybook/test";
import { Counter } from "./Counter";


const meta = {
  component: Counter,
  title: "Components/Counter",
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;


export const IncrementOnClick: Story = {
  play: async ({canvas, userEvent}) => {
    const countText = canvas.getByText("Count: 0");
    expect(countText).toBeInTheDocument();

    const button = canvas.getByRole("button", {name: "Increment"});
    await userEvent.click(button);

    expect(canvas.getByText("Count: 1")).toBeInTheDocument();
  }
}
