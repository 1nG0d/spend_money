import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {mapToArr} from '../../utils'
import {editorSpendDeleteRow} from '../../ducks/editors'

class EditorEarnSpend extends React.Component {

    getTableRow() {
        return this.props.tableData.map((item, i)=>{
            return (
                <TableRow key={item._id}>
                    <TableRowColumn style={{width: '5%'}}>{i}</TableRowColumn>
                    <TableRowColumn style={{width: '7%'}}>{item.type}</TableRowColumn>
                    <TableRowColumn style={{width: '8%'}}>{item.amount}</TableRowColumn>
                    <TableRowColumn style={{width: '6%'}}>date</TableRowColumn>
                    <TableRowColumn style={{width: '20%'}}>{item.description}</TableRowColumn>
                    <TableRowColumn style={{width: '10%'}}>{item.category}</TableRowColumn>
                    <TableRowColumn style={{width: '10%'}}>
                        <Link to={`/editors/spend_earn/${item._id}`}>
                            Edit
                        </Link>
                    </TableRowColumn>
                    <TableRowColumn style={{width: '10%'}}>
                        <RaisedButton label="Delete"
                                      onClick={()=>{this.props.editorSpendDeleteRow(item._id)}}
                                      secondary={true}/>
                    </TableRowColumn>
                </TableRow>
            )
        })
    }

    render() {
        return (
        <Paper style={{width: "80%", margin: '30px auto', padding: '20px'}} zDepth={2} >
            <Table selectable={false}>
                <TableHeader displaySelectAll={false}
                             adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn style={{width: '5%'}}>#</TableHeaderColumn>
                        <TableHeaderColumn style={{width: '7%'}}>Type</TableHeaderColumn>
                        <TableHeaderColumn style={{width: '8%'}}>Amount</TableHeaderColumn>
                        <TableHeaderColumn style={{width: '6%'}}>Date</TableHeaderColumn>
                        <TableHeaderColumn style={{width: '20%'}}>Description</TableHeaderColumn>
                        <TableHeaderColumn style={{width: '10%'}}>Category</TableHeaderColumn>
                        <TableHeaderColumn style={{width: '10%'}}>Edit</TableHeaderColumn>
                        <TableHeaderColumn style={{width: '10%'}}>Delete</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {this.getTableRow()}
                </TableBody>
            </Table>
        </Paper>

        )

    }
}

export default connect((state)=>({
    tableData: mapToArr(state.editors)
}), {editorSpendDeleteRow})(EditorEarnSpend)