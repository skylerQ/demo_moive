<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  mounted(){
    console.log(this.$store.state.loginUser)
  },
  components: {
  }
}
</script>

<style lang="scss" >
$app: Avenir, Helvetica, Arial, sans-serif;

#app{
  font-family:$app;
  text-align: center;
}

</style>
