export default function mapObject(object, iterate) {
  let ret = []
  for (const key in object) {
    ret.push(iterate(object[key], key, object))
  }
  return ret
}
