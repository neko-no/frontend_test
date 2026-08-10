import type { Meta, StoryObj} from "@storybook/react-vite";
import {http, HttpResponse } from "msw";
import { UserList } from "./UserList";
import { mockUsers} from "../../mocks/data/users";


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

          return HttpResponse.json(mockUsers);
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
          await delay(300)
          return HttpResponse.json([]);
        })
      ]
    }
  }
};
