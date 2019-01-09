# vue-set

This is a simple utility mimicking `lodash.set`, but it allows the caller to optionally pass a custom setter function like `Vue.set` (`this.$set` in components). If no setter is passed, `set` uses the assignment operator.

## Useage

```javascript
set(object, path, value, [setter])
```

- `object`: object
- `path`: array, string
- `value`: any
- `[setter]`: function

### Example with Vuex

```javascript
import Vue from 'vue'
import set from 'vue-set'

export default {
  state: {
    obj: {},
  },
  mutations: {
    setAttributeValueAtYearAndSemester(state, data) {
      let { year, semester, key, value } = data
      set(state.obj, [ year, semester, key ], value, Vue.set)

      // state.obj is now properly reactive
    },
  },
}
```
