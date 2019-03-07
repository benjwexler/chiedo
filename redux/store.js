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

    console.log(data)
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        data: data,
    };
}

 export const reducer = (state = initialState, action) => {

  // console.log(state)
  // console.log(action.type)
  // console.log(action.data)
  console.log(state)
  console.log("Blddd")
    switch (action.type) {
      case 'ITEMS_FETCH_DATA_SUCCESS':
          console.log("HITTING???")

          // console.log(action.type)
      // if (state === 'undefined') {
      //   state = 0 // If state is undefined, initialize it with a default value
      //   return state 

       
      // }
          console.log(action.data[0]);
          return Object.assign({}, state, {
            data: action.data[0]
          })
  

      default:
        return state
    } 
  }

  export function fetchData (url)  {



    return (dispatch) => {

      console.log("blah")

      fetch(url)
      .then((response) => response.json())
     .then((items) => {return dispatch(itemsFetchDataSuccess( items ))})
        .catch((error) => console.log(error));
        // const caseStudies = await caseStudiesRes.json();

        // dispatch(itemsFetchDataSuccess({ type: 'ITEMS_FETCH_DATA_SUCCESS', caseStudiesRes }))
    
  }
  }

//   export default function configureStore() {
//     return createStore(
//         reducer,

//         applyMiddleware(thunk)
//     );

// }
  