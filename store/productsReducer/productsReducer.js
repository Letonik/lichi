import {productAPI} from "../../apiClient/api";
import {increaseAmountProduct, reduceAmountProduct} from "../utils/utils";

const ADD_PRODUCT = "ADD_PRODUCT";
const FILL_BASKET = "FILL_BASKET";
const REDUCE_BASKET = "REDUCE_BASKET";
const INCREASE_BASKET = "INCREASE_BASKET";

let initialState = {
    products:[88250, 88248, 88249, 88247],
    productsBasket: []
};

const productsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: state.products.filter(p => p !== action.id),
            }
        case FILL_BASKET:
            return {
                ...state,
                productsBasket: action.productsBasket,
            }
        case REDUCE_BASKET:
            return {
                ...state,
                productsBasket: reduceAmountProduct(state.productsBasket, action.id, action.all)
            }
        case INCREASE_BASKET:
            return {
                ...state,
                productsBasket: increaseAmountProduct(state.productsBasket, action.id)
            }
        default:
            return state;
    }
}
export const setBasket = (id) => ({type: ADD_PRODUCT, id});
export const fillBasket = (productsBasket) => ({type: FILL_BASKET, productsBasket});
export const reduce = (id, all) => ({type: REDUCE_BASKET, id, all});
export const increase = (id) => ({type: INCREASE_BASKET, id});

export const addToBasket = (id) => {
    return async (dispatch) => {
        try {
            await productAPI.addToBasket(id)
            dispatch(setBasket(id));
        } catch (e) {
            console.log(e)
        }
    }
}
export const showBasket = (reqCookie) => {
    return async (dispatch) => {
        try {
            let productsBasket = await productAPI.showBasket(reqCookie);
            console.log(productsBasket.data)
            dispatch(fillBasket(productsBasket.data));
        } catch (e) {
            console.log(e)
        }
    }
}
export const reduceBasket = (id, all) => {
    return async (dispatch) => {
        try {
            await productAPI.removeBasket(id, all);
            dispatch(reduce(id, all));
        } catch (e) {
            console.log(e)
        }
    }
}
export const increaseBasket = (id) => {
    return async (dispatch) => {
        try {
            await productAPI.addToBasket(id);
            dispatch(increase(id));
        } catch (e) {
            console.log(e)
        }
    }
}

export default productsReducer;
