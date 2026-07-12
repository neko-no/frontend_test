import { render } from "@testing-library/react";
import { Message } from "./message";


test("Messageコンポーネントがクラッシュせずにレンダリングできる", () => {
  render(<Message />);
})
