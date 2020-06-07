import router from '../router'

export default{
    namespaced:true,//开启命名空间,防止命名冲突
    //state相当于data，存储数据，全局可以访问state的数据
    state:{
            data:null,//当前登录的用户为空
            isLoading: false, //当前正在登录
            name:''  
    },
    //方法，用来改变satae的值
    mutations:{
        changes(state,newdata){
            state.isLoading = newdata.isLoading
            state.name = newdata.userName
        }
    },
    //处理异步请求
    actions:{
        login(context,newdata){
            const data ={
                isLoading:true,
                name:'哈哈',
                password:'123123'

            }
            if(newdata.password === data.password){
                //固定写法，用这个来执行mutations里面的方法
                localStorage.setItem("loginUser",JSON.stringify(newdata));
                context.commit('changes',newdata)
                router.push('/')
                //额外的操作，保存用户信息到localStorage
                
                
            }else{
                alert('密码错误')
            }
            
           
        }
    }
}