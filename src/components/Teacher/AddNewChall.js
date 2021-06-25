import React from "react";

export default class AddNewChall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ChallengeName:'',
            Social:'',
            Emotional:'',
            Study:'',
            Personal:'',
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
                    ChallengeName:
                    <input
                        name="ChallengeName"
                        type="text"
                        value={this.state.ChallengeName}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Social:
                    <input
                        name="Social"
                        type="number"
                        value={this.state.Social}
                        onChange={this.handleInputChange} />
                </label>
                <br/>
                <label>
                    Emotional:
                    <input
                        name="Emotional"
                        type="number"
                        value={this.state.Emotional}
                        onChange={this.handleInputChange} />
                </label>
                <br/>
                <label>
                    Study:
                    <input
                        name="Study"
                        type="number"
                        value={this.state.Study}
                        onChange={this.handleInputChange} />
                </label>
                <br/>
                <label>
                    Personal:
                    <input
                        name="Personal"
                        type="number"
                        value={this.state.Personal}
                        onChange={this.handleInputChange} />
                </label>
                <br/>
                <input type='submit' value='Add' />
            </form>
        );
    }
}
