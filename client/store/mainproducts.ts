import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit
} from "firebase/firestore";

import {db} from '../plugins/firebase'

export const state = () => ({
  main_products: []
})

export const mutations = {
  setProducts (state: any, productList: any){
    return state.main_products = productList;
  }
}

export const actions = {

  async loadProducts (_conf: any, store: any){
    try {

      const productCollection = collection(db, "mainproduct")
      const q = await query(productCollection, limit(10));
      console.log(q)

      const querySnapshot = await getDocs(q);
      const productList = querySnapshot.docs.map(doc => doc.data());

      // store.commit("mainproducts/setProducts", productList);

      return productList

    } catch (e) {
      return Promise.reject(e)
    }
  },

  async addProduct (_conf: any, product: any){
    try {
      return await addDoc (collection(db, "mainproducts"), {...product});
    } catch (e) {
      return Promise.reject(e)
    }
  },

  // async removeProduct (_conf: any, productId: any){
  //   try {
  //     await this.$fire.firestore.collection('mainproducts').doc(productId).delete();
  //   } catch (e) {
  //     return Promise.reject(e)
  //   }
  // }

}

export const getters = {
  mainProducts: (state: any) => state.main_products,
}
