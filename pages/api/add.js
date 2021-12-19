import {send} from "../../sendMiddleware/sendMiddleware";

async function handler(req, res) {
    const {id} = req.body
    const {data, response} = await send(req.cookies, res, `cart/add`, {id})
    response.status(200).json(data.statusText)
}

export default handler