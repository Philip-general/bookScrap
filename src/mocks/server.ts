import { createServer } from "miragejs";

export function makeServer({ environment = "test" }) {
  return createServer({
    routes() {
      this.namespace = "api";
      this.post("/login", (schema, request) => {
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
}
