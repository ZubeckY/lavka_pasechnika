import {
  collection,
  getDocs,
  orderBy,
  query
} from "firebase/firestore"
import {db} from "~/plugins/firebase"
import {getData} from "~/assets/scripts/getDataDoc"

export const state = () => ({
})

export const mutations = {
}

export const actions = {
  async loadFilialShop (_conf: any){
    try {
      const filialShopCollection = collection(db, "FilialsShop")
      const q = await query(filialShopCollection, orderBy ('PriorityShopFilial'))
      const querySnapshot = await getDocs(q)

      return querySnapshot.docs.map(doc => getData(doc))
    } catch (e) {
      return Promise.reject(e)
    }
  },
}
export const getters = {

}
