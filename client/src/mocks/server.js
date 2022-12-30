import { setupServer } from "msw/node"; // msw에서 서버를 가져옴
import { handlers } from "./handlers"; // handler 가져옴

// mocking server 생성
export const server = setupServer(...handlers);
