import { Link } from 'react-router-dom';


function LandingPage() {
    return (
        <body class="landing-page">
            <section class="nav-section">
                <nav class="navbar navbar-expand sticky-top">
                    <a class="navbar-brand text-light" to='/home'>Simply Fit</a>
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
            </section>
            <header class="jumbotron jumbotron-fluid bg-image main-wrapper">
                <div class="container my-3">
                    <div class="row">
                        <div class="col">
                            <h1 class="display-1 text-light mt-5">Simplifying Fitness</h1>
                            <p class="lead display-4 text-light">Fitness For Anyone</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col text-right">
                            <Link to="/nutrition"><button class="btn-lg bn3 mx-3">Learn</button></Link>
                            <Link to="/options"><button class="btn-lg bn3 mx-3">Train</button></Link>
                        </div>
                    </div>
                </div>
            </header>
            <section class="infoSection" id="about">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                            <h2 class="text-white mt-0">ABOUT</h2>
                            <p class="text-white-50 mb-5">Simply Fit is a place for beginners to take their first step torwards meeting their fitness goals.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="infoSection" id="nutrition">
                <div class="container">
                    <div class="row justify-content-end">
                        <div class="col-8 text-right">
                            <h2 class="text-white mt-0">NUTRITION</h2>
                            <p class="mb-5 text-white">Learn the basics of nutrition, and get a better understanding of how to fuel yourself to reach your goals.</p>
                            <Link class="btn btn-light btn-xl" to="/nutrition">Get Started!</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section class="infoSection" id="training">
                <div class="container">
                    <div class="row justify-content-start">
                        <div class="col-6 text-left">
                            <h2 class="text-white mt-0">TRAINING</h2>
                            <p class="text-white mb-5">Explore the ideas and concepts that go into fitness and weight training.</p>
                            <Link class="btn btn-light btn-xl" to="/education">Get Started!</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section class="infoSection" id="programBuilder">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-8 text-center">
                            <h2 class="text-white mt-0">PROGRAM BUILDER</h2>
                            <p class="text-white mb-5">Use our routine maker to find a program for your specific goals.</p>
                            <Link class="btn btn-light btn-xl" to="/options">Get Started!</Link>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    );
}

export default LandingPage;

