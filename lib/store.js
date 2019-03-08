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

    console.log("test")
    return  {
        type: 'CASE_STUDIES_FETCH_SUCCESS',
        data: data,
    };
}

 export const reducer = (state = initialState, action) => {

    console.log(action.type)

    switch (action.type) {
      case 'FEATURED_POST_FETCH_SUCCESS':
          return Object.assign({}, state, {
            featuredPost: action.data[0]
            // data: 27
          });
    case 'CASE_STUDIES_FETCH_SUCCESS':
      console.log("blahblah")
          return Object.assign({}, state, {
            caseStudies: action.data
            // data: 27
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
         console.log(endpoint)
         if(endpoint === "featuredPost") {
         return dispatch(featuredPostFetchSuccess( items ))
         } else if(endpoint === "caseStudies") {
            return dispatch(caseStudiesFetchSuccess( items ))
            } 


        })
        .catch((error) => console.log(error));

  }
  }

//   export function fetchData2 (url)  {



//     return (dispatch) => {

//       return fetch(url)
//       .then((response) => response.json())
//      .then((items) => {
//          dispatch(itemsFetchDataSuccess2( items ))
//         })
//         .catch((error) => console.log(error));

//   }
//   }




