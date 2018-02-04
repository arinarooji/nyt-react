import React from 'react';

const SearchBtn = props => (
    <div>
        <button type="button" className="btn btn-primary" id="run-search" onClick={props.onClick}>
            <i className="fa fa-search"></i> Search
        </button>
    </div>
);

export default SearchBtn;