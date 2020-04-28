import axios from "axios"

export default {
  namespaced: true,

  state: {
    users: [],
    user: {}
  },

  mutations: {
    SET_USERS(state, users) {
      state.users = users
    },
    SET_CURRENT_USER(state, user) {
      state.user = user
    }
  },

  actions: {
    fetchUsers ({ commit }) {
      axios
        .get("/users")
        .then(response => {
          commit("SET_USERS", response.data)
        })
        .catch(error => {
          console.log(error.response)
        });
    },
    createUser ({ commit }, user) {
      axios
        .post("/users", user)
        .then(response => {
          console.log('User created.')
        })
        .catch(error => {
            console.log(error.response)
        });
    },
    fetchUser ({ commit }, user) {
      axios
        .get('users/' + user)
        .then(response => {
          commit('SET_CURRENT_USER', response.data)
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    updateUser ({ commit }, user) {
      axios
        .patch("users/" + user.id, user)
        .then(response => {
					commit('SET_CURRENT_USER', response.data)
					console.log(response.data.email + ' updated.')
        })
        .catch(error => {
          console.log(error.data)
        })
    },
    deleteUser ({ commit }, user ) {
      axios
        .delete('users/' + user)
        .then(response => {
            console.log(response.data.email + ' removed.')
        })
        .catch(error => {
            console.log(error.response)
        })
    }
  },

  getters: {
    getUsers(state) {
      return state.users
    },
    getSelectedUser(state) {
      return state.user
    }
  }
};
