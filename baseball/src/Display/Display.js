import React from 'react';

const Display = props => {
    return(
        <div>
            <h2>Display</h2>

            <h4>Balls:</h4>
            <div>
                <p data-testid='balls'>{props.balls}</p>
            </div>

            <h4>Strikes:</h4>
            <div>
                <p data-testid='strikes'>{props.strikes}</p>
            </div>
        </div>
    );
}

export default Display;