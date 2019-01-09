import set from '../vue-set'

let obj = {}

test('add attr to object with string', () => {
  set(obj, 'one', null)
  expect(obj).toEqual({ one: null })
})

test('add attr to object with array', () => {
  set(obj, ['two', 'three'], null)
  expect(obj).toEqual({ one: null, two: { three: null } })
})

test('overwrite existing attr', () => {
  set(obj, ['one', 'four'], null)
  expect(obj).toEqual({ one: { four: null }, two: { three: null } })
})
