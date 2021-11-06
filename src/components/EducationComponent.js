
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
                    <h2 class="mt-4">Mindset and Expectations</h2>
                    <p>In order to make the most out of your efforts in the gym, it is important to develope the correct mindset to stay focused on your goals. While it is common to expect immediate results and changes in your physique, visual changes to the body are often slow.</p>

                </div>

            </body >
        );
    }
}

export default EducationPage;