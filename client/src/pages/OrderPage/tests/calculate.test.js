import { render, screen } from "../../../test-utils";
import userEvent from "@testing-library/user-event";
import Type from "../Type";
import OrderPage from "../OrderPage";

test("update products total when products change", async () => {
  render(<Type orderType="products" />);
  const productsTotal = screen.getByText("상품 총 가격: ", { exact: false });
  expect(productsTotal).toHaveTextContent("0"); // 처음 가격

  // 아메리카 여행 상품 한개 올리기
  const americaInput = await screen.findByRole("spinbutton", {
    name: "America",
  });
  userEvent.clear(americaInput);
  userEvent.type(americaInput, "1"); // 이 상품을 하나 산다는 뜻
  expect(productsTotal).toHaveTextContent("1000");

  // 영국 여행 상품 3개 더 올리기
  const englandInput = await screen.findByRole("spinbutton", {
    name: "England",
  });
  userEvent.clear(englandInput);
  userEvent.type(englandInput, "1"); // 이 상품을 하나 산다는 뜻
  expect(productsTotal).toHaveTextContent("2000");
});

test("update options total when options change", async () => {
  render(<Type orderType="options" />);

  const optionsTotal = screen.getByText("옵션 총 가격: ", { exact: false });
  expect(optionsTotal).toHaveTextContent("0");

  const InsuranceCheckbox = await screen.findByRole("checkbox", {
    name: "Insurance",
  });
  userEvent.click(InsuranceCheckbox);
  expect(optionsTotal).toHaveTextContent("500");

  const dinnerCheckbox = await screen.findByRole("checkbox", {
    name: "Dinner",
  });
  userEvent.click(dinnerCheckbox);
  expect(optionsTotal).toHaveTextContent("1000");

  userEvent.click(dinnerCheckbox);
  expect(optionsTotal).toHaveTextContent("500");
});

describe("total price of goods and options", () => {
  test("total price starts with 0 and Updating total price when adding one product", async () => {
    render(<OrderPage />);

    const total = screen.getByText("Total price", { exact: false });
    expect(total).toHaveTextContent("0");

    const americaInput = await screen.findByRole("spinbutton", {
      name: "America",
    });
    userEvent.clear(americaInput);
    userEvent.type(americaInput, 1);
    expect(total).toHaveTextContent("1000");
  });

  test("Updating total price when adding one option", async () => {
    render(<OrderPage />);

    const total = screen.getByText("Total price", { exact: false });
    const InsuranceCheckbox = await screen.findByRole("checkbox", {
      name: "Insurance",
    });
    userEvent.click(InsuranceCheckbox);
    expect(total).toHaveTextContent("500");
  });

  test("Updating total price when removing option and product", async () => {
    render(<OrderPage />);

    const total = screen.getByText("Total price", { exact: false });
    const InsuranceCheckbox = await screen.findByRole("checkbox", {
      name: "Insurance",
    });
    userEvent.click(InsuranceCheckbox);

    const americaInput = await screen.findByRole("spinbutton", {
      name: "America",
    });
    userEvent.clear(americaInput);
    userEvent.type(americaInput, "3");

    userEvent.clear(americaInput);
    userEvent.type(americaInput, "1");

    expect(total).toHaveTextContent("1500");
  });
});
