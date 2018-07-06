<template>
  <div class="page">
    <list></list>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import List from '../components/List'

export default {
  name: 'page',
  components:{List},
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
h1 {
  font-weight: normal;
  font-size: 1.8rem;
  color: rgb(13, 13, 14);
}
</style>
</style>
