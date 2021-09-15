import { Card, CardBody, CardTitle, ListGroup } from 'reactstrap';
import React from 'react';
import DayRoutine from './RoutineComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardioOption({ option }) {
    if (option) {
        return (
            <div>
                Cardio: 10 min
            </div>
        )
    }
    return (
        <div />
    );
}
function StretchingOption({ option }) {
    if (option) {
        return (
            <div>
                Stretching: 10min
            </div>
        )
    }
    return (
        <div />
    );
}

function NumOfDays({ selections }) {
    const nDays = [];
    for (let i = 0; i < selections.daysSelected; i++) {
        nDays.push(
            <Card>
                <CardBody>
                    <CardTitle>Workout: {i+1}</CardTitle>
                    <ListGroup>
                        <CardioOption option={selections.cardio} />
                        <DayRoutine id={i} dayNum={i+1} goalType={selections.goalSelected} selections={selections} />
                        <StretchingOption option={selections.stretching} />
                    </ListGroup>
                </CardBody>
            </Card>
        );
    }
    return nDays;
}

function WorkoutBuilder(props) {
    const selections = props.selections;
    return (
        <NumOfDays selections={selections} />
    );
}


export default WorkoutBuilder;