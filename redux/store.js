import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './reducers/index';
import fetch from "isomorphic-unfetch";
  
  const initialState = {
    data: undefined 
  }
  
  export const actionTypes = {
    FETCH: 'FETCH',
  }

  export function itemsFetchDataSuccess(data) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        data: data,
    };
}

  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ITEMS_FETCH_DATA_SUCCESS':

      console.log("wow")
      console.log(action.data)
      // return {}
      // return action.data

        return Object.assign({}, state, {
          data: action.data
        })
      default:
        return state
    } 
  }

  export function fetchData (url)  {

    console.log("blah")

    return async (dispatch) => {

      const caseStudiesRes = await fetch(
          url
        );
        const caseStudies = await caseStudiesRes.json();

        // return caseStudies

        return dispatch(itemsFetchDataSuccess({ type: 'ITEMS_FETCH_DATA_SUCCESS', caseStudies }))

        // return {}

        // console.log(caseStudies)
      // fetch(
      //   "https://beta.chiedo.com/wp-json/wp/v2/case-studies?_embed"
      // ).then(data => {
      //   console.log("wtf")
      //   console.log(data)
      //   return data 
      //   dispatch(itemsFetchDataSuccess({ type: 'ITEMS_FETCH_DATA_SUCCESS', data }))
      // })
    
  };
  }

  export default function configureStore(initialState) {
    return createStore(
        reducer,
        initialState,
        applyMiddleware(thunk)
    );
}
  