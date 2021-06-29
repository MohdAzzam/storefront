import superAgent from "superagent";

const API_URI = 'https://api-server-0.herokuapp.com/products';

export const getRemoteData =()=>(dispatch,state)=>{
    return superAgent.get(API_URI)
    .then(response=>{
        dispatch(getAction(response.body));
    })
    .catch(e=>console.log(e));
}

export const putRemoteData = () => (dispatch, state) => {
    // 1- get the remote data with superagent
    // 2- then dispatch an action with the response after we get it.
   return superAgent.put(API_URI).send({inventory: state.inventory++})
   .then(res=> {
        dispatch(putAction(res.body));
    });
}
export const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}

export const putAction = payload => {
    return {
        type: 'PUT',
        payload: payload
    }
}