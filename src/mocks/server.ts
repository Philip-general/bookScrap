
import { BASE_URL, LOGIN, MAKE_SCRAPBOOK, SEARCH_BOOK, SIGNUP,SCRAPBOOKS } from "../hooks/urls/url";
import { createServer } from "miragejs";

if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.namespace = BASE_URL;
    this.get(`${SEARCH_BOOK}`, () => {
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

    // post
    this.post(`${MAKE_SCRAPBOOK}`, (schema, request) => {
      console.log(request)
      return { ok: true }
    });
    this.post(`${LOGIN}`, (schema, request) => {
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
    this.post(`${SIGNUP}`, (schema, request) => {
      const { id, password, email } = JSON.parse(request.requestBody);
      if (id === "조용환") {
        return {
          ok: false,
        };
      } else {
        return {
          ok: true,
        };
      }
    });
    this.get(`${BASE_URL}${SCRAPBOOKS}`, () => {
      return{
        documents:[
          {
            title: "더미책1",
            authors: ["김민국"],
            contents:"안녕하세요 더미책1입니다.가나다라마바사아자차카타파하ㅎㅎㅎㅎㅎㅎ",
            thumbnail:
              "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038",
            scrapbookId :1,
          },
          {
            title: "더미책2",
            authors: ["이건호", "조용환"],
            contents:"안녕하세요 더미책2입니다.가나다라마바사아자차카타파하ㅎㅎㅎㅎㅎㅎ",
            thumbnail:
              "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038",
            scrapbookId :2,
          },
        ]
      }
    })
  }
});
