import React, {Component } from 'react';
import {HashLink as Link} from 'react-router-hash-link';

export default class Portfolio extends Component {
    render(){
        return(
        <div>
            <Link to={{pathname:"https://clivetc.github.io/"}} className="btn blue lighten-2">
                View
            </Link>
        </div>
        );     
    }
}
