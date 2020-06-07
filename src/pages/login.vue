<template>
  <div>
  <h1>登录</h1>
  <Nav />
  <input type="text" v-model="login.userName" placeholder="请输入用户名">
  <input type="text" v-model="login.password" placeholder="密码">
  <button @click="login1">登录</button>
  </div>
</template>

<script>
import Nav from '../components/nav'
export default {
   components:{
     Nav
   },
   data(){
      return {
        login:{
           userName:'',
           password:'',
           isLoading:true
        }
      }
   },
   methods:{
     login1(){
       //dispatch执行actions里面的方法，login就是里面的方法，loginUser是store下面index里面自定的模块
       this.$store.dispatch("loginUser/login",this.login)

       console.log(this.login)
     }
   }
}
</script>

<style>

</style>