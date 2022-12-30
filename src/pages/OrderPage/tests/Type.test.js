import { render, screen } from "@testing-library/react";
import Type from "../Type";

test("display produce images from server", async () => {
  render(<Type orderType="products" />);
  const productImages = await screen.findAllByRole("img", {
    name: /product$/i, // ㄷ...product로 끝난다 할때 $
  });
  expect(productImages).toHaveLength(2); // 현재 핸들러 데이터 2임

  const altText = productImages.map((el) => el.alt);
  expect(altText).toEqual(["America product", "England product"]);
});
