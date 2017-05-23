import React from 'react';

export default (props) => {
    return (
            <li key={props.subject.toString()}>
                <input
                    type="button"
                    className="btn"
                    value={props.subject}
                    onClick={event => props.onInputChange(event.target.value)} />
            </li>
    );
}
