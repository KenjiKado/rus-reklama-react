const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const DELETE_ALL = 'DELETE_ALL';

export function addItem (name, price, count, sum) {
    return {
        type: ADD_ITEM,
        item: {
            name: name,
            price: price,
            count: count,
            sum: sum
        }
    }
}
export function removeItem (index) {
    return {
        type: DELETE_ITEM,
        index
    }
}
export function deleteAll () {
    return {
        type: DELETE_ALL
    }
}