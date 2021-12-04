import { Label, Input, FormGroup, Form } from 'reactstrap';

function TDEEform(props) {
    return (
        <Form>
            <FormGroup inline tag="fieldset">
                <legend>
                    Input your Information
                </legend>
                <FormGroup inline check onChange={props.handleChange}>
                    <Input
                        name="gender"
                        type="radio"
                        value={1}
                    />
                    {' '}
                    <Label check>
                        Male
                    </Label>
                </FormGroup>
                <FormGroup inline check onChange={props.handleChange}>
                    <Input
                        name="gender"
                        type="radio"
                        value={2}
                    />
                    {' '}
                    <Label check>
                        Female
                    </Label>
                </FormGroup>
            </FormGroup>
            <FormGroup onChange={props.handleChange}>
                <Label xl for="heightSelect">
                    Height
                </Label>
                <div>
                    <select
                        id="heightSelect"
                        name="heightFoot"
                        type="select"
                        inline
                        style={{ width: 80 }}
                    >
                        <option value={1}>
                            1 ft
                        </option>
                        <option value={2}>
                            2 ft
                        </option>
                        <option value={3}>
                            3 ft
                        </option>
                        <option value={4}>
                            4 ft
                        </option>
                        <option value={5}>
                            5 ft
                        </option>
                        <option selected value={6}>
                            6 ft
                        </option>
                        <option value={7}>
                            7 ft
                        </option>
                    </select>

                    <select
                        id="heightSelect"
                        name="heightInch"
                        type="select"
                        inline
                        style={{ width: 80 }}
                    >
                        <option selected>
                            0 in
                        </option>
                        <option value={1}>
                            1 in
                        </option>
                        <option value={2}>
                            2 in
                        </option>
                        <option value={3}>
                            3 in
                        </option>
                        <option value={4}>
                            4 in
                        </option>
                        <option value={5}>
                            5 in
                        </option>
                        <option value={6}>
                            6 in
                        </option>
                        <option value={7}>
                            7 in
                        </option>
                        <option value={8}>
                            8 in
                        </option>
                        <option value={9}>
                            9 in
                        </option>
                        <option value={10}>
                            10 in
                        </option>
                        <option value={11}>
                            11 in
                        </option>
                    </select>
                </div>
            </FormGroup>
            <FormGroup onChange={props.handleChange}>
                <Label xl for="weightSelect">
                    Weight
                </Label>
                <Input
                    placeholder='Weight'
                    id="weightSelect"
                    name="weight"
                    type="text"
                    min={0}
                    max={999}
                >
                </Input>
            </FormGroup>
            <FormGroup onChange={props.handleChange}>
                <Label xl for="weightSelect">
                    Age
                </Label>
                <Input
                    placeholder='Age'
                    id="weightSelect"
                    name="age"
                    type="text"
                    min={0}
                    max={99}
                >
                </Input>
            </FormGroup>
            <FormGroup onChange={props.handleChange}>
                <Label xl for="activitySelect">
                    Activity Level
                </Label>
                <Input
                    id="activitySelect"
                    name="level"
                    type="select"
                >
                    <option selected value={1.2}>
                        Sedentary (little to no exercise + work a desk job)
                    </option>
                    <option value={1.375}>
                        Lightly Active (light exercise 1-3 days / week)
                    </option>
                    <option value={1.55}>
                        Moderately Active (moderate exercise 3-5 days / week)
                    </option>
                    <option value={1.725}>
                        Very Active (heavy exercise 6-7 days / week)
                    </option>
                    <option value={1.9}>
                        Extremely Active (very heavy exercise, hard labor job, training 2x / day)
                    </option>
                </Input>
            </FormGroup>
        </Form>
    );
}

export default TDEEform;