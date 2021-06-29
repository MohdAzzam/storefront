/* eslint-disable import/no-anonymous-default-export */
let init = []

export default (state = init, action) => {
    let { type, payload } = action;

    switch (type) {
        case "ADD":
            let checked = false;
            state.forEach(x => {
                if (x.name === payload.name) {
                    checked = true;
                }
            })
            if (checked) {
                return state.map(el => {
                    if (el.name === payload.name) {
                        el.quantity += 1
                    }
                    return el
                })
            }
            console.log('out checked');
            let arr = [...state, { ...payload, quantity: 1 }]
            return arr;
        case "DELETE":
            let ids = false;
            let newState = state.map(el => {
                
                if (el.name === payload.name) {
                    el.quantity--
                    if (el.quantity === 0) {
                        ids = true;
                    }
                }
                return el;
            })
            if (ids) {
                return state.filter(ele => ele.name !== payload.name)
            }
            console.log('---', payload.quantity);
            return newState;

        default:
            return state;
    }
}

export const add = (payload) => {
    return {
        type: 'ADD',
        payload
    }
}

export const remove = (payload) => {
    return {
        type: 'DELETE',
        payload
    }
}