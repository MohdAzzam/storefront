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