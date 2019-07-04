<template>
  <div id="app">
    <Header v-show="bNav"></Header>

    <!-- <Header v-show="$root.$data.bNav"></Header> -->

    <!-- <Search></Search> -->
    <!-- <home></home>
    <Menu></Menu> -->
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header'
  // import Search from './components/Search';

  // import home from './pages/home'
  // import Menu from './pages/Menu'

  import {mapGetters} from 'vuex'
  import * as types from './store/types.js'

  export default {
    name:'app',
    components:{
      Header
    },
    watch:{
      $route:{
        handler(to){
          let path = to.path;

          if(/goods|user|menu|home/.test(path)){
            // this.$root.$data.bNav = true;
            this.$store.dispatch(types.VIEW_NAV,true)
          }
          if(/login|reg/.test(path)){
          // this.$root.$data.bNav=false;
            this.$store.dispatch(types.VIEW_NAV,false)
          

          // this.$root.$data.bFoot=false;
          }
        },
        immediate:true
      }
    },
    computed:mapGetters([
      'bNav'
    ])
  }
</script>
<style scoped>
  #app{background: #fff;height: 100%;width:6.4rem;}
</style>
