import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class EditorSpendAdd extends React.Component {

    state =  {
      value: 1
    };

    render() {

        return (

            <div>
                <Paper style={{width: "80%", margin: '0 auto'}} zDepth={2} >
                    <Table style={{width: "80%", margin: '0 auto'}}>
                        <TableHeader displaySelectAll={false}
                                     selectable={false}
                                     adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn style={{width: '12%'}}>Type</TableHeaderColumn>
                                <TableHeaderColumn style={{width: '8%'}}>Amount</TableHeaderColumn>
                                <TableHeaderColumn style={{width: '6%'}}>Date</TableHeaderColumn>
                                <TableHeaderColumn style={{width: '20%'}}>Description</TableHeaderColumn>
                                <TableHeaderColumn style={{width: '10%'}}>Category</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow>
                                <TableRowColumn style={{width: '7%'}}>
                                    <SelectField
                                        value={this.state.value}
                                        onChange={this.handleChange}>
                                        <MenuItem value={1} primaryText="Spend"/>
                                        <MenuItem value={2} primaryText="Earn"/>
                                    </SelectField>
                                </TableRowColumn>
                                <TableRowColumn style={{width: '12%'}}>
                                    <TextField
                                        hintText="enter a dollar amount"
                                        name="description"
                                    />
                                </TableRowColumn>
                                <TableRowColumn style={{width: '6%'}}>date</TableRowColumn>
                                <TableRowColumn style={{width: '20%'}}>
                                    <TextField
                                        hintText="please enter description"
                                        name="description"
                                    />
                                </TableRowColumn>
                                <TableRowColumn style={{width: '7%'}}>
                                    <SelectField
                                        value={this.state.value}
                                        onChange={this.handleChange}>
                                        <MenuItem value={1} primaryText="Food"/>
                                        <MenuItem value={2} primaryText="Entertainment"/>
                                        <MenuItem value={2} primaryText="Sport"/>
                                        <MenuItem value={2} primaryText="Alcohol"/>
                                    </SelectField>
                                </TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div style={{padding: "20px 0"}}>
                        <div style={{width: '80%', margin: '0 auto', textAlign: 'right'}}>
                            <RaisedButton label="Save changes"
                                          style={{marginRight: '20px'}}
                                          primary={true}/>
                            <Link to="/editors/spend_earn">Back to earn/spend Editor</Link>
                        </div>
                    </div>
                </Paper>
            </div>

        )
    }
}

EditorSpendAdd.propTypes = {}

export default connect((state, props)=> {
    return {
        item: state.editors[props.match.params["earnSpendId"]]
    }
})(EditorSpendAdd)