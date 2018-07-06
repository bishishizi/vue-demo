<template>
  <div class="login">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
