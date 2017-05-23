import React from 'react';

export default (props) => {
    return (
        <div>
            <div className="col-md-4">
                <h2>{props.title}</h2>
            </div>
            <div className="col-md-8">
                <ul>
                    {props.data}
                </ul>
            </div>
        </div>
    );
}
