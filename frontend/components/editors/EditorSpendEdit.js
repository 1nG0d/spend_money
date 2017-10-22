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

class EditorSpendEdit extends React.Component {

    state =  {
        typeValue: this.props.item.type,
        amountValue: this.props.item.amount,
        descriptionValue: this.props.item.description,
        categoryValue: this.props.item.category
    };

    handleSelector = (nameSelector) =>(event, key, value) => {
            this.setState({
                [nameSelector]: value
            })
    };

    handleText = (nameSelector) =>(event, value) => {
        this.setState({
            [nameSelector]: value
        })
    };


    render() {

        return (

            <div>
                <Paper style={{width: "80%", margin: '30px auto', padding: '20px'}} zDepth={2} >
                    <Table selectable={false}>
                        <TableHeader displaySelectAll={false}
                                     selectable={false}
                                     adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn style={{width: '7%'}}>Type</TableHeaderColumn>
                                <TableHeaderColumn style={{width: '12%'}}>Amount</TableHeaderColumn>
                                <TableHeaderColumn style={{width: '6%'}}>Date</TableHeaderColumn>
                                <TableHeaderColumn style={{width: '25%'}}>Description</TableHeaderColumn>
                                <TableHeaderColumn style={{width: '7%'}}>Category</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow>
                                <TableRowColumn style={{width: '7%'}}>
                                    <SelectField
                                        value={this.state.typeValue}
                                        name="type"
                                        onChange={this.handleSelector('typeValue')}>
                                        <MenuItem value="spend" primaryText="Spend"/>
                                        <MenuItem value="earn" primaryText="Earn"/>
                                    </SelectField>
                                </TableRowColumn>
                                <TableRowColumn style={{width: '12%'}}>
                                    <TextField
                                        onChange={this.handleText('amountValue')}
                                        value={this.state.amountValue}
                                        hintText="enter a dollar amount"
                                        name="amount"
                                    />
                                </TableRowColumn>
                                <TableRowColumn style={{width: '6%'}}>date</TableRowColumn>
                                <TableRowColumn style={{width: '25%'}}>
                                    <TextField style={{width: '100%'}}
                                               onChange={this.handleText('descriptionValue')}
                                        value={this.state.descriptionValue}
                                        hintText="please enter description"
                                        name="description"
                                    />
                                </TableRowColumn>
                                <TableRowColumn style={{width: '7%'}}>
                                    <SelectField
                                        name="category"
                                        value={this.state.categoryValue}
                                        onChange={this.handleSelector('categoryValue')}>
                                        <MenuItem value="food" primaryText="Food"/>
                                        <MenuItem value="entertainment" primaryText="Entertainment"/>
                                        <MenuItem value="sport" primaryText="Sport"/>
                                        <MenuItem value="alcohol" primaryText="Alcohol"/>
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

EditorSpendEdit.propTypes = {}

export default connect((state, props)=> {
    return {
        item: state.editors[props.match.params["earnSpendId"]]
    }
})(EditorSpendEdit)