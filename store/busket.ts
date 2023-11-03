export const state = () => ({
  list: []
})

export const mutations = {
  initList (state: any, data: any) {
    return state.list = data
  },
  addOne (state: any, data: any) {
    const pos = state.list.map((e: any) => e.productId).indexOf(data.productId)
    pos == -1 ? state.list.push(data) : state.list[pos].count ++
    localStorage.setItem('busket', JSON.stringify(state.list))
    return
  },
  deleteOne (state: any, data: any) {
    const pos = state.list.map((e: any) => e.productId).indexOf(data.productId)
    if (!state.list[pos]) return
    state.list[pos].count --

    if (state.list[pos].count <= 0) {
      state.list = state.list.filter ((item: any) => item.count > 0)
    }

    localStorage.setItem('busket', JSON.stringify(state.list))
  },
}

export const actions = {
  initList (store: any, data: any) {
    return store.commit('initList', data)
  },
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
    return state.list
  },

  getCountItems (state: any) {
    let count = 0
    let storeData = state.list

    if (!storeData) return 0
    for (let i = 0; i < storeData.length; i++) {
      count += storeData[i]['count']
    }
    return count
  },

  getTotalPrice(state: any) {
    let count = 0
    let storeData = state.list

    if (!storeData) return 0
    for (let i = 0; i < storeData.length; i++) {
      count += storeData[i]['count'] * storeData[i]['productPrice']
    }
    return count
  },

}
