import React from 'react';

const Display = props => {
    return(
        <div>
            <h2>Display</h2>
            <div>
                <h4>Balls:</h4>
                <p>{props.balls}</p>
            </div>

            <div>
                <h4>Strikes:</h4>
                <p>{props.strikes}</p>
            </div>
        </div>
    );
}

export default Display;