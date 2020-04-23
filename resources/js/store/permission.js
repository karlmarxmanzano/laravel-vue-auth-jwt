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
                    commit("SET_PERMISSIONS", response.data);
                })
                .catch(error => {
                    console.log(error.response);
                });
        },
        createPermission({ commit }, permission) {
            axios.post('/permissions')
                .then(response => {
                    commit('SET_PERMISSION', response.data.data)
                })
                .catch(errpr => {

                })
        }
    },

    getters: {
        getPermissions(state) {
            return state.permissions;
        }
    }
};
