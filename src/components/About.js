import React, {Component } from 'react';

export default class About extends Component {
    render(){
        return( 
            <div>
                <div className='card'>
                    <div className='card-container'>
                        <h6 className='mt-bottom'>
                            <strong>ABOUT ME</strong>
                        </h6>
                        <p className="grey-text">
                        I am well-presented candidate, I am a dynamic, well-spoken and vibrant individual who is intrigued by cutting edge technology. I describe myself as creative, determined, social and an ambitious individual who is never limited by boundaries. I am driven by pushing the boundaries of the ordinary and creating the best out of every situation. I am dedicated to my work and  go extra an mile to get my job done to satisfactory. 
                        </p>
                    </div>
                    <div className='card-action'>
                        <h6>
                            <strong>PERSONAL INFORMATION</strong>
                        </h6>
                        <div className="row mt">
                            <div className="col s12 m6 l6 xl6">
                                <p><strong>Phone:</strong>+90 533 853 0834</p>
                                <p><strong>Email:</strong>clivetc@live.com</p>
                                <p><strong>Address:</strong>SHT Kemal Unal Caddesi, No.69, Lefkosia, Cyprus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );    
    }
}
