import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import TDEEform from './TDEEComponent';

class NutritionPage extends Component {
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

        //(Inch*2.54)+(Feet*30.48)
        //(Pound*2.205)
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
        const cmHeight = (this.state.heightInch * 2.54) + (this.state.heightFoot * 30.48)
        const kgWeight = (this.state.weight / 2.205)
        const maleOption = Math.round(((66 + (13.7 * kgWeight) + (5 * cmHeight) - (6.8 * this.state.age))) * this.state.level);
        const femaleOption = Math.round(((655 + (9.6 * kgWeight) + (1.8 * cmHeight) - (4.7 * this.state.age))) * this.state.level);
        const calcCalories = (this.state.gender === 1 ? maleOption : femaleOption);
        console.log(this.state);
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
                    <h1>Basics of nutrition for training</h1>
                    <p>
                        In order to make the most out of your training journey, it is important
                        to know the basics about nutrition and lifting. This section is
                        dedicated to giving absolute beginners a foundation of knowledge in
                        order to maximize results.
                    </p>
                    <h2 class="mt-4">Nutrition</h2>
                    <p>Before we dive into lifting, we will cover some basic information about calories, macronutrients,
                        micronutrients, and supplements.</p>
                    <h5>Calories</h5>
                    <p>Calories are used to describe the energy amount that can be gained from consuming any given food or drink.
                        This is the top number on any nutrition label you will see, it represents the sum total of all the
                        nutrients.
                        Everyone needs to take in a certain amount of calories per day based upon several factors;</p>
                    <ul>
                        <li>Height</li>
                        <li>Weight</li>
                        <li>Age</li>
                        <li>Gender</li>
                        <li>Activity Levels</li>
                    </ul>
                    
                    <div class="thumbnail">
                        <div class="caption">
                            <h5>Total Daily Energy Expenditure (TDEE)</h5>
                            <p>The calories required per day to maintain your current weight is commonly abbreviated as TDEE (total
                                daily energy expenditure). When trying to gain or lose weight this is the primary number used to
                                determine how much you should be eating. </p>
                            <div class="font-weight-bold">- Below you can calculate your TDEE-</div>
                            <div><TDEEform handleChange={this.handleChange} /></div>
                        </div>
                    </div>
                    <h2 class="my-4">Daily Calories:
                        <span class="mx-3">{calcCalories}</span>
                    </h2>
                    <h5 class="mt-2">Macronutrients</h5>
                    <p>Macronutrients are the largest types of nutrients that make up calories in the things we eat. In the context
                        of fitness and weight training we are primarily interested in 3 major macronutrients;</p>
                    <h6>Protein</h6>
                    <p>Proteins are the building blocks your body uses to grow, build, and repair. This macronutrient is primarily
                        found in meats, poultry, fish, eggs, milk, and other animal products. There are also many plant based
                        protein sources like beans, lentils, nuts, seeds, and some leafy greens. When it comes to weight training
                        and muscle building protein is one of the most important macronutrients since they provide the building
                        materials to grow.</p>
                    <h6>Carbohydrates</h6>
                    <p>Carbohydrates are the most readily usable sources of energy for the cells. With the exception of fiber, all
                        carbohydrates get broken down into simple sugars. Although they sometimes have a bad reputation, due to
                        raising insulin levels (AKA blood sugar), they are vital and necessary in order to maintain energy levels
                        especially when dieting or trying to lose weight.
                    </p>
                    <h6>Fat</h6>
                    <p>
                        Fats are similar to carbohydrates, but they are more dense and as a result contain more calories. While many fad diets may demonize them, fats
                        contribute towards certain hormones, absorption of fat soluble vitamins, and energy
                        storage.</p>
                    <h2>Weight Loss and Gain</h2>
                    <p>When it comes to weight loss or weight gain it's often easy to get confused or discouraged due to the many
                        diets out there. Since there is a very large economy around weight loss, a lot of the information of how to
                        do it is shrouded intentionally. There are countless diets out there all claiming to magically make it
                        easier. But for any of them to work one fundamental criteria must be met.</p>
                    <ul>
                        <li><strong>In order to GAIN weight you must consume more calories than you need per day.</strong></li>
                        <li><strong>In order to LOSE weight you must consume less calories than you need per day.</strong></li>
                    </ul>
                    <h6>Example Application</h6>
                    <p>A common method used to gain or lose weight is to simply calculate your TDEE and either add or subtract 200-500 calories from the result. A smaller deficit/surplus is typically easier to follow but obviously will result in slower results. Below is an example table showing the calories needed to gain or lose weight for someone with a TDEE of {calcCalories} calories.</p>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>
                                    -/+ calories
                                </th>
                                <th>
                                    Losing Weight
                                    <span class="font-weight-normal"></span>
                                </th>
                                <th>
                                    Gaining Weight
                                    <span class="font-weight-normal"></span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0 calories</td>
                                <td>{calcCalories} cal</td>
                                <td>{calcCalories} cal</td>
                            </tr>
                            <tr>
                                <td>200 calories</td>
                                <td>{calcCalories - 200} cal</td>
                                <td>{calcCalories + 200} cal</td>
                            </tr>
                            <tr>
                                <td>500 calories</td>
                                <td>{calcCalories - 500} cal</td>
                                <td>{calcCalories + 500} cal</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </body >
        );
    }
}

export default NutritionPage;