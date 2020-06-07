<template>
  <div>
    <h1>电影Top250</h1>
     <Welcome />
    <Nav />
    <MoiveList :arr="todos"  />
     <Pages @change="changeItem" :pageNumber="pageNumber" :current="current" :total="total" />
  </div>
</template>

<script>
import Nav from "../components/nav.vue"
import MoiveList from '../components/moiveList'
import Pages from '../components/pages'
import Welcome from '../components/welcome'

export default {
  components: {
    Nav,
    MoiveList,
    Pages,
    Welcome
  },
  data() {
    return {
      pageNumber: 5, 
      current: 1,
      total: 20,
      arr: [
        { title: "蝙蝠侠1", id: 1 },
        { title: "蝙蝠侠2", id: 2 },
        { title: "蝙蝠侠3", id: 3 },
        { title: "蝙蝠侠4", id: 4 },
        { title: "蝙蝠侠5", id: 5 },
        { title: "蝙蝠侠6", id: 6 },
        { title: "蝙蝠侠7", id: 7 },
        { title: "蝙蝠侠8", id: 8 },
        { title: "蝙蝠侠9", id: 9 },
        { title: "蝙蝠侠10", id: 10 },
        { title: "蝙蝠侠11", id: 11 },
        { title: "蝙蝠侠12", id: 12 },
        { title: "蝙蝠侠13", id: 13 },
        { title: "蝙蝠侠14", id: 14 },
        { title: "蝙蝠侠15", id: 15 },
        { title: "蝙蝠侠16", id: 16 },
        { title: "蝙蝠侠17", id: 17 },
        { title: "蝙蝠侠18", id: 18 },
        { title: "蝙蝠侠19", id: 19 },
        { title: "蝙蝠侠20", id: 20 }
      ]
    }
  },
  computed:{
      todos(){
      //  let arr = this.arr.slice((this.current-1)*5,this.current*this.pageNumber)
      //  return arr
      return this.arr.slice((this.current-1)*5,this.current*this.pageNumber)
      }
  },
  methods:{
    changeItem(n){
      this.current = n
    }
  }
}

</script>