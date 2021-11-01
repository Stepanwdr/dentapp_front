import React, {Component} from "react";

import {selectNotesForPaymentsModal} from "../../store/actions/Payments";
import {connect} from "react-redux";
import _ from "lodash";
import {
    Modal,
    Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Rate,
    Checkbox,
    Row,
    Col, Popconfirm,
} from 'antd';
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Table} from "react-bootstrap";

class SelectNotesForPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSubmit = (selectedNotes) => {

        console.log(selectedNotes)
    }

    render() {
        const {selectNotesForPaymentsModalShow = false} = this.props
        console.log(this.props)
        const {Option} = Select
        return (
            <Modal
                visible={selectNotesForPaymentsModalShow}
                title="Add Tooth Notes"
                onOk={this.handleOk}
                footer={null}
                width={"800px"}
                wrapClassName="add_notes_modal"
                onCancel={() => this.props.selectNotesForPaymentsModal(!selectNotesForPaymentsModalShow)}
            >
                <Form onFinish={(selectedNotes) => this.handleSubmit(selectedNotes)}>
                <Form.Item name="noteForPayment">

                        <Row>
                            <Checkbox.Group>
                                <Checkbox
                                value={'noteId1'}
                                > <Table striped bordered hover>
                                        <thead>
                                        <tr>
                                            <th>Tooth</th>
                                            <th>Procedures</th>
                                            <th>Treathment Date</th>
                                            <th>Service Price</th>
                                            <th>Payment Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>24</td>
                                            <td>Removing</td>
                                            <td>30.12.2021</td>
                                            <td>10000</td>
                                            <td>UnPayed</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Checkbox>
                            <Checkbox
                                value={'noteId2'}
                            >
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>Tooth</th>
                                        <th>Procedures</th>
                                        <th>Treathment Date</th>
                                        <th>Service Price</th>
                                        <th>Payment Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>24</td>
                                        <td>Removing</td>
                                        <td>30.12.2021</td>
                                        <td>10000</td>
                                        <td>UnPayed</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Checkbox>
                            <Checkbox
                                value={'noteId3'}
                            >
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>Tooth</th>
                                        <th>Procedures</th>
                                        <th>Treathment Date</th>
                                        <th>Service Price</th>
                                        <th>Payment Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>24</td>
                                        <td>Removing</td>
                                        <td>30.12.2021</td>
                                        <td>10000</td>
                                        <td>UnPayed</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Checkbox>
                    </Checkbox.Group>
                    </Row>


                </Form.Item>
                <Button htmlType="submit" className={"formButton"}><i
                    className={"fas fa-clinic-medical"}></i> Add</Button>
            </Form>
            </Modal>
    );
    }
    }


    const mapStateToProps = (state) => (
        {
            selectNotesForPaymentsModalShow: state.Payments.selectNotesForPaymentsModalShow
        }
    );

    const mapDispatchToProps =
        {
            selectNotesForPaymentsModal,


        }
    ;
    const Container = connect(
    mapStateToProps,
    mapDispatchToProps
    )(SelectNotesForPayment);

    export default Container;






