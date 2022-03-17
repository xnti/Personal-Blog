import '../styles/globals.css'
import 'highlight.js/styles/base16/hardcore.css'
import 'hover.css'

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
// Reducer
import Reducer from '../redux/reducers/index'

import AppWrapper from '../components/AppWrapper';



const store = createStore(Reducer, applyMiddleware(thunk));


function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <>
      <Provider store={store}>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </Provider>
    </>
  );
}

export default MyApp