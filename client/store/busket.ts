export const state = () => ({
  list: []
})

export const mutations = {
  addOne (state: any, data: any) {
    const pos = state.list.map((e: any) => e.productId).indexOf(data.productId)
    return pos == -1 ? state.list.push(data) : state.list[pos].count ++
  },
  deleteOne (state: any, data: any) {
    const pos = state.list.map((e: any) => e.productId).indexOf(data.productId)
    if (!state.list[pos]) return
    state.list[pos].count --

    if (state.list[pos].count <= 0) {
      let list = state.list.filter ((item: any) => item.count > 0)
      return state.list = list
    }
  },
}

export const actions = {
  addOne (store: any, data: any) {
    return store.commit('addOne', data)
  },
  deleteOne (store: any, data: any) {
    return store.commit('deleteOne', data)
  },
  addOneIndex (store: any, data: any) {
    return store.commit('addOneIndex', data)
  },
}

export const getters = {
  getList (state: any) {
    return JSON.parse(JSON.stringify(state.list))
  },

}
