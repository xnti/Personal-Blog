import { createTheme } from "@mui/system"


const LightTheme = createTheme({
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

const DarkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#8795ff',
            light: '#7383ff',
            dark: '#b7c0fb',
            contrastText: 'rgba(255,255,255,0.87)',
        },
        secondary: {
            main: '#fd356c',
            light: '#f97a9d',
            dark: '#751a32',
        },
        background: {
            default: '#353434',
            paper: '#464646',
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

export { LightTheme, DarkTheme };