<template>
  <div class="banner" ref="f1">
    <ul class="clearfix">
      <router-link tag="li" v-for="(item) of banner" :key="item.id" :to="'/login'">
        <img :src="`${baseUrl+item.img}`" alt="">
        <div class="text-box">
          <h2>{{ item.describe }}</h2>
          <p>{{ item.title }}</p>
        </div>
      </router-link>
    </ul>
    <div class="null"></div>
    <div class="title">
      <span>更多关于<b>产品的分类</b></span>
      <p>The classification of more products</p>
    </div>
  </div>
</template>

<script>
import Swipe from  '../assets/js/swipe.js';
import $ from 'jquery';

export default {
  props:['banner','dataName'],
  mounted() {
    // new Swipe($('.banner')[0], {
    new Swipe(this.$refs.f1, {
      auto: 2000,
      continuous: true,
      stopPropation: true,
      callback: function(index, element) {
        $(".banner ol li").removeClass("active");
        $(".banner ol li")
          .eq(index)
          .addClass("active");
      }
    });
  }
};
</script>

<style scoped>
/* .content{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem;} */
.banner {
  /* margin-top: 0.6rem; */
  position: relative;
  overflow: hidden;
  z-index: 1;
  border-bottom: .02rem solid #e63710;
}
.banner ul li {
  width:100%;
  float: left;
  position: relative;
}
.banner ul li img {
  width: 6.4rem;
  display: block;
  height: 3.8rem;
  margin: 0 auto;
}
.banner ul li .text-box {
  width: 5.6rem;
  height: 1.24rem;
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  /* margin: 0 auto; */
  margin: 0 0.2rem;
  padding: 0 0.2rem;
}
.text-box h2 {
  font-size: 0.3rem;
  font-weight: normal;
  margin-top: 0.22rem;
  line-height: 100%;
  margin-bottom: 0.22rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.text-box p {
  line-height: 100%;
}

.banner ol {
  position: absolute;
  right: 0.2rem;
  bottom: 0.2rem;
}
.banner ol li {
  width: 0.15rem;
  height: 0.15rem;
  background: #5477b2;
  float: left;
  border-radius: 50%;
  margin-right: 0.08rem;
}
.banner ol li.active {
  background: #fff;
}
.null{width: 6.4rem;
      height: 4rem;}
.title{margin-left:.18rem}
.title span{font: .24rem/2 "";color: #434343;display: block}
.title span b{color: #e63710}
.title p{font: .2rem/2 "";color:#434343;display: block}

</style>
