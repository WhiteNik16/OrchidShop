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
    DELETE_ITEM_FROM_CATALOG({commit,newproduct}){
        commit('DELETE_FROM_CATALOG_ITEM',newproduct)
},
    ADD_JWT({commit},jwt){
        commit('ADD_USER_JWT',jwt)
    }
}