import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations/mutations";
import getters from "./getters/getters";

import actionsOne from "./actions/actions";
import apiRequests from "./actions/api-products"

const actions = {...actionsOne, ...apiRequests}

Vue.use(Vuex);



let store = new Vuex.Store( {
    state: {

        cart:[],
        products:[],
        auth:'',
        userinfo:{},

    },

    mutations,
    actions,
    getters,

});
export default store;