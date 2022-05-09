import AuthManager from "@/auth";
import ky from "ky";

export const baseApi = ky.create({
  prefixUrl: "http://localhost:8080",
  hooks: {
    beforeRequest: [
      async (request: Request) => {
        try {
          if (!(await AuthManager.getInstance().isAuthenticated())) {
            AuthManager.getInstance().login();
          }
          const token = await AuthManager.getInstance().getToken();
          request.headers.set("Authorization", `Bearer ${token}`);
        } catch (e) {
          if (e === "login_required") {
            await AuthManager.getInstance().login();
            return;
          }
          throw e;
        }
      },
    ],
  },
});
