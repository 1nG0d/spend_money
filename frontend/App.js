import React, {Component} from 'react'
import Root from './components/Root'
// import store from './redux'
import {Provider} from 'react-redux'
import './config'

class App extends Component {
    render() {
        return (
            <Root/>
        )
    }
}

export default App
