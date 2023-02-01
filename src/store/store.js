import { createStore } from "vuex";
import auth from "./modules/auth";
import theme from "./modules/theme";
import toast from "./modules/toast";

export default createStore({
  modules: { auth, theme, toast },
});
