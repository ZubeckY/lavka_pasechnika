import {
  collection,
  getDocs,
  query
} from "firebase/firestore"
import {db} from "~/plugins/firebase"
import {getData} from "~/assets/scripts/getDataDoc"

export const state = () => ({
})

export const mutations = {
}

export const actions = {
  async loadBanner (_conf: any){
    try {
      const bannerCollection = collection(db, "bannermain")
      const q = await query(bannerCollection);
      const querySnapshot = await getDocs(q);

      return querySnapshot.docs.map(doc => getData(doc));
    } catch (e) {
      return Promise.reject(e)
    }
  },
}
export const getters = {

}
