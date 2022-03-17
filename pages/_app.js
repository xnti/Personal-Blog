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
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </Provider>
  </>
  );
}

export default MyApp;