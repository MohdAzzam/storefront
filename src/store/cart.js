let initalState = {
    cart:[]
};


export default (state = initalState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'ADD':
            console.log('inside app');
            console.log(state);
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

export const deleteOne = (payload) => {
    return {
        type: 'DELETE',
        payload
    }
}