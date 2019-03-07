// pages/_app.js
import React from "react";
import { createStore, applyMiddleware } from 'redux';
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import thunk from 'redux-thunk';
import {reducer, fetchData, itemsFetchDataSuccess} from '../redux/store.js';

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

const initialState = {
    data: 0
}
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/
const makeStore = (initialState = {data: undefined}, options) => {
    return createStore(reducer, initialState, applyMiddleware(thunk));
};

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {

        // we can dispatch from here too
        // ctx.store.dispatch({type: 'FOO', payload: 'foo'});
        console.log("TESTS")

    //    console.log(ctx.store)
    //    let data = ctx.store.dispatch(fetchData("https://beta.chiedo.com/wp-json/wp/v2/posts?orderby=date&&per_page=1"))
       

    //    return {57: "Weathds"}

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

// MyApp.getInitialProps = async ({Component, ctx}) => {
//     let data = await ctx.store.dispatch(fetchData("https://beta.chiedo.com/wp-json/wp/v2/posts?orderby=date&&per_page=1"))

// return {12: 12}
// static async getInitialProps = ({store, isServer, pathname, query} ) => {

  // console.log(store)

  // console.log(process.browser) //If false request is from server

   



export default withRedux(makeStore)(MyApp);