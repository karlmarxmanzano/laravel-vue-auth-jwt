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
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => console.log(err));
        },
        signUp({ dispatch }, user) {
            return axios
                .post("/auth/signup", user)
                .then(res => {
                    dispatch("attempt", res.data.access_token);
                })
                .catch(error => {
                    console.log(error.response);
                });
        },
        attempt({ commit, state }, token) {
            if (token) {
                commit("SET_TOKEN", token);
                window.axios.defaults.headers.common["Authorization"] =
                    "Bearer " + token;
            }

            if (!state.token) {
                return;
            }

            try {
                let response = await axios.get("/auth/me");

                commit("SET_USER", response.data);
            } catch (err) {
                commit("SET_TOKEN", null);
                commit("SET_USER", null);
            }
        },
        signOut({ commit }) {
            return axios.post("/auth/signout").then(res => {
                commit("SET_TOKEN", null);
                commit("SET_USER", null);
            });
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
