import { hhtp, HttpResponse } from "msw";
import { mockUsers} from "./data/users";


export const handlers = [
  http.get("/api/users", () => {
    return HttpResponse.json(mockUsers);
  }),
  http.get("/api/users/:userId", ({params}) => {
    const {userId} = params;

    const user = mockUsers.find((u) => u.id === Number(userId));

    if(!user){
      return new HttpResponse(null, {status: 404})
    }

    return HttpResponse.json(user);
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
