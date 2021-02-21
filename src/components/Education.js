import React, {Component } from 'react';

export default class Education extends Component {
    render(){
        return(
        <div>
            <div className="card">
                <div className="card-content">
                    <h6><strong>Education</strong></h6>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Date-of-issue</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>BSc Computer Information Systems</td>
                                <td>Jan 2021</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Telecommuincation Systems part Diploma</td>
                                <td>June 2013</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Telecommuincation Systems Certificate</td>
                                <td>Jan 2021</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        );    
    }
}
