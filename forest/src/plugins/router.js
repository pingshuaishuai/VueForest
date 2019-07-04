import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import home from '../pages/home.vue';
import Menu from '../pages/Menu.vue';
import goods from '../pages/goods.vue';
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';
import user from '../pages/user.vue';



let routes = [
    {path:'/home',component:home},
    {path:'/Menu',component:Menu},
    {path:'/goods',component:goods},
    {path:'/Login',component:Login},
    {path:'/Reg',component:Reg},
    {path:'/user',component:user},



    {path:'/',redirect:'/home'}
]

let router = new VueRouter({
    routes
})

export default router;
