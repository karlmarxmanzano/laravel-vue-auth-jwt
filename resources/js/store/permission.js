import axios from "axios";

export default {
    namespaced: true,

    state: {
        permissions: [],
        permission: {}
    },

    mutations: {
        SET_PERMISSIONS(state, permissions) {
            state.permissions = permissions;
        }
    },

    actions: {
        fetchPermissions({ commit }) {
            axios
                .get("/permissions")
                .then(response => {
                    commit("SET_PERMISSIONS", response.data.data);
                })
                .catch(error => {
                    console.log(error.response);
                });
        }
    },

    getters: {
        getPermissions(state) {
            return state.permissions;
        }
    }
};
