import { createStore } from "vuex";
//import daily from "./modules/daily";
import auth from "./modules/auth";
import currentAnimeInfo from "./modules/currentAnimeInfo";
import theme from "./modules/theme";
import toast from "./modules/toast";

export default createStore({
  modules: { auth, currentAnimeInfo, theme, toast },
});
