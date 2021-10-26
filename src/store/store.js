import { createStore } from "vuex";
import anime from "./modules/anime";
import daily from "./modules/daily";

export default createStore({
  modules: { anime, daily },
});
