const cartContent = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : {items: [], total: 0, count: 0}

function reducer (cart = cartContent, action){
    switch (action.type) {
        case 'ADD_ITEM':{
            return addItem(cart, action);
        }
        case 'DELETE_ITEM':{
            return deleteElement(cart, action);
        }
        case 'DELETE_ALL': {
            return deleteAll(cart);
        }
        default:
            return cart;
    }
}
var total, counter;

function cartResult(items) {
    const arraySum = items.map(item => {return item.count});
    const arrayTotal = items.map(item => {return item.sum});
    total = (arrayTotal.length > 0) ? arrayTotal.reduce((previousValue, currentValue) => {return previousValue + currentValue;}) : 0;
    counter = (arraySum.length > 0) ? arraySum.reduce((previousValue, currentValue) => {return previousValue + currentValue;}) : 0;
}
function addItem(cart, action) {
    const item = action.item;
    const sum = Number(item.count)*Number(item.price.replace(/\s/g, ''));
    const newElement = {...item, sum: sum}
    const items = [...cart.items, newElement];
    cartResult(items);
    const changeCart = {
        items: items,
        total: total,
        count: counter
    }
    localStorage.setItem('cart', JSON.stringify(changeCart));
    return changeCart;
}
function deleteElement(cart, action) {
    const id = action.index;
    var items = cart.items;
    items.splice(id, 1);
    cartResult(items)
    const changeCart = {
        items: items,
        total: total,
        count: counter
    }
    localStorage.setItem('cart', JSON.stringify(changeCart));
    return changeCart;
}
function deleteAll() {
    localStorage.removeItem('cart');
    return {
        items: [],
        total: 0,
        count: 0
    };
}

export default reducer;