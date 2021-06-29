
let init = false;

export default (state = init, action) => {
    let { type, payload } = action;

    switch (type) {
        case "MENUTOGGLE":
            let flag = !state
            return flag;

        default:
            return state;
    }
}

export const toggle = () => {
    return {
        type: 'MENUTOGGLE'
    }
}