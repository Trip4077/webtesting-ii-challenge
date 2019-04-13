import React from 'react';
import Display from '../Display/Display';

const Dashboard = props => {
    return(
        <div>
            <h2>Dashboard</h2>

            <Display balls={props.balls} strkes={props.strikes} />

            <div>
                <button>Strike</button>
                <button>Ball</button>
                <button>Fowl</button>
                <button>Hit</button>
            </div>
        </div>
    );
}

export default Dashboard;