import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

export function initializeStore (initialState = {}) {
    return createStore(
      reducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
  }

const initialState = {
    data: undefined 
  }
  
  export const actionTypes = {
    FETCH: 'FETCH',
  }

  export  function itemsFetchDataSuccess(data) {

    // console.log(data)
    return  {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        data: data,
    };
}

 export const reducer = (state = initialState, action) => {

    switch (action.type) {
      case 'ITEMS_FETCH_DATA_SUCCESS':
          return Object.assign({}, state, {
            data: action.data[0]
            // data: 27
          })
  

      default:
        return state
    } 
  }

  export function fetchData (url)  {



    return (dispatch) => {

      return fetch(url)
      .then((response) => response.json())
     .then((items) => {dispatch(itemsFetchDataSuccess( items ))})
        .catch((error) => console.log(error));

  }
  }




