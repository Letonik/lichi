export const reduceAmountProduct = (arr, id, all) => {
    return arr.map(p => {
        if (p.item_id === id) {
            if (all) {
                return {...p, count: 0}
            }
            return {...p, count: p.count - 1}
        }
        return p;
    })
}
export const increaseAmountProduct = (arr, id) => {
    return arr.map(p => {
        if (p.item_id === id) {
            return {...p, count: +p.count + 1}
        }
        return p;
    })
}