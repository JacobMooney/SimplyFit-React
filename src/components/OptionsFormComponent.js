import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

class OptionsForm extends Component{
    render() {
        // console.log(this.props.formInfo)
        const currentInfo = this.props.formInfo;
        return (
            <Container className="optionsForm">
                <Row className="optionsRow">
                    <Col className="col-s-4 optionsCol d-grid gap-2">
                        <h3>Days Per Week</h3>
                        <ButtonGroup vertical>
                            <Button className="optionsBtn" value={2} name={"daysSelected"} onClick={this.props.handleChange}>2</Button>
                            <Button className="optionsBtn" value={3} name={"daysSelected"} onClick={this.props.handleChange}>3</Button>
                            <Button className="optionsBtn" value={4} name={"daysSelected"} onClick={this.props.handleChange}>4</Button>
                        </ButtonGroup>
                        <p>Workout {currentInfo.daysSelected} days a week.</p>
                    </Col>
                    <Col className="col-s-4 optionsCol d-grid gap-2">
                        <h3>Training Goal</h3>
                        <ButtonGroup vertical>
                            <Button className="optionsBtn" value={'strength'} name={"goalSelected"} onClick={this.props.handleChange}>Strength</Button>
                            <Button className="optionsBtn" value={'bodybuilding'} name={"goalSelected"} onClick={this.props.handleChange}>BodyBuilding</Button>
                            <Button className="optionsBtn" value={'hybrid'} name={"goalSelected"} onClick={this.props.handleChange}>Hybrid</Button>
                        </ButtonGroup>
                        <p>Selected: {currentInfo.goalSelected}</p>
                    </Col>
                    <Col className="col-s-4 optionsCol d-grid gap-2">
                        <h3>Optional Includes</h3>
                        <ButtonGroup vertical>
                            <Button className="optionsBtn" value={currentInfo.cardio} name={"cardio"} onClick={this.props.toggleChange}>Cardio</Button>
                            <Button className="optionsBtn" value={currentInfo.stretching} name={"stretching"} onClick={this.props.toggleChange}>Stretching</Button>
                        </ButtonGroup>
                        <p>Selected: {currentInfo.stretching ? "Cardio" : ""} {currentInfo.cardio ? "Stretching" : ""}</p>
                    </Col>
                </Row>
                <Row className="submitRow">
                    <ButtonGroup vertical>
                        <Link to="/workoutDisplay"><Button className="optionsBtn">Next</Button></Link>
                    </ButtonGroup>
                </Row>
            </Container>
        );
    }
}


export default OptionsForm;



