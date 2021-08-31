import getters from './stores_getter'
const store = {
  namespaced: true,
  state: {
    article: {}, // 文章对象
  },
  mutations: {
    ADD_ARTICLE: (state, data) => {
      state.article = data
    },
  },
  getters,
  actions: {
  }
}

export default store