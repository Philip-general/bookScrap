import { BASE_URL, LOGIN } from "../hooks/urls/url";
import { createServer } from "miragejs";

if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.namespace = "";
    this.get("/api/books", () => {
      return {
        documents: [
          {
            title: "더미책1",
            authors: ["김민국"],
            thumbnail:
              "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038",
          },
          {
            title: "더미책2",
            authors: ["이건호", "조용환"],
            thumbnail:
              "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038",
          },
        ],
      };
    });

    this.post(`${BASE_URL}${LOGIN}`, (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody);
      if (email === "123@gmail.com" && password === "123") {
        return {
          ok: true,
          AccessToken: "1234",
        };
      } else {
        return {
          ok: false,
          error: "계정 정보가 일치하지 않습니다.",
        };
      }
    });
  },
});
