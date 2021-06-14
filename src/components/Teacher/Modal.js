
import React, { Component } from "react";
import { useHistory } from 'react-router-dom';
import "../style.css"
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";
import img from "../imgs/image3.png";


export default class CustomModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        };
    }

    handleChange = (e) => {
        let { name, value } = e.target;

        if (e.target.type === "checkbox") {
            value = e.target.checked;

        }

        const activeItem = { ...this.state.activeItem, [name]: value };

        this.setState({ activeItem });
    };

    render() {
        const { toggle, onSave } = this.props;

        return (
            <Modal  isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>הוספת תלמיד חדש</ModalHeader>
                <ModalBody>
                    <Form >
                        <FormGroup>
                            <Label for="FirstName">First Name:</Label>
                            <Input
                                type="text"
                                id="todo-title"
                                name="firstname11"
                                value={this.state.activeItem.title}
                                onChange={this.handleChange}
                                placeholder="Enter First Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="LastName">Last Name:</Label>
                            <Input
                                type="text"
                                id="todo-title"
                                name="lastname11"
                                value={this.state.activeItem.title}
                                onChange={this.handleChange}
                                placeholder="Enter Last Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="FirstName">Username:</Label>
                            <Input
                                type="text"
                                id="todo-title"
                                name="username11"
                                value={this.state.activeItem.title}
                                onChange={this.handleChange}
                                placeholder="Enter Username"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="FirstName">Password:</Label>
                            <Input
                                type="text"
                                id="todo-title"
                                name="password11"
                                value={this.state.activeItem.title}
                                onChange={this.handleChange}
                                placeholder="Enter Password"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="FirstName">Therapist:</Label>
                            <Input
                                type="text"
                                id="todo-title"
                                name="therapistName"
                                value={this.state.activeItem.title}
                                onChange={this.handleChange}
                                placeholder="Therapist"
                            />
                        </FormGroup>
                        <br/>
                        <Button color="blue" >
                            Add to a new class
                        </Button>
                        &emsp;
                        &emsp;
                        <Button  color="blue"
                        >
                            Add to class
                        </Button>
                    </Form>
                </ModalBody>
                <ModalFooter >
                    <Button
                        color="blue"
                        onClick={() => onSave(this.state.activeItem)}
                    >
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}
