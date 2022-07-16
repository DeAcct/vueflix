import { createStore } from "vuex";
//import daily from "./modules/daily";
import auth from "./modules/auth";
import currentAnimeInfo from "./modules/currentAnimeInfo";
import theme from "./modules/theme";

export default createStore({
  modules: { auth, currentAnimeInfo, theme },
});
