import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)


const state = {
  counter: 0,
  students: [
    {id: 0, name: 'zhangsan', age: 19},
    {id: 1, name: 'lisi', age: 5},
    {id: 2, name: 'wangwu', age: 12},
    {id: 3, name: 'liuliu', age: 15},
    {id: 4, name: 'huangqi', age: 21}
  ]
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,

  modules: {
    
  }
})


export default store