import React, {Component } from 'react';
import Image from '../components/images/myprofpic.jpg';
import {HashLink as Link} from "react-router-hash-link";

export default class Profile extends Component {
    render(){
        return(
            <div>
                <div className="card">
                    <div className="card-image">
                        <img className="activator" src={Image} alt="Tendai C Chikwape"></img>
                        <Link className="btn-floating halfway-fab waves-effect wave-light grey">
                            <i className="material-icons activator" more_vert></i>
                        </Link>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            Tendai Clive Chikwape
                        </span>
                        <p>Junior Software Developer</p>
                    </div>
                    <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                        Follow me!
                        <i className="material-icons right">close</i>
                    </span>
                    <p className="flex-container">
                        <i class="fab fa-facebook grey-text text-darken-4 social style"></i>
                        <i class="fab fa-twitter grey-text text-darken-4 social style"></i>
                        <i class="fab fa-instagram grey-text text-darken-4 social style"></i>
                        <i class="fab fa-linkeIn grey-text text-darken-4 social style"></i>
                    </p>
                    </div>
                </div>
            </div>
        );
            
    }
}
