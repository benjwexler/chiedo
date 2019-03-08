// pages/_app.js
import React from "react";
// import {createStore} from "redux";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import withReduxStore from '../lib/with-redux-store'


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './reducers/index';
import fetch from "isomorphic-unfetch";

import{initializeStore} from '../lib/store'

// let makeStore = getOrCreateStore()
  
  const initialState = {
    data: undefined 
  }
  
  export const actionTypes = {
    FETCH: 'FETCH',
  }

  export function itemsFetchDataSuccess(data) {

    // console.log(data)
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        data: data,
    };
}

 export const reducer = (state = initialState, action) => {

    switch (action.type) {
      case 'ITEMS_FETCH_DATA_SUCCESS':
      console.log("bye hello")
      console.log(action)
          return Object.assign({}, state, {
              data: action.data[0]
            // data:  {27: "weatjer"}
          })
  

      default:
        return state
    } 
  }

  export function fetchData (url)  {



    return (dispatch) => {

      fetch(url)
      .then((response) => response.json())
     .then((items) => {dispatch(itemsFetchDataSuccess( items ))})
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
// const makeStore = (initialState, options) => {
//     return createStore(reducer, initialState, applyMiddleware(thunk));
// };

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {



        //  await ctx.store.dispatch(fetchData("https://labs.chiedo.com/wp-json/wp/v2/case-studies?_embed"))
    
        //  let x =  await ctx.store.dispatch(fetchData("https://labs.chiedo.com/wp-json/wp/v2/posts?orderby=date&&per_page=1"))

       
            
            // let data = ctx.store.dispatch(fetchData("https://labs.chiedo.com/wp-json/wp/v2/posts?orderby=date&&per_page=1"))
            //   return data 
            
        // const foo = async () => {
        //     await ctx.store.dispatch(fetchData("https://labs.chiedo.com/wp-json/wp/v2/case-studies?_embed"))
        //   }

        // MyApp.getInitialProps(data)
        // let blah = await foo

        // let datas = Promise.all(data)

        //     datas.then(function(response){
        //         console.log(response)
        //         return response 
        //     })
            

            // return {datas}

      
        
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



export default withRedux(initializeStore)(MyApp); 
//   withRedux(makeStore)(MyApp);