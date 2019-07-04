import axios from 'axios';
import {
    VIEW_NAV,
    // VIEW_LOADING,
    UPDATE_PRODUCT,
    UPDATE_GOODS,
    UPDATE_BANNER,
    // VIEW_USER,
    // VIEW_DETAIL,
} from './types'

export default {
    [VIEW_NAV] : ({state,commit},payload) => commit(VIEW_NAV,payload),
    // [VIEW_LOADING] : ({state,commit},payload) => commit(VIEW_LOADING,payload),

    [UPDATE_PRODUCT] : async ({state,commit},payload) => {
        let res = await axios({url:'/api/product',params:{_page:1,_limit:6}});
        commit(UPDATE_PRODUCT,res.data.data)
    },
    [UPDATE_GOODS] : async ({state,commit},payload) => {
        let res = await axios({url:'/api/goods',params:{_page:1,_limit:6}});
        commit(UPDATE_GOODS,res.data.data)
    },
    [UPDATE_BANNER] : async ({state,commit},payload) => {
        let res = await axios({url:'/api/banner',params:{_page:1,_limit:2}});
        commit(UPDATE_BANNER,res.data.data)
    },
    // [UPDATE_USER] : async ({state,commit},payload) => {
    //     let res = await axios({url:'/api/user',params:{_page:1,_limit:6}});
    //     commit(VIEW_USER,res.data.data)
    // }
    // ,[VIEW_DETAIL] : async ({state,commit},payload) => {
    //     let res = await axios({url:'/api/${dataname}/${id}'}});
    //     commit(VIEW_DETAIL,res.data.data)
    // }
}