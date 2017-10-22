import React from 'react';
import {connect} from 'react-redux';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

class EditorEarnSpend extends React.Component {

    getTableRow() {
        return this.props.tableData.map((item, i)=>{
            return (
                <TableRow key={item._id}>
                    <TableRowColumn style={{width: '5%'}}>{i}</TableRowColumn>
                    <TableRowColumn style={{width: '7%'}}>{item.type}</TableRowColumn>
                    <TableRowColumn style={{width: '6%'}}>{item.amount}</TableRowColumn>
                    <TableRowColumn style={{width: '6%'}}>date</TableRowColumn>
                    <TableRowColumn style={{width: '20%'}}>{item.description}</TableRowColumn>
                    <TableRowColumn style={{width: '10%'}}>{item.category}</TableRowColumn>
                    <TableRowColumn style={{width: '10%'}}>
                        <RaisedButton label="Edit"
                                      onClick={()=>{
                                          console.log(item._id);
                                      }}
                                      primary={true} />
                    </TableRowColumn>
                    <TableRowColumn style={{width: '10%'}}>
                        <RaisedButton label="Delete" secondary={true}/>
                    </TableRowColumn>
                </TableRow>
            )
        })
    }

    render() {
        return (
            <Table style={{width: "80%", margin: '0 auto'}}>
                <TableHeader displaySelectAll={false}
                             selectable={false}
                             adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn style={{width: '5%'}}>#</TableHeaderColumn>
                        <TableHeaderColumn style={{width: '7%'}}>Type</TableHeaderColumn>
                        <TableHeaderColumn style={{width: '6%'}}>Amount</TableHeaderColumn>
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
        )

    }
}

export default connect((state)=>({
    tableData: state.editors
}))(EditorEarnSpend)