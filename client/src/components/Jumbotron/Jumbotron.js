import React from 'react';

const Jumbotron = props => (
    <div>
        <div className="jumbotron bg-primary">
            <h1 className="text-center"><strong><i className="far fa-newspaper"></i>{props.name}</strong></h1>
            <h2 className="text-center">{props.edition}</h2>
        </div>
    </div>
);

export default Jumbotron;