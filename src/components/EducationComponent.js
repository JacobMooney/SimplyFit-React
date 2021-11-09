import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class EducationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 25,
            heightFoot: 6,
            heightInch: 0,
            heightCent: 0,
            weight: 200,
            gender: 1,
            level: 1.2
        }
        this.toggleChangeHandler = this.toggleChangeHandler.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }


    // Use the submitted data to set the state
    handleChange(event) {
        let { name, value } = event.target
        value = parseFloat(value);
        console.log(typeof value);
        if (typeof value === 'number') {
            console.log(name);
            console.log(value);
            this.setState({
                [name]: value
            })
        }
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
            <body>
                <nav class="navbar navbar-expand">
                    <a class="navbar-brand text-light" href="index.html">Simply Fit</a>
                    <div id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link text-light" to='/nutrition'> Nutrition</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light" to='/education'>Fitness</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light" to='/options'>Routine</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="container py-5">
                    <h1>Training and Exercise</h1>
                    <p>
                        This section will cover the concepts and ideas around training that returns proven results. Fitness in general could be used to describe many types of athletics but we will be focusing primarily on weight lifting.
                    </p>
                    {/* How to stay motivated, change of lifestyle, things to drive motivation. Timelines for gains both in strength and size, diminishing returns over time of gains. */}
                    <h2 class="mt-4">Mindset and Expectations</h2>
                    <p>In order to make the most out of your efforts in the gym, it is important to develope the correct mindset to stay focused on your goals. While it is common to expect immediate results and changes in your physique, visual changes to the body are often slow. Motivation to workout can come from many sources but often time can be difficult to muster if you base it on slow changing things like physical changes.</p>

                    {/* Section to cover the terminology for lifting and exercise */}
                    <h2 class="mt-4">Common Terminology</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>
                                    Term
                                </th>
                                <th>
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Reps</td>
                                <td>The amount of repetitions preformed per set. | Example; 1 single push up is 1 rep or repetition.</td>
                            </tr>
                            <tr>
                                <td>Sets</td>
                                <td>The amount of times you preform a lift for a set of reps. | Example; 5 push ups in sequence, followed by a break, and then 5 more push ups would be 2 sets of 5 reps.</td>
                            </tr>
                            <tr>
                                <td>Reps X Sets</td>
                                <td>Commonly how reps and sets are written in routines. | Example; 3 x 10 would mean 10 repetitions for each of the 3 sets.</td>
                            </tr>
                            <tr>
                                <td>Barbell</td>
                                <td>Longer bars that can be loaded with individual weights.</td>
                            </tr>
                            <tr>
                                <td>Dumbbell</td>
                                <td>Shorter bars that have fixed weights, often incrementing by 5lbs.</td>
                            </tr>
                            <tr>
                                <td>Strength</td>
                                <td>Measures and describes how much weight can be lifted.</td>
                            </tr>
                            <tr>
                                <td>Hypertrophy</td>
                                <td>The effect of an exercises ability to increase muscle size.</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Strength vs hypertrophy types of training */}
                    <h2 class="mt-4">Strength vs Hypertrophy</h2>
                    <p>Although it's not absolutely necessary to understand the relationship between strength and size to make progress, being aware of these concepts can be useful in planning your routine.</p>
                    <h5 class="mt-1">Strength</h5>
                    <p>Strength is primarily gain through lifting heavier than you have previously, this is commonly achieved by adding small increments to weights per session. By exposing the body to higher loads spread out over time, it allows the you to get stronger while minimizing risk of injury.</p>
                    <h6>For example;</h6>
                    <div> <strong>Week 1</strong> - Bench Press : 100lbs for 5 reps X 5 sets</div>
                    <div> <strong>Week 2</strong> - Bench Press : 105lbs for 5 reps X 5 sets</div>
                    <div> <strong>Week 3</strong> - Bench Press : 110lbs for 5 reps X 5 sets</div>
                    <div> <strong>Week 4</strong> - Bench Press : 115lbs for 5 reps X 5 sets</div>

                    {/* Highlight the importance of exercise selections - compounds vs isolation / multi-joint vs single-joint */}
                    <h2 class="mt-4">Exercise Selection</h2>
                    {/* List off core compound movements */}
                    <h4 class="mt-1">Compound Movements</h4>
                    {/* Use cases for both */}
                    <h4 class="mt-1">Isolation Movements and Machines</h4>

                    {/* Talk about days per week and recovery */}
                    <h2 class="mt-4">Frequency of training</h2>

                    {/* How to measure progress with volume or weight */}
                    <h2 class="mt-4">Tracking Progress</h2>

                </div>
            </body >
        );
    }
}

export default EducationPage;