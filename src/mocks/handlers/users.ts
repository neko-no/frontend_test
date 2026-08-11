import { http, HttpResponse } from "msw";
import { mockUsers } from "../data/users";
import { createNotFoundResponse } from "../utils/errorHandlers";

export const usersHandlers = [
  http.get("/api/users", () => {
    return HttpResponse.json(mockUsers);
  }),

  http.get("/api/users/:userId", ({ params }) => {
    const { userId } = params;
    const user = mockUsers.find((u) => u.id === Number(userId));
    if (!user) {
      return createNotFoundResponse("ユーザー");
    }
    return HttpResponse.json(user);
  }),

  http.post("/api/users", async ({ request }) => {
    const body = await request.json();

    if (!body.name || !body.email) {
      return HttpResponse.json(
        { error: "名前とメールアドレスは必須です" },
        { status: 400 },
      );
    }

    return HttpResponse.json(
      {
        id: Date.now(),
        ...body,
        createdAt: new Date().toISOString(),
      },
      { status: 201 },
    );
  }),

  http.patch("/api/users/:userId", async ({ params, request }) => {
    const { userId } = params;
    const body = await request.json();
    const user = mockUsers.find((u) => u.id === Number(userId));
    if (!user) {
      return createNotFoundResponse("ユーザー");
    }
    return HttpResponse.json({ ...user, ...body });
  }),

  http.delete("/api/users/:userId", ({ params }) => {
    const { userId } = params;
    const user = mockUsers.find((u) => u.id === Number(userId));
    if (!user) {
      return createNotFoundResponse("ユーザー");
    }
    return new HttpResponse(null, { status: 204 });
  }),
];
