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

export const LoadingSpinner: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("/api/users", async () => {
          await delay(1000);
          return HttpResponse.json(mockUsers);
        }),
      ],
    },
  },
  play: async ({ canvas }) => {
    const spinner = canvas.getByTestId("loading-spinner");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toBeVisible();

    await waitFor(
      () => {
        expect(canvas.queryByTestId("loading-spinner")).toBeNull();
      },
      { timeout: 2000 },
    );

    expect(
      canvas.getByRole("heading", { name: "ユーザー一覧" }),
    ).toBeInTheDocument();
  },
}

export const VerifyUserData: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("/api/users", () => {
          return HttpResponse.json(mockUsers);
        }),
      ],
    },
  },
  play: async ({ canvas }) => {
    await canvas.findByRole("heading", { name: "ユーザー一覧" });

    expect(canvas.getByText("田中太郎")).toBeInTheDocument();
    expect(canvas.getByText("tanaka@example.com")).toBeInTheDocument();
    expect(canvas.getByText("鈴木花子")).toBeInTheDocument();
    expect(canvas.getByText("suzuki@example.com")).toBeInTheDocument();
    expect(canvas.getByText("佐藤次郎")).toBeInTheDocument();
    expect(canvas.getByText("sato@example.com")).toBeInTheDocument();

    const listItems = canvas.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  },
};
