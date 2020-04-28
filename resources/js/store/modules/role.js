import axios from "axios"

export default {
  namespaced: true,

  state: {
    roles: [],
    role: {}
  },

  mutations: {
    SET_ROLES(state, roles) {
      state.roles = roles
    },
    SET_ROLE(state, role) {
      state.role = role
    }
  },

  actions: {
    fetchRoles({ commit }) {
      axios
        .get("/roles")
        .then(response => {
          commit("SET_ROLES", response.data)
        })
        .catch(error => {
          console.log(error.response)
        });
    },
    createRole({ commit }, role) {
      axios
        .post('/roles', {
          name: role.name
        })
        .then(response => {
          commit('SET_ROLE', response.data)
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    fetchRole({ commit }, role) {
      axios
        .get('roles/' + role)
        .then(response => {
          commit('SET_ROLE', response.data)
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    updateRole({ commit }, role) {
      axios
        .patch("roles/" + role.id, {
          name: role.name
        })
        .then(response => {
					commit('SET_ROLE', response.data)
					console.log(response.data.name + ' updated.')
        })
        .catch(error => {
          console.log(error.data)
        })
    },
    deleteRole({ commit }, role ) {
      axios
        .delete('roles/' + role)
        .then(response => {
            console.log(response.data.name + ' removed.')
        })
        .catch(error => {
            console.log(error.response)
        })
    }
  },

  getters: {
    getRoles(state) {
      return state.roles
    },
    getCurrentRole(state) {
      return state.role
    }
  }
};
