import React, {Component} from 'react'
import Root from './components/Root'
import store from './redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import './config'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <MuiThemeProvider>
                        <Root/>
                    </MuiThemeProvider>
                </Router>
            </Provider>
        )
    }
}

export default App
