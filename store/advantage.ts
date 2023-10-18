import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query
} from "firebase/firestore"
import {db} from "~/plugins/firebase"
import {getData} from "~/assets/scripts/getDataDoc"

export const state = () => ({
})

export const mutations = {
}

export const actions = {
  async loadProducts (_conf: any, data: any){
    try {
      const {store, limitVal, orderByVal} = data

      const productCollection = collection(db, "advantage")
      const q = await query(productCollection, limit(limitVal ?? 10))
      const querySnapshot = await getDocs(q);

      return querySnapshot.docs.map(doc => getData(doc))
    } catch (e) {
      return Promise.reject(e)
    }
  },

  async getProduct (_conf: any, data: any) {
    try {
      const docRef = doc(db, "advantage", data)
      const docSnap = await getDoc (docRef)

      return getData(docSnap)
    } catch (e) {
      return Promise.reject(e)
    }
  }

}
export const getters = {
}
