import { Component } from 'react';
import OptionsForm from './OptionsFormComponent';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daysSelected: 3,
            goalSelected: 'hybrid',
            cardio: false,
            stretching: false
        }
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.selectChangeHandler = this.selectChangeHandler.bind(this);
        this.stateCheck = this.stateCheck.bind(this);
    }

    stateCheck() {
        console.log(this.state);

    }

    inputChangeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    selectChangeHandler(event) {
        // console.log(event.target.value === "false"); event.target.value is returning a string instead of bool 
        (event.target.value === 'false')
            ?
            this.setState({ [event.target.name]: true })
            :
            this.setState({ [event.target.name]: false });
    }


    render() {
        return (
            <OptionsForm></OptionsForm>
        );
    }
}

export default MainComponent;