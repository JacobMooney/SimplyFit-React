import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardGroup, Container, Button, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import WorkoutBuilder from './WorkoutBuilderComponent';

class WorkoutDisplay extends Component {
    render() {
        console.log(this.props.selectionInfo);
        return (
            <React.Fragment>
                <Container className="optionsForm">
                    <Row>
                        <Col>
                            <Link to='/options'>
                                <Button className="NavigationBtnLeft btn-lg">Go Back</Button>
                            </Link>
                            <Col><h3>Example {this.props.selectionInfo.goalSelected} Workout</h3></Col>
                            <CardGroup>
                                <WorkoutBuilder selections={this.props.selectionInfo} />
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default WorkoutDisplay;