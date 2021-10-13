export default {
    PUSH_FORM: (state, newproduct) => {
        state.products.push(newproduct);
    },
    ADD_ITEM_TO_CART: (state, product) => {
        if (state.cart.length) {
            let isProductExists = false;
            state.cart.map(function (item) {
                if (item.article == product.article) {
                    isProductExists = true;
                }
            })
            if (!isProductExists) {
                state.cart.push(product)
            }
        } else {
            state.cart.push(product)
        }
    },
    DELETE_CART_ITEM: (state, index) => {
        state.cart.splice(index, 1)
    },
    DELETE_FROM_CATALOG_ITEM: (state, newproduct) => {

        state.products.splice(newproduct.article, 1)
            },

    ADD_USER_JWT: (state, jwt) =>{
        state.jwt=jwt
    },



}