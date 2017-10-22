import React, { Component } from 'react'
import EditorPages from './routes/EditorPage'
import {Route, Link} from 'react-router-dom'

class Root extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/editors">List Editors</Link></li>
                </ul>
                <hr/>
                <Route path="/editors" component={EditorPages}/>
            </div>
        )
    }
}

export default Root