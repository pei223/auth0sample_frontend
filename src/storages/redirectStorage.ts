const REDIRECT_PATH_KEY = "REDIRECT_PATH_KEY";

export const setRedirectPath = (path: string) => {
  sessionStorage.setItem(REDIRECT_PATH_KEY, path);
};

export const popRedirectPath = (): string | null => {
  const redirectPath = sessionStorage.getItem(REDIRECT_PATH_KEY);
  sessionStorage.removeItem(REDIRECT_PATH_KEY);
  return redirectPath;
};
