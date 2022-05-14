export const state = () => ({
  genders: [
    { name: 'Male', value: 'Male' },
    { name: 'Female', value: 'Female' },
    { name: 'Other', value: 'Other' },
  ],
  emirates: [],
})

export const getters = {
  get_genders(state) {
    return state.genders
  },
  get_emirates(state) {
    return state.emirates
  },
}
export const mutations = {
  SET_EMIRATES(state, result) {
    state.emirates = result
  },
}
export const actions = {
  async get_all_emirats({ commit }) {
    try {
      let response = await this.$axios.$post('get-emirates')

      commit('SET_EMIRATES', response)
    } catch (error) {
      console.error(error)
    }
  },
}
