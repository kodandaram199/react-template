/**
 * Created by kodanda_rama on 7/5/17.
 */
import React, { Component } from 'react';

export default class Card extends Component{
    render(){
        return(
            <div className="card">
                <div className="shaded-image">
                    <img src={this.props.img} alt="Avatar" style={{width:"100%"}}/>
                </div>
                <div className="contain">
                    <h4><b>{this.props.heading}</b></h4>
                    <p>{this.props.para}</p>
                </div>
            </div>
        )
    }
}