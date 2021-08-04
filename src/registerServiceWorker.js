import { register } from "register-service-worker";

/*production 모드일때만 주석풀기*/
if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log("App is being served from cache by a service worker.");
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated() {
      console.log("New content is available;");
      caches
        .keys()
        .then(names => {
          for (let name of names) caches.delete(name);
        })
        .then(() => {
          console.log("Content is updated");
        });
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode.",
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    },
  });
}
