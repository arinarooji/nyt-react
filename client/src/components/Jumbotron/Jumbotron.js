import React from 'react';

const Jumbotron = props => (
    <div>
        <div className="jumbotron">
            <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i>{props.name}</strong></h1>
        </div>
    </div>
);

export default Jumbotron;