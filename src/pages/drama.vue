<template>
  <div>
  <h1>电视剧</h1>
  <Welcome />
  <Nav />
   <MoiveList />
  </div>
</template>

<script>
import Nav from '../components/nav'
import MoiveList from '../components/moiveList'
import Welcome from '../components/welcome'
export default {
   components:{
     Nav,
     MoiveList,
     Welcome
   }
}
</script>

<style>

</style>