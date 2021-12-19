import * as axios from "axios";


export const productAPI = {
    addToBasket(id) {
        return axios.post(`/api/add`, {id})
    },
    showBasket(reqCookie) {
        return axios.post(`https://lichi-3b39grkx8-letonik.vercel.app/api/list`, {reqCookie},)
    },
    removeBasket(id, all) {
        return axios.post(`/api/remove`, {id, all})
    }
}
