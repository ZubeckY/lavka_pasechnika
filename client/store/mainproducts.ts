import firebase from "firebase/compat";

export const state = () => ({
  main_products: []
})

export const mutations = {
  setProducts(state: any, mainProducts: any){
    state.main_products = mainProducts;
  }
}

export const actions = {
  async loadGorillas(commit: any, mainProducts: any){
    try{
      const docsRef= await firebase.firestore().collection('mainproducts').get();
      const productList = docsRef.docs.map(doc => ({... doc.data(), id: doc.id}));
      commit("setProducts", productList);
    }
    catch (e) {
      return Promise.reject(e)
    }
  }
}

export const getters = {
  mainProducts: (state: any) => state.main_products,
}
