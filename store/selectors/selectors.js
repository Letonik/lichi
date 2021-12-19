export const getProductSelector = (state) => {
    return state.productsReducer.products;
}
export const getBasketSelector = (state) => {
    return state.productsReducer.productsBasket;
}


