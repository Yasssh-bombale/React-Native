import { Href, router } from "expo-router";

export const resetAndNavigate = (newPath) => {
  // function is basically for the reset all the history of the screen and routes and navigate to new path means no way to come back;
  if (router.canGoBack()) {
    router.dismissAll();
  }
  router.replace(newPath);
};
