import React from 'react'
import {Route, Link} from 'react-router-dom'
import Editor_in_spend from '../editors/EditorEarnSpend'
import Editor_Category from '../editors/EditorCategory'


export default class EditorRoute extends React.Component {

    getList() {
        return (
            <div>
                <ul>
                    <li><Link to="/editors/spend_earn" >spend/earn Editor</Link></li>
                    <li><Link to="/editors/category" >category Editor</Link></li>
                </ul>
                <hr/>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.match.isExact ? this.getList() : null}
                <Route path="/editors/spend_earn" component={Editor_in_spend}/>
                <Route path="/editors/category" component={Editor_Category}/>
            </div>
        )
    }
}

EditorRoute.propTypes = {

}