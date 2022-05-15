export const state = () => ({
  genders: [
    { name: 'male', value: 'male' },
    { name: 'female', value: 'female' },
    { name: 'other', value: 'other' },
  ],
  emirates: [],
  Errors: null,
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
  ERRORS_HANDLER(state, data) {
    state.Errors = data
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
