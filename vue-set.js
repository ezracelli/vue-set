const assign = (object, key, value) => {
  object[key] = value
}

export default function (object, path, value, setter) {
  // make sure we have a path and a valid object
  if (!path) return
  if (!object || typeof object !== 'object') return

  // make sure the setter is a function
  if (typeof setter !== 'function') setter = assign

  // make sure the path is an array
  if (!Array.isArray(path)) path = [ path ]

  // maintain a reference to the relevant attribute
  let target = object

  // get the last index
  let lastIndex = path.length - 1

  // iterate through keys in the path
  for (let index = 0; index <= lastIndex; index += 1) {
    // get the key
    let key = path[index]

    // set the value at target[key]
    if (index === lastIndex) setter(target, key, value)
    else {
      // overwrite any non-object attributes
      if (typeof target[key] !== 'object') setter(target, key, {})

      setter(target, key, Object.assign(target[key], {}))

      // reference the next relevant attribute
      target = target[key]
    }
  }

  // just in case
  return object
}
