export const state = () => ({
  Token: null,
})

export const getters = {
  loggedIn(state) {
    return state.Token !== null
  },
}

export const mutations = {
  SET_TOKEN(state, data) {
    state.Token = data
  },
}

export const actions = {
  async loginHandler({ dispatch, commit }, data) {
    try {
      const response = await this.$axios.$post('login', data)

      if (response) {
        dispatch('attempt', response.data.token)

        return response
      }
    } catch (error) {
      commit('ERRORS_HANDLER', error.response.data, { root: true })
    }
  },
  async attempt({ commit }, token) {
    commit('SET_TOKEN', token)

    let date = new Date()
    const expDays = 2
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000)

    this.$cookiz.set('TOKEN', token, { expires: date })
  },
  async registerHandler({ commit }, payload) {
    try {
      let response = await this.$axios.$post('register', payload)

      return response
    } catch (error) {
      commit('ERRORS_HANDLER', error.response.data, { root: true })
    }
  },
}
