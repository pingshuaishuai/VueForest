<template>
        <div id="home">
                <!-- <Header></Header> -->
                <Search></Search>
                <Swiper :banner="$store.state.banner" :dataName="'banner'"></Swiper>
                <List :list="$store.state.product" :dataName="'list'"></List>
                <!-- <Swiper></Swiper> -->
                <!-- <List></List> -->
        </div>
</template>

<script>

//   import Header from '../components/Header';
  import Search from '../components/Search.vue';
  import Swiper from '../components/Swiper';
  import List from '../components/List';

  import * as types from '../store/types.js'

export default {
//        data(){
//                 return {
//                         banner:[],
//                         list:[]
//                 }
//         },
        components:{
//                 Header,
                Search
                ,Swiper
                ,List
        },
        mounted(){
                this.$store.dispatch(types.UPDATE_BANNER)
                this.$store.dispatch(types.UPDATE_PRODUCT)

                // axios({
                //         url:'/api/banner',
                //         parmas:{_page:1,_limit:2}
                // }).then(
                //         res=>this.banner = res.data.data
                //         // res=>console.log(res.data)
                // ),
                // axios({
                //         parmas:{_page:1,_limit:6},
                //         url:'/api/product'
                // }).then(
                //         res=>this.list = res.data.data

                // )
        }
}
</script>



