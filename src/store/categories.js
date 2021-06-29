/* eslint-disable import/no-anonymous-default-export */
let initialState = {
    categories: ['FOOD', 'ELECTRONICS'],
    active: ''
}

//reducer 
export default (state = initialState, action) => {
    let { type, payload } = action;
    let { categories, active } = state;
    switch (type) {
        case 'SHOW':
            return { categories, active: payload }
        case 'GET':
            let arr = categories;
            payload.forEach(element => {
                let text = element.category.toUpperCase()
                if (!categories.includes(text)) arr.push(text)
            });
            return { categories: arr, active }
        default:
            return { categories, active };
    }

}

// action 
export const choose = (name) => {

    return {
        payload: name,
        type: 'SHOW'
    }
}