// pages/_app.js
import React from "react";
// import {createStore} from "redux";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";


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

    switch (action.type) {
      case 'ITEMS_FETCH_DATA_SUCCESS':
          console.log("HITTING???")
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

// const reducer = (state = {foo: ''}, action) => {
//     switch (action.type) {
//         case 'FOO':
//             return {...state, foo: action.payload};
//         default:
//             return state
//     }
// };

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/
const makeStore = (initialState, options) => {
    return createStore(reducer, initialState);
};

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {

        // we can dispatch from here too
        ctx.store.dispatch({type: 'FOO', payload: 'foo'});

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return {pageProps};

    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }

}

export default withRedux(makeStore)(MyApp);