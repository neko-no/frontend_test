import { expect, within, waitFor} from "storybook/test";
import type { Meta, StoryObj} from "@storybook/react-vite";
import {http, HttpResponse, delay } from "msw";
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
        http.get("/api/users", async () => {
          await delay(300)
          return HttpResponse.json([]);
        })
      ]
    }
  }
};

export const LoadingAndSuccess: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("/api/users", async () => {
          await delay(800);
          return HttpResponse.json(mockUsers);
        })
      ]
    }
  },
  play: async ({canvas}) => {
    expect(canvas.getByRole("status")).toHaveTextContent("読み込み中...");
    expect(canvas.queryByRole("heading", {name: "ユーザー一覧"})).toBeNull();

    await waitFor(
      () => {
        expect(canvas.getByRole("heading", {name: "ユーザー一覧"})).toBeInTheDocument();
      },
      {timeout: 2000},
    )

    expect(canvas.queryByRole("status")).toBeNull();
  },
}
