import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import hierarchy from "../shared/img/hierarchy.png";
import overlap from "../shared/img/overlap.png";

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
                <div class="container-sm py-5">
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
                                <td><strong>Reps</strong></td>
                                <td>The amount of repetitions preformed per set. | Example; 1 single push up is 1 rep or repetition.</td>
                            </tr>
                            <tr>
                                <td><strong>Sets</strong></td>
                                <td>The amount of times you preform a lift for a set of reps. | Example; 5 push ups in sequence, followed by a break, and then 5 more push ups would be 2 sets of 5 reps.</td>
                            </tr>
                            <tr>
                                <td><strong>Reps X Sets</strong></td>
                                <td>Commonly how reps and sets are written in routines. | Example; 3 x 10 would mean 10 repetitions for each of the 3 sets.</td>
                            </tr>
                            <tr>
                                <td><strong>1 Rep Max</strong></td>
                                <td>The absolute maximum amount of weight you can lift on a given exercise for 1 repetition. Sometimes tested, but often calculated using a 1 rep max calculator for safety.</td>
                            </tr>
                            <tr>
                                <td><strong>Barbell</strong></td>
                                <td>Long bars that can be loaded with individual weights/plates.</td>
                            </tr>
                            <tr>
                                <td><strong>Dumbbell</strong></td>
                                <td>Shorter bars that have fixed weights, often incrementing by 5lbs.</td>
                            </tr>
                            <tr>
                                <td><strong>Compound Exercise</strong></td>
                                <td>Exercises that work multiple muscle groups at once. Bench Press, Deadlift, Squat, Pull Ups, Over Head Press, etc.</td>
                            </tr>
                            <tr>
                                <td><strong>Isolation Exercise</strong></td>
                                <td>Exercises that mainly target one specific muscle group. Dumbbell Curl, Dumbbell or Machine Chest Fly, etc.</td>
                            </tr>
                            <tr>
                                <td><strong>Strength</strong></td>
                                <td>Measures and describes how much weight can be lifted.</td>
                            </tr>
                            <tr>
                                <td><strong>Hypertrophy</strong></td>
                                <td>The effect of an exercises ability to increase muscle size.</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Strength vs hypertrophy types of training */}
                    <h2 class="mt-4">Strength and Hypertrophy</h2>
                    <h5 class="mt-4">Strength</h5>
                    <p>Strength is gained by lifting heavier weights than you have previously. This is commonly achieved by lifting weights in the 80-95% range of your 1 rep max with gradual increments over time. This primarily applies to compound lifts by adding 5 additional pounds each week. Exposing the body to high effort loads each week allows you to get stronger while minimizing risk of injury by increasing the weight lifted gradually.</p>

                    <h6>Exercise plan with a strength goal example;</h6>
                    <div> <strong>Week 1</strong> - Bench Press : 100lbs for 5 sets X 5 reps</div>
                    <div> <strong>Week 2</strong> - Bench Press : 105lbs for 5 sets X 5 reps</div>
                    <div> <strong>Week 3</strong> - Bench Press : 110lbs for 5 sets X 5 reps</div>
                    <div> <strong>Week 4</strong> - Bench Press : 115lbs for 5 sets X 5 reps</div>

                    <h5 class="mt-4">Hypertrophy</h5>
                    <p>Hypertrophy is primarily gained through a combination of volume and intensity. Volume refering to the number of sets per muscles group per week, and intensity as the relative effort per set.  Lifting with hypertrophy as a goal requires lifting in the 65-80% of 1 rep max range. Since the weight used per set is lighter it allows you to do more reps, which translates to more total volume. </p>

                    <h6>Exercise plan with a hypertrophy goal example;</h6>
                    <div> <strong>Week 1</strong> - Bench Press : 80lbs for 3 sets X 8 reps</div>
                    <div> <strong>Week 2</strong> - Bench Press : 80lbs for 3 sets X 10 reps</div>
                    <div> <strong>Week 3</strong> - Bench Press : 80lbs for 3 sets X 12 reps</div>
                    <div> <strong>Week 4</strong> - Bench Press : 85lbs for 3 sets X 8 reps</div>

                    <h2 class="mt-4">Training for Strength or Hypertrophy</h2>
                    <p>A common misconception people have after learning the above concepts about strength and hypertrophy is that you can only train one at a time. While this is not entirely true or false, it is worth explaining that often routines will be oriented around a specific training goal. Because focusing on one goal at a time often is the most efficient way to train for each area. It's recommended to start with strength training and then change routines when the gains start to diminish.</p>

                    <ul>
                        <li>
                            <h6>Strength / PowerLifting</h6>
                            <ul>
                                <li>Primary goal to get stronger</li>
                                <li>Also will increase muscles size but to a lesser degree</li>
                            </ul>
                        </li>
    
                        <li>
                            <h6>Hypertrophy / Bodybuilding</h6>
                            <ul>
                                <li>Primary goal to increase muscular size</li>
                                <li>Likely will gain some additional strength but at a slower rate</li>
                            </ul>
                        </li>
                    </ul>

                    <p>So it's possible to gain both strength and size at the same time, but focusing on a specific goal often leads to faster results. The graph below illustrates this relationship between the two primary training targets.</p>

                    <img style={{height: 500}} alt="Strength vs Hypertrophy" src={overlap} />

                    {/* Highlight the importance of exercise selections - compounds vs isolation / multi-joint vs single-joint */}
                    <h2 class="mt-4">Exercise Selection</h2>
                    <p>When deciding on the exercises to include in a routine, it's worth considering which ones will provide the most results. In order to make steady progress building a routine intelligently can make it twice as effective. Below is general list of the catagories most equipment will fit into and should make up the bulk of any routine.</p>

                    <img style={{height: 390}} alt="hierarchy of exercises" src={hierarchy} />
                    <ul>
                        <h5>Barbell Exercises</h5>
                        <p>Lifts using the barbell should make up the foundation of any good routine. Barbell movements are primarily compound movements, which means they work multiple muscles at once. Additionally most of these exercises can be loaded much heavier than other options, making them great for increasing strength.</p>
    
                        <h5 class="mt-4">Dumbbell Exercises</h5>
                        <p>Dumbbell exercises are important because they can be used to train muscle groups together or in isolation. Additionally they can be used to train the body iso-laterally, or each side on it's own. This is very useful for strengthening and correcting muscular imbalances. Dumbbells force the body to stabilize and preform the lift without assistance from the other side of the body.</p>
    
                        <h5 class="mt-4">Machine Exercises</h5>
                        <p>Machine exercises often get a bad rep for not being "real lifts" but they often excel in their specific muscle building goal. Machines allow you to train for certain lifts before you have the nessecarry strength to preform them. For example; using machines you can train the movement pattern for pull ups, building your arm and lat strength enough to eventually preform them with bodyweight. Another benifit of machines, is they allow you to push yourself closer to failure more safely without the need of a spotter.</p>
                    </ul>

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