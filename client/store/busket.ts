export const state = () => ({
  list: []
})

export const mutations = {
  addOne (state: any, data: any) {
    return state.list.push(data)
  },
  deleteOne (state: any, data: any) {
    return state.list.filter((item: any) => item.id !== data.id)
  }
}

export const actions = {
  addOne (store: any, data: any) {
    return store.commit('addOne', data)
  },
}
export const getters = {
  getList (state: any) {
    return JSON.parse(JSON.stringify(state.list))
  }
}
