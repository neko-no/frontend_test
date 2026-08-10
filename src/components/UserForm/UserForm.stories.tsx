import type {Meta, StoryObj} from "@storybook/react-vite";
import { http, HttpResponse, delay } from "msw";
import { expect, waitFor} from "storybook/test";
import { UserForm } from "./UserForm";


const meta = {
  component: UserForm,
  title: "Components/UserForm"
} satisfies Meta<typeof UserForm>;

export default meta;
type Story = StoryObj<typeof meta>;


export const SuccessfulSubmit: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post("/api/users", async ({request}) => {
          await delay(500);
          const body = await request.json();

          return HttpResponse.json(
            {
              id: 1,
              name: body.name,
              email: body.email,
              createdAt: new Date().toISOString(),
            },
            {status: 201}
          )
        })
      ]
    }
  },
  play: async ({canvas, userEvent}) => {
    const nameInput = canvas.getByLabelText("名前");
    const emailInput = canvas.getByLabelText("メールアドレス");
    const submitButton = canvas.getByRole("button", { name: "登録" });

    await userEvent.type(nameInput, "田中太郎");
    await userEvent.type(emailInput, "tanaka@example.com");
    
    expect(nameInput).toHaveValue("田中太郎");
　　expect(emailInput).toHaveValue("tanaka@example.com");

　　await userEvent.click(submitButton);

　　expect(submitButton).toBeDisabled();
　　expect(submitButton).toHaveTextContent("送信中...");

    await waitFor(
　　　() => {
　　　　expect(canvas.getByRole("status")).toHaveTextContent(
　　　　　"ユーザーを登録しました。",
　　　　);
　　　},
　　　{ timeout: 2000 },
    　　);

　　expect(submitButton).toBeEnabled();
　　expect(submitButton).toHaveTextContent("登録");

　　expect(nameInput).toHaveValue("");
　　expect(emailInput).toHaveValue("");

　　expect(canvas.queryByRole("alert")).toBeNull();
　},
};

