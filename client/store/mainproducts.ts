import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit
} from "firebase/firestore";

import {db} from '~/plugins/firebase'

export const state = () => ({
  main_products: []
})

export const mutations = {
  setProducts (state: any, productList: any) {
    return state.main_products = productList;
  }
}

export const actions = {

  async loadProducts (_conf: any, data: any){
    try {
      const {store, limitVal, orderByVal} = data

      const productCollection = collection(db, "mainproduct")
      const q = await query(productCollection, limit(limitVal ?? 10));
      const querySnapshot = await getDocs(q);

      // const productList = querySnapshot.docs.map(doc => doc.data());
      // store.commit("mainproduct/setProducts", productList);

      // return productList

      return querySnapshot.docs.map(doc => doc.data());

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
  mainproduct: (state: any) => state.main_products,
}
