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
    await this.$axios
      .get('get-emirates')
      .then((res) => {
        commit('SET_EMIRATES', res)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
