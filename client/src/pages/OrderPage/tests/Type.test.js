import { render, screen } from "../../../test-utils";
import { server } from "../../../mocks/server";
import Type from "../Type";
import { rest } from "msw";

//이미지 찾기
test("display produce images from server", async () => {
  render(<Type orderType="products" />);
  const productImages = await screen.findAllByRole("img", {
    name: /product$/i, // ㄷ...product로 끝난다 할때 $
  });
  // findAllByRole사용한 이유: 2개 이상이니까 All,
  expect(productImages).toHaveLength(2); // 현재 핸들러 데이터 2임

  const altText = productImages.map((el) => el.alt);
  expect(altText).toEqual(["America product", "England product"]);
});

test("when fetching product datas, face an error", async () => {
  server.resetHandlers(
    rest.get("http://localhost:5000/products", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<Type orderType="products" />);
  const errorBanner = await screen.findByTestId("error-banner");
  expect(errorBanner).toHaveTextContent("에러가 발생했습니다");
});

test("fetch option information from server", async () => {
  render(<Type orderType="options" />);
  const optionCheckboxes = await screen.findAllByRole("checkbox");
  expect(optionCheckboxes).toHaveLength(2);
});
