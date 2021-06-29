/* eslint-disable import/no-anonymous-default-export */
let food = [{
    name: 'Apples',
    description: 'fruit',
    price: 5,
    category: 'FOOD',
    inventoryCount: 5,
    src: 'https://source.unsplash.com/random?Apples',
    cartCount: 0
}, {
    name: 'Calzones',
    description: 'Fast Food',
    price: 20,
    category: 'FOOD',
    inventoryCount: 30,
    src: 'https://source.unsplash.com/random?Calzones',
    cartCount: 0

}]


let elec = [{
    name: 'Keyboard',
    description: 'Mechanical',
    price: 20,
    category: 'ELECTRONICS',
    inventoryCount: 30,
    src: 'https://source.unsplash.com/random?Keyboard',
    cartCount: 0

},
{
    name: 'Monitor',
    description: 'Monitor',
    price: 250,
    category: 'ELECTRONICS',
    inventoryCount: 10,
    src: 'https://source.unsplash.com/random?Monitor',
    cartCount: 0

},
{
    name: 'Mouse',
    description: 'Red Dragon',
    price: 20,
    category: 'ELECTRONICS',
    inventoryCount: 5,
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
    let { products,show, active } = state;

    switch (type) {
        case 'SHOW':
            let showz = products.filter(item => {
                return item.category === payload && item.inventoryCount > 0;
            })
            return { products, show:showz, active: payload };
        case 'ADD':
            let added = products.map((data) => {
                if(data.name===payload.name){
                    data.inventoryCount--;
                }
                return data;
            });
            let dShow = show.filter((item) => item.inventoryCount > 0);
            return { products: added, show: dShow, active };
        case "DELETE":
            let newProd = products.map(el => {
                if (el.name === payload.name) {
                    let inv = initialState.products.filter(x => x.name === payload.name)
                    console.log('asdasdasd', inv);
                    el.inventoryCount++
                }
                return el;
            })
            let showw3 = newProd.filter(item => {
                return item.category === active && item.inventoryCount > 0;
            })
            return { products: [...newProd], show: showw3, active }
        default:
            return state;
    }
}