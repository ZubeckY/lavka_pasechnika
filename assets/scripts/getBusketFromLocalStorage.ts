export default function getBusketFromLocalStorage () {
  if (typeof window !== 'undefined') {
    let LS_DATA: any = localStorage.getItem('busket')
    return LS_DATA ? JSON.parse(LS_DATA) : []
  }
}
