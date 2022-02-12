import { createStore } from "vuex";
import anime from "./modules/anime";
import daily from "./modules/daily";
import toast from "./modules/toast";
import auth from "./modules/auth";
import currentAnimeInfo from "./modules/currentAnimeInfo";
import theme from "./modules/theme";

export default createStore({
  modules: { anime, daily, toast, auth, currentAnimeInfo, theme },
});
