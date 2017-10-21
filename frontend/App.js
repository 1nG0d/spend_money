import React, {Component} from 'react'
import Root from './components/Root'
import store from './redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux'
import './config'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    <Root/>
                </MuiThemeProvider>
            </Provider>
        )
    }
}

export default App
