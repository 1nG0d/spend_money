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

class Editor_in_spend extends React.Component {

    getTableRow() {
        return this.props.tableData.map((item, i)=>{
            return (
                <TableRow key={item._id}>
                    <TableRowColumn>{i}</TableRowColumn>
                    <TableRowColumn>{item.type}</TableRowColumn>
                    <TableRowColumn>{item.amount}</TableRowColumn>
                    <TableRowColumn>date</TableRowColumn>
                    <TableRowColumn>{item.description}</TableRowColumn>
                    <TableRowColumn>{item.category}</TableRowColumn>
                </TableRow>
            )
        })
    }

    render() {

        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Type</TableHeaderColumn>
                        <TableHeaderColumn>Amount</TableHeaderColumn>
                        <TableHeaderColumn>Date</TableHeaderColumn>
                        <TableHeaderColumn>Description</TableHeaderColumn>
                        <TableHeaderColumn>Category</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {this.getTableRow()}
                </TableBody>
            </Table>
        )

    }
}

export default connect((state)=>({
    tableData: state.editors
}))(Editor_in_spend)