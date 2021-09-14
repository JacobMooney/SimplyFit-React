import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Col, Container, Row } from 'reactstrap';

class OptionsForm extends Component {
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

    selectChangeHandler (event)  {
        // console.log(event.target.value === "false"); event.target.value is returning a string instead of bool 
        (event.target.value === 'false')
            ? 
            this.setState({ [event.target.name]: true })
            :
            this.setState({ [event.target.name]: false });
    }

    render() {
        return (
            <Container className="optionsForm">
                <Row className="optionsRow">
                    <Col className="col-s-4 optionsCol d-grid gap-2">
                        <h3>Days Per Week</h3>
                        <ButtonGroup vertical>
                            <Button className="optionsBtn" value={2} name={"daysSelected"} onClick={this.inputChangeHandler}>2</Button>
                            <Button className="optionsBtn" value={3} name={"daysSelected"} onClick={this.inputChangeHandler}>3</Button>
                            <Button className="optionsBtn" value={4} name={"daysSelected"} onClick={this.inputChangeHandler}>4</Button>
                        </ButtonGroup>
                        <p>Workout {this.state.daysSelected} days a week.</p>
                    </Col>
                    <Col className="col-s-4 optionsCol d-grid gap-2">
                        <h3>Training Goal</h3>
                        <ButtonGroup vertical>
                            <Button className="optionsBtn" value={'strength'} name={"goalSelected"} onClick={this.inputChangeHandler}>Strength</Button>
                            <Button className="optionsBtn" value={'bodybuilding'} name={"goalSelected"} onClick={this.inputChangeHandler}>BodyBuilding</Button>
                            <Button className="optionsBtn" value={'hybrid'} name={"goalSelected"} onClick={this.inputChangeHandler}>Hybrid</Button>
                        </ButtonGroup>
                        <p>Selected: {this.state.goalSelected}</p>
                    </Col>
                    <Col className="col-s-4 optionsCol d-grid gap-2">
                        <h3>Optional Includes</h3>
                        <ButtonGroup vertical>
                            <Button className="optionsBtn" value={this.state.cardio} name={"cardio"} onClick={this.selectChangeHandler}>Cardio</Button>
                            <Button className="optionsBtn" value={this.state.stretching} name={"stretching"} onClick={this.selectChangeHandler}>Stretching</Button>
                        </ButtonGroup>
                        <p>Selected: {this.state.stretching ? "Cardio" : ""} {this.state.cardio ? "Stretching" : ""}</p>
                    </Col>
                </Row>
                <Row className="submitRow">
                        <ButtonGroup vertical>
                            <Button className="optionsBtn" onClick={this.stateCheck}>Next</Button>
                        </ButtonGroup>
                </Row>
            </Container>
        );
    }
}

export default OptionsForm;



