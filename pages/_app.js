import '../styles/globals.css'
import 'highlight.js/styles/base16/hardcore.css'
import 'hover.css'

import Head from 'next/head';
import { ThemeProvider, createTheme, } from '@mui/system';


const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#5d66ad',
      light: '#7b82bb',
      dark: '#393f6f',
    },
    secondary: {
      main: '#dc3966',
      light: '#e46186',
      dark: '#962846',
    },
    background: {
      default: '#f9fafd',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});


function MyApp({ Component, pageProps }) {
  return (<>
    <ThemeProvider theme={theme}>
      <Head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
  );
}

export default MyApp
