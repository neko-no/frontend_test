import { http, HttpResponse } from "msw";
import { mockTodos } from "../data/todos";
import { createNotFoundResponse } from "../utils/errorHandlers";

export const todosHandlers = [
  http.get("/api/todos", () => {
    return HttpResponse.json(mockTodos);
  }),

  http.patch("/api/todos/:id", async ({ params, request }) => {
    const { id } = params;
    const body = await request.json();
    const todo = mockTodos.find((t) => t.id === Number(id));
    if (!todo) {
      return createNotFoundResponse("Todo");
    }
    return HttpResponse.json({ ...todo, ...body });
  }),
];
