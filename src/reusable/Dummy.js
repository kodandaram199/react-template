/**
 * Created by kodanda_rama on 7/7/17.
 */
import React from 'react';

const DummyComponent = ({ text }) =>{
        return(
            <div className="container">
                <div className="container-padding card dummy">
                    <h1>{text}</h1>
                </div>
            </div>
        )
    };

export default DummyComponent;