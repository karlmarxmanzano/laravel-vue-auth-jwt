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
        },
        SET_PERMISSION(state, permission) {
            state.permission = permission;
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
            axios
                .post('/permissions', {
                    name: permission
                })
                .then(response => {
                    commit('SET_PERMISSION', response.data)
                })
                .catch(error => {
                    console.log(error.response);
                })
        },
        viewPermission({ commit }, permission) {
            axios
                .get('permissions/' + permission)
                .then(response => {
                    commit('SET_PERMISSION', response.data)
                })
                .catch(error => {
                    console.log(error.response)
                })
        },
        savePermission({ commit }, { permissionId, name }) {
            axios.post("{permission}/edit", {
                permissionId,
                name
            })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.data)
            })
        },
        deletePermission({ commit }, permission) {
            axios
                .delete('permissions/' + permission)
                .then(response => {
                    console.log(response.data.name + ' removed.');
                })
                .catch(error => {
                    console.log(error.response);
                })
        }
    },

    getters: {
        getPermissions(state) {
            return state.permissions;
        },
        getPermission(state) {
            return state.permission;
        }
    }
};
