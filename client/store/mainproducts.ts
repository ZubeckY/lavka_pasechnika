import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  doc,
  getDoc
} from "firebase/firestore"
import {db} from '~/plugins/firebase'
import {getData} from "~/assets/scripts/getDataDoc"

export const state = () => ({
})

export const mutations = {
}

export const actions = {

  async loadProducts (_conf: any, data: any){
    try {
      const {store, limitVal, orderByVal} = data

      const productCollection = collection(db, "mainproduct")
      const q = await query(productCollection, limit(limitVal ?? 10));
      const querySnapshot = await getDocs(q);

      return querySnapshot.docs.map(doc => getData(doc));
    } catch (e) {
      return Promise.reject(e)
    }
  },

  async getProduct (_conf: any, data: any) {
    try {
      const docRef = doc(db, "mainproduct", data);
      const docSnap = await getDoc (docRef);

      return getData(docSnap)
    } catch (e) {
      return Promise.reject(e)
    }
  },

  async addProduct (_conf: any, product: any){
    try {
      return await addDoc (collection(db, "mainproduct"), {...product});
    } catch (e) {
      return Promise.reject(e)
    }
  },

  // async removeProduct (_conf: any, productId: any){
  //   try {
  //     await this.$fire.firestore.collection('mainproduct').doc(productId).delete();
  //   } catch (e) {
  //     return Promise.reject(e)
  //   }
  // }

}

export const getters = {
}
