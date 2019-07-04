<template>
  <div id="User">
    <h3>个人中心</h3>
    <img src="../assets/images/user1.jpeg" alt="" class="tou">
    <div class="do">
        <span to="/Car">我的购物车</span>
        <span>|</span>
        <span to="/Logout"  @click="logout">注销</span>
    </div>


  </div>
</template>
<script>
export default {
  data(){
    return {
      user:{}
    }
  },
  methods:{
    logout(){
      axios({
        url:'/api/logout',
        method:'put'
      }).then(
        res=>{
          if(res.data.err===0){
            this.$router.push('/login')
          }
        }
      )
    }
  },
  beforeRouteEnter(to,from,next){
    console.log('user beforeRouteEnter')
    axios({
      url:'/api/user'
    }).then(
      res=>{
        if(res.data.err===1){
          console.log(res.data)
          next('/login')
        }else{
          console.log(res.data)
          next((_this)=>{_this.data=res.data.data})
        }
      }
    )
  }
}
</script>

<style scoped>
    #User{width: 6.4rem;height: 8rem;text-align: center}
    #User h3{font:700 .4rem/2 "";}
    #User .tou{width: 2rem;height: 2rem;border-radius: 50%;margin: 0 auto;margin: 1rem 0}
    #User .do{display: flex;justify-content: center}
    #User .do span{font: .3rem/2 "";margin: 0 .2rem}
</style>

