import React, { useState } from 'react';
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
    }

    inputHandler(input) {
        this.setState({
            [daysSelected]: this.state.daysSelected
        });
    }

    render() {
        return (
            <Container className="optionsForm">
                <Row className="optionsRow">
                    <Col className="col-s-4 optionsCol d-grid gap-2">
                        <h3>Days Per Week</h3>
                        <ButtonGroup vertical>
                            <Button className="optionsBtn" onClick={() => this.inputHandler(2)} active={rSelected === { days: 2 }}>2</Button>
                            <Button className="optionsBtn" onClick={() => setDaySelected(3)} active={rSelected === 3}>3</Button>
                            <Button className="optionsBtn" onClick={() => setDaySelected(4)} active={rSelected === 4}>4</Button>
                        </ButtonGroup>
                        <p>Workout {rDaySelected} days a week.</p>
                    </Col>
                    <Col className="col-s-4 optionsCol d-grid gap-2">
                        <h3>Training Goal</h3>
                        <ButtonGroup vertical>
                            <Button className="optionsBtn" onClick={() => setRSelected("strength")} active={rSelected === "strength"}>Strength</Button>
                            <Button className="optionsBtn" onClick={() => setRSelected("bodybuilding")} active={rSelected === "bodybuilding"}>BodyBuilding</Button>
                            <Button className="optionsBtn" onClick={() => setRSelected("hybrid")} active={rSelected === "hybrid"}>Hybrid</Button>
                        </ButtonGroup>
                        <p>Selected: {rSelected}</p>
                    </Col>
                    <Col className="col-s-4 optionsCol d-grid gap-2">
                        <h3>Optional Includes</h3>
                        <ButtonGroup vertical>
                            <Button className="optionsBtn" onClick={() => onCheckboxBtnClick("cardio")} active={cSelected.includes("cardio")}>Cardio</Button>
                            <Button className="optionsBtn" onClick={() => onCheckboxBtnClick("stretching")} active={cSelected.includes("stretching")}>Stretching</Button>
                        </ButtonGroup>
                        <p>Selected: {JSON.stringify(cSelected)}</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default OptionsForm;

// const OptionsForm = () => {
//     const [cSelected, setCSelected] = useState([]);
//     const [rDaySelected, setDaySelected] = useState(null);
//     const [rSelected, setRSelected] = useState(null);

//     console.log(cSelected, rDaySelected);

//     const onCheckboxBtnClick = (selected) => {
//         const index = cSelected.indexOf(selected);
//         if (index < 0) {
//             cSelected.push(selected);
//         } else {
//             cSelected.splice(index, 1);
//         }
//         setCSelected([...cSelected]);
//     }

// }


