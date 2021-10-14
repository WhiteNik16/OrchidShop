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
        // products:[{
        //     name: "Жёлтая орхидея",
        //     price:"350",
        //     image:"1.jpg",
        //     article:"0001",
        // },
        //     {
        //         name:"Красная орхидея",
        //         price:"250",
        //         image:"2.jpg",
        //         article:"0002"
        //     },
        //     {
        //         name:"Фиолетовая орхидея",
        //         price:"320",
        //         image:"3.jpg",
        //         article:"0003"
        //     },
        //     {
        //         name:"Фиолетовая орхидея",
        //         price:"320",
        //         image:"3.jpg",
        //         article:"0004"
        //     },
        //     {
        //         name:"Фиолетовая орхидея",
        //         price:"320",
        //         image:"3.jpg",
        //         article:"0005"
        //     },
        //     {
        //         name:"Фиолетовая орхидея",
        //         price:"320",
        //         image:"3.jpg",
        //         article:"0006"
        //     },
        //     {
        //         name:"Фиолетовая орхидея",
        //         price:"320",
        //         image:"3.jpg",
        //         article:"0007"
        //     },
        //     {
        //         name:"Фиолетовая орхидея",
        //         price:"320",
        //         image:"3.jpg",
        //         article:"0008"
        //     },
        //     {
        //         name:"Фиолетовая орхидея",
        //         price:"320",
        //         image:"3.jpg",
        //         article:"0009"
        //     }]

    },

    mutations,
    actions,
    getters,

});
export default store;