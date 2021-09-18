import React, { Component } from 'react';
import OptionsForm from './OptionsFormComponent';
import WorkoutDisplay from './WorkoutDisplayComponent';
import { Route, Switch, Redirect } from 'react-router-dom';
import LandingPage from './LandingComponent';
import NutritionPage from './NutritionComponent';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daysSelected: 3,
            goalSelected: 'Hybrid',
            cardio: false,
            stretching: false
        }
        this.toggleChangeHandler = this.toggleChangeHandler.bind(this);
        this.stateCheck = this.stateCheck.bind(this);
        this.handleChange = this.handleChange.bind(this)

    }
    stateCheck() {
        console.log(this.state);
    }

    // Use the submitted data to set the state
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    toggleChangeHandler(event) {
        //event.target.value is returning a string instead of bool
        const { name, value } = event.target;
        // console.log(event.target.value);
        // console.log(event.target.name);
        (value === 'false')
            ?
            this.setState({ [name]: true })
            :
            this.setState({ [name]: false });
    }

    render() {
        return (
            <Switch>
                <Route path='/home' component={LandingPage} />
                <Route path='/nutrition' component={NutritionPage} />
                <Route path='/education' component={NutritionPage} />
                <Route exact path='/options'
                    render={() => <OptionsForm formInfo={this.state} handleChange={this.handleChange} toggleChange={this.toggleChangeHandler} />
                    } />
                <Route exact path='/workoutDisplay'
                    render={() => <WorkoutDisplay selectionInfo={this.state} />} />
                <Redirect to='/home' />
            </Switch>
        );
    }
}

export default MainComponent;