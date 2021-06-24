import React, { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import "./barStyle.css"


export default class AddNewChall extends React.Component {

    state = {
        ChallengeName:'',
        Social:'',
        Emotional:'',
        Study:'',
        Personal:'',
    }

    handleChange = event => {
        this.setState({name: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        const challenge = {
            ChallengeName: this.state.ChallengeName,
            Social: this.state.Social,
            Emotional: this.state.Emotional,
            Study: this.state.Study,
            Personal: this.state.Personal,

        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, {challenge})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    render() {
        return (
                <div className="app-com">
                    <br/>
                    <h1>Add New Challenge</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor='ChallengeName'>ChallengeName:</label> <br />
                        <input
                            name='ChallengeName'
                            type='text'
                            required
                            onChange={this.handleChange}
                        />{' '}

                        <br />

                        <label htmlFor='Social'>Social:</label> <br />
                        <input
                            name='Social'
                            type='range'  min="0" max="5"
                            color='pink'
                            required
                            onChange={this.handleChange}
                        />{' '}

                        <br />

                        <label htmlFor='Emotional'>Emotional</label> <br />
                        <input
                            name='Emotional'
                            type='range' min="0" max="5"
                            required
                            onChange={this.handleChange}
                        />{' '}
                        <br />
                        <label htmlFor='Study'>Study:</label> <br />
                        <input
                            name='Study'
                            type='range' min="0" max="5"
                            required
                            onChange={this.handleChange}
                        />{' '}
                        <br />
                        <label htmlFor='Personal'>Personal:</label> <br />
                        <input
                            name='Personal'
                            type='number'
                            required
                            onChange={this.handleChange}
                        />{' '}
                        <br />


                        <input type='submit' value='Add' />
                    </form>
                </div>
        )
    }
}


