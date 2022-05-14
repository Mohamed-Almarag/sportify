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
  async loginHandler({ dispatch }, data) {
    try {
      const response = await this.$axios.$post('login', data)

      if (response) {
        dispatch('attempt', response.data.token)

        return response
      }
    } catch (error) {
      console.warn(error)
    }
  },
  async attempt({ commit }, token) {
    commit('SET_TOKEN', token)

    let date = new Date()
    const expDays = 2
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000)

    console.log(typeof date)

    this.$cookiz.set('TOKEN', token, { expires: date })
  },
}
