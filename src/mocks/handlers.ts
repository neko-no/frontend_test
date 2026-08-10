import { hhtp, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/users", () => {
    return HttpResponse.json([
      {id: 1, name: "田中太郎", email: "tanaka@example.com"},
      {id: 2, name: "鈴木花子", email: "suzuki@example.com"},
      {id: 3, name: "佐藤次郎", email: "sato@example.com"},
    ])
  }),
  http.get("/api/users/:userId", ({params}) => {
    const {userId} = params;

    if(userId === "1"){
      return HttpResponse.json({
        id: 1,
        name: "田中太郎",
        email: "tanaka@example.com",
      })
    }

    return new HttpResponse(null, {status: 404});
  }),
  http.post("/api/users", async({request}) => {
    const newUser = await request.json();

    if(!newUser.name || !newUser.email) {
      return HttpResponse.json(
        {error: "名前とメールアドレスは必須です"},
        {status: 400}
      )
    }

    return HttpResponse.json({
      id: Date.now(),
      ...newUser
    }, {status:201})

  })
]
