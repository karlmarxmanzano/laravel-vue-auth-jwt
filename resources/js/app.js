require("./bootstrap");

// window.Vue = require('vue');

import Vue from "vue";

import router from "./components/router/index";
import store from "./components/store/index";

import mainApp from "./App.vue";

axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.baseURL = "http://127.0.0.1:8000/api";

// store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
const app = new Vue({
    el: "#app",
    router,
    store,
    components: {
        mainApp
    },
    created() {
        const userString = localStorage.getItem("user");
        const userToken = localStorage.getItem("token");

        if (userString && userToken) {
            const tokenData = JSON.parse(userToken);
            const userData = JSON.parse(userString);

            this.$store.commit("auth/SET_USER", userData);
            this.$store.commit("auth/SET_TOKEN", tokenData);
        }

        axios.interceptors.response.use(
            response => response,
            error => {
                if (error.response.status === 401) {
                    this.$store.dispatch("auth/signOut");
                }
                return Promise.reject(error);
            }
        );
    }
});
// });
