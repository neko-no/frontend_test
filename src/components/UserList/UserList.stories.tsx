import type { Meta, StoryObj} from "@storybook/react-vite";
import {http, HttpResponse } from "msw";
import { UserList } from "./UserList";

const meta = {
  component: UserList,
  title: "Component/UserList",
} satisfies Meta<typeof UserList>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {};


export const ErrorState: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("/api/users", () => {
          return new HttpResponse(null, {status: 500});
        })
      ]
    }
  }
}

export const EmptyState: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("/api/users", () => {
          return HttpResponse.json([]);
        })
      ]
    }
  }
};
