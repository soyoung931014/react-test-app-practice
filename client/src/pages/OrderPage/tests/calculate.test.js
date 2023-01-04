import { render, screen } from "../../../test-utils";
import userEvent from "@testing-library/user-event";
import { OrderContextProvider } from "../../../contexts/OrderContext";
import Type from "../Type";

test("update products total when products change", async () => {
  render(<Type orderType="products" />);
  const productsTotal = screen.getByText("총 가격: ", { exact: false });
  expect(productsTotal).toHaveTextContent("0");

  // 아메리카 여행 상품 한개 올리기
  const americaInput = await screen.findByRole("spinbutton", {
    name: "America",
  });
  userEvent.clear(americaInput);
  userEvent.type(americaInput, "1"); // 이 상품을 하나 산다는 뜻
  expect(americaInput).toHaveTextContent("1000");
});
