<template>
  <div class="page">
    <span @click="changePage(1)" class="page_item">首页</span>
    <span @click="changePage(current - 1)" class="page_item">上一页</span>
    <span @click="changePage(item)" class="page_item" v-for="item in numbers" :key="item">{{item}}</span>
    <span @click="changePage(current + 1)" class="page_item">下一页</span>
    <span @click="changePage(numbers.length)" class="page_item">尾页</span>
  </div>
</template>

<script>
export default {
  props:{
      pageNumber:{
        type:Number,
        default:5
      },
      total:{
        type:Number,
        default:20
      },
      current:{
        type:Number,
        default:1
      }

  },
  computed:{
    numbers(){
     let n = Math.ceil(this.total/this.pageNumber)
     let arr = []
     for(let i = 1; i <= n; i++){
       arr.push(i)
     }
     return arr
    }
  },
   methods:{
     changePage(newPage){
        // this.current=newPage
        this.$emit("change",newPage)
        console.log(newPage)
     }
   }
}
</script>

<style lang="scss">
  .page{
    width: 800px;
    display: inline-block;
    margin-top: 300px;
    .page_item{
      border:2px blueviolet solid;
      padding: 3px 10px;
      margin: 8px 8px;
       &:hover{
      background-color: cadetblue;
    }
    }
   
  }
  
</style>