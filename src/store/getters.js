export default {
  getStuByAge (store) {
    return (age) => {
      return store.students.filter(s => s.age > age)
    }
  }
}