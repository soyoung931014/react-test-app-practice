// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// 생성한 서버를 가지고 api를 만들어준다.
import { server } from "./mocks/server";
// 서버를 모든 테스트 전에 시작을 하자.
beforeAll(() => server.listen());
// 하나 하나 테스트 이후에 핸들러들을 리셋 시켜줘 다른 테스트에 영향을 가지 않게 한다.
afterEach(() => server.resetHandlers());
// 테스트가 끝나면 서버를 꺼준다.
afterAll(() => server.close());
