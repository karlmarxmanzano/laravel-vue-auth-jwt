import axios from "axios";

export default {
    namespaced: true,

    state: {
        roles: [],
        role: {}
    },

    mutations: {
        SET_ROLES(state, roles) {
            this.state = roles;
        }
    },

    actions: {},

    getters: {}
};
