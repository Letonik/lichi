import * as axios from "axios";
import cookie from 'cookie';
const $instance = axios.create({
    baseURL: `https://lichi.com/api/`,
});
export const send = async (reqCookies, res, url, params = {}) => {
    if (reqCookies.SID) {
        let config = {
            headers: {
                cookie: `SID=${reqCookies.SID}`
            }
        }
        const data = await $instance.post(url, {lang: 1, shop: 1, ...params}, config)
        return {data, response:res}
    } else {
        const data = await $instance.post(url, {lang: 1, shop: 1, ...params})
        const sid = data.headers['set-cookie'][0].split(';')[0].slice(4);
        res.setHeader(
            "Set-Cookie",
            cookie.serialize("SID", sid, {
                maxAge: 60 * 60,
                path: "*",
            }));
        return {data, response:res}
    }
}