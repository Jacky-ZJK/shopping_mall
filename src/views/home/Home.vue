<template>
  <div>
    <h2>Home</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="deClick">-</button>
    <button @click="inClick">+</button>
    
    <h2>Student</h2>
    <input type="text" placeholder="请输入年龄" @keydown.enter="inputEvent">
    <ul>
      <li v-for="item in students" :key="item.id"> {{item.name}} - {{item.age}} </li>
    </ul>
  </div>
</template>

<script>
import * as TYPE from '@/store/store-type'

export default {
  name: 'Home',
  data () {
    return {
      students: [],
    }
  },
  computed: {
    
  },
  methods: {
    deClick () {
      this.$store.commit(TYPE.DECREAMENT)
    },
    inClick () {
      this.$store.commit(TYPE.INCREAMENT)
    },
    inputEvent (evt) {
      this.students = this.$store.getters.getStuByAge(evt.target.value)
    }
  }
}
</script>

<style>

</style>