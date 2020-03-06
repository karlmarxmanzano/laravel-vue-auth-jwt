import axios from 'axios'

export default {
    namespaced: true,
    state: {
        token: null,
        user: null
    },

    mutations: {
        SET_TOKEN (state, token) {
            state.token = token
        },
        SET_USER (state, data) {
            state.user = data
        }
    },

    actions: {
        async signIn ({ dispatch }, credentials) {
            return await axios.post('/auth/signin', credentials)
                .then(res => {
                    dispatch('attempt', res.data.access_token)
                })
                .catch(err => console.log(err))
        },
        async attempt ({ commit, state }, token) {
            
            if (token) {
                commit('SET_TOKEN', token)
            }

            if (!state.token) {
                return
            }
            
            try {

                let response = await axios.get('/auth/me')

                commit('SET_USER', response.data)

            } catch (err) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },
        signOut ({ commit }) {
            return axios.post('/auth/signout')
                .then(res => {
                    commit('SET_TOKEN', null)
                    commit('SET_USER', null)
                })
        }
    },

    getters: {
        authenticated (state) {
            return state.token && state.user
        },
        user (state) {
            return state.user
        }
    }
}