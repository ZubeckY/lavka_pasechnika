export const getData = (doc: any) => {
  return {
    id: doc.id,
    ...doc.data()
  }
}
