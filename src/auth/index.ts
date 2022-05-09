import { setRedirectPath } from "@/storages/redirectStorage";
import createAuth0Client, { Auth0Client, User } from "@auth0/auth0-spa-js";

class AuthManager {
  private static instance: AuthManager;

  client!: Auth0Client;
  initialized = false;

  private constructor() {
    // do something construct...
  }

  static getInstance() {
    if (!AuthManager.instance) {
      AuthManager.instance = new AuthManager();
    }
    return AuthManager.instance;
  }

  async init() {
    this.client = await createAuth0Client({
      domain: process.env["VUE_APP_DOMAIN"],
      client_id: process.env["VUE_APP_CLIENT_ID"],
    });
    this.initialized = true;
  }

  async isAuthenticated(): Promise<boolean> {
    if (!this.initialized) {
      await this.init();
    }
    return await this.client.isAuthenticated();
  }

  async logout() {
    if (!this.initialized) {
      await this.init();
    }
    await this.client.logout({
      returnTo: process.env["VUE_APP_LOGOUT_REDIRECT_URL"],
    });
  }

  async getToken(): Promise<string> {
    if (!this.initialized) {
      await this.init();
    }
    return await this.client.getTokenSilently();
  }

  async onRedirect() {
    if (!this.initialized) {
      await this.init();
    }
    await this.client.handleRedirectCallback();
  }

  async login(redirectUrl?: string) {
    if (!this.initialized) {
      await this.init();
    }
    setRedirectPath(
      redirectUrl ?? window.location.pathname + window.location.search
    );
    await this.client.loginWithRedirect({
      redirect_uri: process.env["VUE_APP_LOGIN_REDIRECT_URL"],
    });
  }

  async getUser(): Promise<User | undefined> {
    if (!this.initialized) {
      await this.init();
    }
    if (!(await this.isAuthenticated())) {
      await this.login();
    }
    return await this.client.getUser();
  }
}
export default AuthManager;
