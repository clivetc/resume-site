import React, {Component } from 'react';

export default class Experience extends Component {
    render(){
        return(
        <div className="card">
            <div className="card-content">
                <div>
                    <h6>
                        <strong>Experience</strong>
                    </h6>
                    <div className="row">
                        <div className="col s12 m4 l4 xl4">
                            <p className="teal year_exp white-text">
                                July<strong>2019</strong> - Sep <strong>2019</strong>
                            </p>
                        </div>
                        <div className="col s12 m8 l8 x 18">
                            <blockquote className="no-pad">
                                <h6 className="no-pad mt-bottom">
                                    <strong>Software Developer - Intern</strong><br/>
                                    <strong>Near East University - Robotics Lab</strong>
                                </h6>
                                <p>As part of my prerequisite at my university I am allocated 45 days
                                    to do my Internship training. I did my internship at the Robotics Lab at 
                                    Near East University. I worked with arduino on different projects, I also
                                    worked with Raspberry pi. I also combined raspberry pi and arduino on some 
                                    projects.</p>
                            </blockquote>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m4 l4 xl4">
                            <p className="teal year_exp white-text">
                                Jan<strong>2011</strong> - Dec <strong>2011</strong>
                            </p>
                        </div>
                        <div className="col s12 m8 l8 x 18">
                            <blockquote className="no-pad">
                                <h6 className="no-pad mt-bottom">
                                    <strong>Assistant Teacher</strong><br/>
                                    <strong>Kamhonde Primary School - Ministry of Education</strong>
                                </h6>
                                <p>In my first term and second term I taught a grade 3 class and I was also incharge
                                    of all sporting activities which went on to win all competitions when I was in charge. 
                                    In my final term I taught a grade 6 class.</p>
                                </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
            
    }
}
