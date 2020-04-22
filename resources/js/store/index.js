import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import role from "./role";
import permission from "./permission";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        permission,
        role
    }
});
