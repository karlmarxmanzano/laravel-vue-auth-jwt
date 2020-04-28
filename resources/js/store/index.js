import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth";
import user from "./modules/user";
import permission from "./modules/permission";
import role from "./modules/role";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        user,
        permission,
        role
    }
});
