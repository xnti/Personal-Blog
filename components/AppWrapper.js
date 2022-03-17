import { ThemeProvider } from '@mui/system';
// Redux
import { connect } from 'react-redux';
import { DarkTheme, LightTheme } from '../functions/themeHandler'


const AppWrapper = ({children , aLightTheme}) => {
    return (
        <ThemeProvider theme={aLightTheme ? LightTheme : DarkTheme}>
            {children}
        </ThemeProvider>
    );
}



const mapStateToProps = (state) => {
    return {
        aLightTheme: state.LightTheme,
    }
}

export default connect(mapStateToProps, {})(AppWrapper);
