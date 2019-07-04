<template>
    <div id="Menu">
        <router-link tag="a" to="/home" ><img src="../assets/images/X.png" alt="" class="X"></router-link>
        <ul>
            <router-link tag="li" to="/home"><a href="javascript:;">首页</a></router-link>
            <router-link tag="li" to="/goods"><a href="javascript:;">全部</a></router-link>
            <li><a href="#">干果</a></li>
            <li><a href="#">野菜</a></li>
            <router-link tag="li" to="/user"><a href="javascript:;">个人中心</a></router-link>
            <!-- <li><a href="#">个人中心</a></li> -->
        </ul>
    </div>
</template>

<style scoped>
    #Menu{width:6.4rem;height: 100%;background: #2e2e2e;}
    #Menu .X{padding: .4rem 0;width: .2rem;display: block;margin: 0 auto}
    #Menu ul{height: 100%;padding: 0 .5rem}
    #Menu ul li{height: 100%;padding: 0 .6rem;border-bottom: .01rem solid #585858;text-align: center;}
    #Menu ul li a{font: .3rem/.8rem "";color: #fff;display: block}
</style>

