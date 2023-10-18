export default function generateCode (min: number, max: number){
  const r = Math.random() * (max-min) + min
  return Math.floor(r)
}
