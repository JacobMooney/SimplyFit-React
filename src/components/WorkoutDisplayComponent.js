import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardGroup, Container } from 'reactstrap';
import WorkoutBuilder from './WorkoutBuilderComponent';

class WorkoutDisplay extends Component {
    render() {
        return(
            <React.Fragment>
                <Container className="workoutDisplay">
                    <CardGroup>
                        <WorkoutBuilder selections={this.props.selectionInfo} />
                    </CardGroup>
                </Container>
            </React.Fragment>
        );
    }
}

export default WorkoutDisplay;