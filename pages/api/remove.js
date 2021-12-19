import {send} from "../../sendMiddleware/sendMiddleware";

async function handler(req, res) {
    const {id, all} = req.body
    const {data, response} = await send(req.cookies, res, `cart/remove`, {id, all})
    console.log(data)
    response.status(200).json(data.statusText)
}

export default handler