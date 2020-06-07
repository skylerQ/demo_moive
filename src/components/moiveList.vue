<template>
  <div>
    <div class="movieList" v-for="item in arr" :key="item.id">{{item.title}}</div>
  </div>
</template>

<script>
export default {
  name: "movie",
  props: {
    arr: {
      type: Array,
      default(){
        return []
      }
    }
  }
};
</script>

<style>
</style>