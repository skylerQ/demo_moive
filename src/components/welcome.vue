<template>
  <div>
    <p v-if="isLoading" >欢迎你，{{$store.state.loginUser.name}}
           <button @click="exit">退出</button>
        </p>
        <p v-else>
        <router-link to='/login'>请登录</router-link>
        </p>
  </div>
</template>

<script>
export default {
   components:{
    
   },
   computed:{
       isLoading(){
           //利用计算属性的值改变了，会改变状态的性质，把需要跟随改变的结果放在计算中
           return this.$store.state.loginUser.isLoading
       }
   },
   methods:{
       exit(){
          localStorage.removeItem()
       }
   },
   //页面一进来就加载
   mounted(){
        console.log(localStorage);
        //判断本地存储里面是否有值
        if(localStorage.loginUser){
            //获取这个值
            const data = JSON.parse(localStorage.loginUser);
            console.log(data);
            //是否登录
           if(data.isLoading){
                  //使用方法
                   this.$store.commit("loginUser/changes",data);
           }
        }
    },
}
</script>

<style>

</style>