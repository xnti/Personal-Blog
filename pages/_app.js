import '../styles/globals.css'
import 'highlight.js/styles/base16/hardcore.css'
import 'hover.css'

import Head from 'next/head';
// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
// Reducer
import Reducer from '../redux/reducers/index'



const store = createStore(Reducer, applyMiddleware(thunk));


function MyApp({ Component, pageProps }) {
  return (<>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
  );
}

export default MyApp;