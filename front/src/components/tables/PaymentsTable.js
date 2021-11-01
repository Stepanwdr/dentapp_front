import React, {Component} from 'react';
import {connect} from "react-redux";
import {Table} from "react-bootstrap";
import {withRouter} from 'react-router-dom';
import _ from "lodash";
import {EditOutlined, DeleteOutlined, EyeOutlined} from "@ant-design/icons";
import {Popconfirm} from 'antd';
class PaymentsTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sort: "asc",//desc
            sortField: 'id'
        }
    }
   
    render() {

        return (
            <>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Dentist</th>
                        <th>Tooth Name</th>
                        <th>Diagnosis</th>
                        <th>Procedures</th>
                        <th>Treathment Date</th>
                        <th>Service Price</th>
                        <th>Payment Method</th>
                        <th>Payment Status</th>
                        <th>Notes</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <th>Poxos Poxosyan</th>
                            <td>24</td>
                            <td>Crown</td>
                            <td>Removing</td>
                            <td>30.12.2021</td>
                            <td>10000</td>
                            <td>Cash</td>
                            <td>Payed</td>
                            <td>Some notes here</td>
                            <td className="actions_btns">
                            <i className="far fa-money-bill-alt pay_btn" onClick={''}></i>
                                <EditOutlined className="edit_btn"/>
                                <Popconfirm title="Sure to delete?"
                                            onConfirm={''}>
                                    <DeleteOutlined className="delete_btn"/>
                                </Popconfirm>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </>
        );
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  
}
const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(PaymentsTable)

export default withRouter(Container);