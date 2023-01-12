import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "./App";
test("From order to order completion", async () => {
  render(<App />);
  const americaInput = await screen.findByRole("spinbutton", {
    name: "America",
  });
  userEvent.clear(americaInput);
  userEvent.type(americaInput, 2);

  const englandInput = await screen.findByRole("spinbutton", {
    name: "England",
  });
  userEvent.clear(englandInput);
  userEvent.type(englandInput, 3);

  const InsuranceCheckbox = await screen.findByRole("checkbox", {
    name: "Insurance",
  });
  userEvent.click(InsuranceCheckbox);

  const orderButton = screen.getByRole("button", {
    name: "주문하기",
  });
  userEvent.click(orderButton);

  //  👩🏼‍💻 주문 확인 페이지////////////
  const summaryHeading = screen.getByRole("heading", {
    name: "주문 확인",
  });
  expect(summaryHeading).toBeInTheDocument();

  // 옵션 총 가격
  const productsHeading = screen.getByRole("heading", {
    name: "여행 상품: 5000",
  });
  expect(productsHeading).toBeInTheDocument();

  const optionsHeading = screen.getByRole("heading", {
    name: "옵션: 500",
  });
  expect(optionsHeading).toBeInTheDocument();

  // 특정 상품 나열
  expect(screen.getByText("2 America")).toBeInTheDocument();
  expect(screen.getByText("3 England")).toBeInTheDocument();
  expect(screen.getByText("Insurance")).toBeInTheDocument();

  // 체크박스
  const confirmCheckbox = screen.getByRole("checkbox", {
    name: "주문하려는 것을 확인하셨나요?",
  });
  userEvent.click(confirmCheckbox);

  const confirmOrderButton = screen.getByRole("button", {
    name: "주문 확인",
  });

  userEvent.click(confirmOrderButton);

  ////////////        주문 완료 페이지 ////////////////
  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();

  // 바로위의 테스트가 성공하면(loading) 주문이 성공했습니다라는 화면이 나올것이다.
  const completeHeader = await screen.findByRole("heading", {
    name: "주문이 성공했습니다. ",
  });
  expect(completeHeader).toBeInTheDocument();
  // 주문이 성공했습니다가 나오면 위의 로딩이 없어져야겠지???  //not.toBeInTheDocument()
  const loadingDisppeared = screen.queryByText("loading");
  expect(loadingDisppeared).not.toBeInTheDocument();

  //이제 돌아가는 버튼을 클릭하는것을 테스트해주겠다.
  const firstPageButton = screen.getByRole("button", {
    name: "첫 페이지로",
  });
  userEvent.click(firstPageButton);
});
