import * as TYPE from './store-type'

export default {
  [TYPE.INCREAMENT] (store) {
    store.counter += 1
  },
  [TYPE.DECREAMENT] (store) {
    store.counter -= 1
  }
}