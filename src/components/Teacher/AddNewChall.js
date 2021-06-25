import React, { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import "./barStyle.css"
import ReactDOM from 'react-dom';
import InputRange from "react-input-range";


export default class AddNewChall extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            valueSocial: {
                min: 3,
                max: 7,
            },
            valueEmotional: {
                min: 3,
                max: 7,
            },
            valueStudy: {
                min: 3,
                max: 7,
            },
        };
    }

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
                        <label htmlFor='ChallengeName'>ChallengeName:</label><br/>
                        <input
                            name='ChallengeName'
                            type='text'
                            required
                            onChange={this.handleChange}
                        />{' '}

                        <br />

                        <label htmlFor='Social'>Social:</label> <br/> <br/>
                        <InputRange  name='Social'
                            draggableTrack
                            maxValue={20}
                            minValue={0}
                            onChange={value => this.setState({ valueSocial: value })}
                            onChangeComplete={value => console.log(value)}
                            value={this.state.valueSocial} />{' '}

                        <br />
                        <label htmlFor='Emotional'>Emotional</label> <br/><br/>
                        <InputRange  name='Emotional'
                                     draggableTrack
                                     maxValue={20}
                                     minValue={0}
                                     onChange={value => this.setState({ valueEmotional: value })}
                                     onChangeComplete={value => console.log(value)}
                                     value={this.state.valueEmotional} />{' '}
                        <br />
                        <label htmlFor='Study'>Study:</label> <br/><br/>
                        <InputRange  name='Study'
                                     draggableTrack
                                     maxValue={20}
                                     minValue={0}
                                     onChange={value => this.setState({ valueStudy: value })}
                                     onChangeComplete={value => console.log(value)}
                                     value={this.state.valueStudy} />{' '}
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


