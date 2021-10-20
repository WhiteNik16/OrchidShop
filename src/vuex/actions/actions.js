import axios from "axios";

export default {
    SUBMIT_FORM({commit}, newproduct) {
        commit('PUSH_FORM', newproduct)
    },
    ADD_TO_CART({commit}, product) {
        commit('ADD_ITEM_TO_CART', product)
    },
    DELETE_ITEM({commit}, index) {
        commit('DELETE_CART_ITEM', index)
    },

    GET_USER_INFO({commit},jwt){
        return axios('http://localhost:3000/auth/userinfo', { method: "GET",headers: {
                Authorization: "Bearer " + jwt
            }

        })
    .then((userinfo) =>{
            commit('GET_USER_FROM_JWT', userinfo);
            return userinfo;
        })
            .catch((error) =>{
                console.log(error)
                return error;
            })
    },

}