<template>
<div id="Goods">
    <!-- <Header></Header> -->
    <Search></Search>
    <div class="main">
        <h3>All Lin deputy goods</h3>
        <h4>全部商品</h4>
        <ul>
            <router-link tag="li" v-for="(item) of goods" :key="item.id" to="/Login">
                <img :src="`${baseUrl+item.img}`" alt="">
                <p>{{ item.name }}</p>
                <span>￥{{ item.price }}</span>
                <input type="button" value="立即购买">
            </router-link>
        </ul>
    </div>
</div>
</template>

<script>
import Header from '../components/Header';
import Search from '../components/Search'

export default {
    data(){
        return{
            goods:[]
        }
    },
    components:{
        Header,Search
    },
    mounted(){
        axios({
            url:'/api/goods',
            pramas:{_page:1,_limit:10}
        }).then(
            res=>this.goods=res.data.data
        )
    }
}
</script>

<style scoped>
    html,body{width:100%;height: 100%;background: #fff}
    .main{width: 5.9rem;height: 100%;background: #f5f5f5;padding-left: .5rem;}
    .main h3{font: .24rem/.54rem "";color: #434343;}
    .main h4{font: .12rem/2 "";color: #737373;margin-bottom: .2rem}
    /* .main ul{} */
    .main ul li{width:5.2rem;height: 4.8rem;background: #fff;margin-bottom: .5rem}
    .main ul li img{width:3rem;margin: 0 auto;display: block}
    .main ul li p{font: .18rem/2 "";color: #797979;padding-left: .5rem;margin-top: .5rem}
    .main ul li span{font: .22rem/2 "";color: #434343;padding-left: .5rem;display: block}
    .main ul li input{width: 1.4rem;height: .5rem;border-radius: .18rem;font: .14rem/.5rem "";background: #e63710;color: #fff;margin-left: .5rem;margin-top: .1rem}

</style>


