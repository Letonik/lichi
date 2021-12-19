import * as axios from "axios";


export const productAPI = {
    addToBasket(id) {
        return axios.post(`/api/add`, {id})
    },
    showBasket(reqCookie) {
        return axios.post(`http://localhost:3000/api/list`, {reqCookie},)
    },
    removeBasket(id, all) {
        return axios.post(`/api/remove`, {id, all})
    }
}
