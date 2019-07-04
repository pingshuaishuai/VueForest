import * as types from './types';
export default {
    [types.VIEW_NAV] : (state,payload) => state.bNav = payload,
    // [types.VIEW_LOADING] : (state,payload) => state.bloading = payload,

    [types.UPDATE_PRODUCT] : (state,payload) => state.product = payload,
    [types.UPDATE_GOODS] : (state,payload) => state.goods = payload,
    [types.UPDATE_BANNER] : (state,payload) => state.banner = payload,
    [types.UPDATE_USER] : (state,payload) => state.user = payload,
    // [types.VIEW_DETAIL] : (state,payload) => state.detail = payload,

}