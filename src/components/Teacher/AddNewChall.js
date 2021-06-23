import React, { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";


export default class AddNewChall extends React.Component {

    state = {
        ChallengeName:'',
        SocialMax:'',
        SocialMin:'',
        EmotionalMax:'',
        EmotionalMin:'',
        StudyMax:'',
        StudyMin:'',
        Personal:'',
    }

    handleChange = event => {
        this.setState({name: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        const challenge = {
            ChallengeName: this.state.ChallengeName,
            SocialMax: this.state.SocialMax,
            SocialMin: this.state.SocialMin,
            EmotionalMax: this.state.EmotionalMax,
            EmotionalMin: this.state.EmotionalMin,
            StudyMax: this.state.StudyMax,
            StudyMin: this.state.StudyMin,
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
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor='ChallengeName'>ChallengeName:</label> <br />
                        <input
                            name='ChallengeName'
                            type='text'
                            required
                            onChange={this.handleChange}
                        />{' '}

                        <br />

                        <label htmlFor='SocialMax'>SocialMax:</label> <br />
                        <input
                            name='SocialMax'
                            type='number'
                            required
                            onChange={this.handleChange}
                        />{' '}

                        <br />

                        <label htmlFor='SocialMin'>SocialMin:</label> <br />
                        <input
                            name='SocialMin'
                            type='number'
                            required
                            onChange={this.handleChange}
                        />{' '}

                        <br />

                        <label htmlFor='StudyMin'>StudyMin:</label> <br />
                        <input
                            name='StudyMin'
                            type='number'
                            required
                            onChange={this.handleChange}
                        />{' '}
                        <br />
                        <label htmlFor='EmotionalMax'>EmotionalMax:</label> <br />
                        <input
                            name='EmotionalMax'
                            type='number'
                            required
                            onChange={this.handleChange}
                        />{' '}
                        <br />
                        <label htmlFor='EmotionalMin'>EmotionalMin:</label> <br />
                        <input
                            name='EmotionalMin'
                            type='number'
                            required
                            onChange={this.handleChange}
                        />{' '}
                        <br />
                        <label htmlFor='StudyMax'>StudyMax:</label> <br />
                        <input
                            name='StudyMax'
                            type='number'
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


