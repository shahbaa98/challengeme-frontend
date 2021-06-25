import {useHistory} from "react-router-dom";
import {RiLogoutBoxLine} from "react-icons/ri";
import img from '../imgs/image3.png'
import React, { useState, useEffect } from 'react';
import '../style.css'
import {useAuth} from "../../contexts/UserContext";
import AddStudent from "./AddStudent";

export default class AddNewChall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ChallengeName: '',
            Social: '',
            Emotional: '',
            Study: '',
            Personal: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        console.log(this.state)
    }

    render() {
        return (
            <form>
                <label>
                    <input
                        name="ChallengeName"
                        type="text"
                        value={this.state.ChallengeName}
                        onChange={this.handleInputChange}/>
                </label>
                שם האתגר

                <br/>
                <label>
                    <input
                        name="Social"
                        type="number"
                        value={this.state.Social}
                        onChange={this.handleInputChange}/>
                    חברתי
                </label>
                <br/>
                <label>
                    <input
                        name="Emotional"
                        type="number"
                        value={this.state.Emotional}
                        onChange={this.handleInputChange}/>
                    רגשי
                </label>
                <br/>
                <label>
                    <input
                        name="Study"
                        type="number"
                        value={this.state.Study}
                        onChange={this.handleInputChange}/>
                    לימודי
                </label>
                <br/>
                <label>
                    <input
                        name="Personal"
                        type="number"
                        value={this.state.Personal}
                        onChange={this.handleInputChange}/>
                    אישי
                </label>
                <br/>
                <input type='submit' value='הוספה'/>
            </form>
        );
    }
};
