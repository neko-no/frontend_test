import type { Meta, StoryObj} from "@storybook/react-vite";
import {http, HttpResponse } from "msw";
import { UserList } from "./UserList";

const meta = {
  component: UserList,
  title: "Component/UserList",
} satisfies Meta<typeof UserList>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("/api/users", async () => {
          await delay(500);

          return HttpResponse.json([
            {id: 1, name: "田中太郎", email: "tanaka@example.com"},
            {id: 2, name: "鈴木花子", email: "suzuki@example.com"},
            {id: 3, name: "佐藤次郎", email: "sato@example.com"},
          ])
        })
      ]
    }
  }
};


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
          await delay(300);
          return HttpResponse.json([]);
        })
      ]
    }
  }
};
