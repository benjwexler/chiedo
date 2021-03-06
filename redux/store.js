import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import fetch from 'isomorphic-unfetch'

export function initializeStore (initialState = {}) {
    return createStore(
      reducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
  }

const initialState = {
    caseStudies: undefined,
    featuredPost: undefined
  }
  
  export const actionTypes = {
    FETCH: 'FETCH',
  }

  export  function featuredPostFetchSuccess(data) {

    return  {
        type: 'FEATURED_POST_FETCH_SUCCESS',
        data: data,
    };
}

export  function caseStudiesFetchSuccess(data) {

    return  {
        type: 'CASE_STUDIES_FETCH_SUCCESS',
        data: data,
    };
}

 export const reducer = (state = initialState, action) => {

    switch (action.type) {
      case 'FEATURED_POST_FETCH_SUCCESS':
          return Object.assign({}, state, {
            featuredPost: action.data[0]
          });
    case 'CASE_STUDIES_FETCH_SUCCESS':
          return Object.assign({}, state, {
            caseStudies: action.data
          })
    

      default:
        return state
    } 
  }

  export function fetchData (url, endpoint)  {


    return (dispatch) => {

      return fetch(url)
      .then((response) => response.json())
     .then((items) => {
         if(endpoint === "featuredPost") {
         return dispatch(featuredPostFetchSuccess( items ))
         } else if(endpoint === "caseStudies") {
            return dispatch(caseStudiesFetchSuccess( items ))
            } 

        })
        .catch((error) => console.log(error));

  }
  }






