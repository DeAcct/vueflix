import { createStore } from "vuex";
import anime from "./modules/anime";
import daily from "./modules/daily";
import toast from "./modules/toast";
import auth from "./modules/auth";

export default createStore({
  modules: { anime, daily, toast, auth },
});
