import axios from "axios";

export default {
    namespaced: true,
    state: {
        token: null,
        user: {}
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER(state, data) {
            state.user = data;
        }
    },

    actions: {
        signIn({ commit }, credentials) {
            return axios
                .post("/auth/signin", credentials)
                .then(response => {
                    commit("SET_TOKEN", response.data.access_token);
                    commit("SET_USER", response.data.user);

                    window.axios.defaults.headers.common["Authorization"] =
                        "Bearer " + response.data.access_token;

                    localStorage.setItem(
                        "token",
                        JSON.stringify(response.data.access_token)
                    );
                    localStorage.setItem(
                        "user",
                        JSON.stringify(response.data.user)
                    );
                })
                .catch(error => {
                    console.log(error.response);

                    commit("SET_TOKEN", null);
                    commit("SET_USER", null);
                    localStorage.setItem("token", "");
                    localStorage.setItem("user", "");
                });
        },
        signUp({ commit }, user) {
            return axios
                .post("/auth/signup", user)
                .then(response => {
                    commit("SET_TOKEN", token);
                    commit("SET_USER", response.data.user);

                    window.axios.defaults.headers.common["Authorization"] =
                        "Bearer " + token;

                    localStorage.setItem("token", token);
                    localStorage.setItem("user", response.data);
                })
                .catch(error => {
                    console.log(error.response);

                    commit("SET_TOKEN", null);
                    commit("SET_USER", null);
                    localStorage.setItem("token", token);
                    localStorage.setItem("user", response.data);
                });
        },
        signOut({ commit }) {
            return axios
                .post("/auth/signout")
                .then(response => {
                    commit("SET_TOKEN", null);
                    commit("SET_USER", null);
                    localStorage.setItem("token", "");
                    localStorage.setItem("user", "");
                })
                .catch(error => {
                    console.log(error.response)
                })
        }
    },

    getters: {
        authenticated(state) {
            return !!state.token && !!state.user;
        },
        user(state) {
            return state.user;
        }
    }
};
