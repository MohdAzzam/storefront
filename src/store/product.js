/* eslint-disable import/no-anonymous-default-export */
let food = [{
    item: 'Apples',
    description: 'fruit',
    price: 5,
    category: 'FOOD',
    inventory: 5,
    src: 'https://source.unsplash.com/random?Apples',
    cartCount: 0
}, {
    item: 'Calzones',
    description: 'Fast Food',
    price: 20,
    category: 'FOOD',
    inventory: 30,
    src: 'https://source.unsplash.com/random?Calzones',
    cartCount: 0

}]


let elec = [{
    item: 'Keyboard',
    description: 'Mechanical',
    price: 20,
    category: 'ELECTRONICS',
    inventory: 30,
    src: 'https://source.unsplash.com/random?Keyboard',
    cartCount: 0

},
{
    item: 'Monitor',
    description: 'Monitor',
    price: 250,
    category: 'ELECTRONICS',
    inventory: 10,
    src: 'https://source.unsplash.com/random?Monitor',
    cartCount: 0

},
{
    item: 'Mouse',
    description: 'Red Dragon',
    price: 20,
    category: 'ELECTRONICS',
    inventory: 5,
    src: 'https://source.unsplash.com/random?Mouse',
    cartCount: 0

}]


let initialState = {
    products: [...food, ...elec],
    show: [...food],
    active: 'FOOD'
}


export default (state = initialState, action) => {
    let { type, payload } = action;
    let { products, show, active } = state;

    switch (type) {
        case 'SHOW':
            console.log('show' ,products)
            let showz = products.filter(item => {
                return item.category.toUpperCase() === payload && item.inventory > 0;
            })
            return { products, show: showz, active: payload };
        case 'ADD':
            let added = products.map((data) => {
                if (data.item === payload.item || payload.item) {
                    data.inventory--;
                }
                return data;
            });
            let dShow = show.filter((item) => item.inventory > 0);
            return { products: added, show: dShow, active };
        case "DELETE":
            let newProd = products.map(el => {
                if (el.item === payload.item) {
                    let inv = initialState.products.filter(x => x._id === payload._id)
                    console.log('asdasdasd', inv);
                    el.inventory++
                }
                return el;
            })
            let showw3 = newProd.filter(item => {
                return item.category === active && item.inventory > 0;
            })
            return { products: [...newProd], show: showw3, active }
        case 'GET':
            let arr = [...products, ...payload]
            console.log('here')
            console.log(arr);
            return {
                products: arr,
                show,
                active
            }
        case 'PUT':
            let arr2 = products.map(el => {
                if (el.item === payload.item) {
                    return { ...el, ...payload }
                }
                return el;
            })
            return { products: arr2, show, active }
        default:
            return state;
    }
}