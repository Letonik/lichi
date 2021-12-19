import {send} from "../../sendMiddleware/sendMiddleware";

async function handler(req, res) {
    const {reqCookie} = req.body
    const {data, response} = await send(reqCookie, res, `cart/list`)
    response.status(200).json(data.data.api_data.aData)
}

export default handler