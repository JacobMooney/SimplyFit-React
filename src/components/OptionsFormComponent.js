import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

class OptionsForm extends Component{
    render() {
        const currentInfo = this.props.formInfo;
        return (
            <Container className="optionsPage">
                <Row>
                    <Link to="/home"><Button className="NavigationBtnLeft btn-lg">Go Back</Button></Link>
                </Row>
                <div>
                    <Row className='flex-md-wrap flex-lg-nowrap'>
                        <Col md='12' lg='4' className="optionsCol d-grid gap-2">
                            <h3 className="optionsHeader">Days Per Week:</h3>
                            <ButtonGroup vertical>
                                <Button className="optionsBtn" value={2} name={"daysSelected"} onClick={this.props.handleChange}>2</Button>
                                <Button className="optionsBtn" value={3} name={"daysSelected"} onClick={this.props.handleChange}>3</Button>
                                <Button className="optionsBtn" value={4} name={"daysSelected"} onClick={this.props.handleChange}>4</Button>
                            </ButtonGroup>
                            <h5>Workout for {currentInfo.daysSelected} days a week.</h5>
                        </Col>
                        <Col md='12' lg='4' className="optionsCol d-grid gap-1">
                            <h3 className="optionsHeader">Training Goal:</h3>
                            <ButtonGroup vertical>
                                <Button className="optionsBtn" value={'Strength'} name={"goalSelected"} onClick={this.props.handleChange}>Strength</Button>
                                <Button className="optionsBtn" value={'Bodybuilding'} name={"goalSelected"} onClick={this.props.handleChange}>BodyBuilding</Button>
                                <Button className="optionsBtn" value={'Hybrid'} name={"goalSelected"} onClick={this.props.handleChange}>Hybrid</Button>
                            </ButtonGroup>
                            <h5>Selected: {currentInfo.goalSelected}</h5>
                        </Col>
                        <Col md='12' lg='4' className="optionsCol d-grid gap-1">
                            <h3 className="optionsHeader">Additional Options:</h3>
                            <ButtonGroup vertical>
                                <Button className="optionsBtn" value={currentInfo.cardio} name={"cardio"} onClick={this.props.toggleChange}>Cardio</Button>
                                <Button className="optionsBtn" value={currentInfo.stretching} name={"stretching"} onClick={this.props.toggleChange}>Stretching</Button>
                            </ButtonGroup>
                            <h5>Selected: {currentInfo.stretching ? "Stretching" : ""} {currentInfo.cardio ? "Cardio" : ""}</h5>
                        </Col>
                    </Row>
                </div>
                <Row className="submitRow">
                    <Col>
                        <Link to="/workoutDisplay"><Button className="NavigationBtnRight btn-lg">View Routine</Button></Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default OptionsForm;



