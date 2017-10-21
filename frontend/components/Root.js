import React, { Component } from 'react'
import EditorInSpend from './editors/Editor_in_spend'

class Root extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>hello</h1>
                <EditorInSpend/>
            </div>
        )
    }
}

export default Root