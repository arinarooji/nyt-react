import React from 'react';

const Search = props => (
    <div>
        <div className="row">
            <div className="col-sm-12">
                <br/>
                <div className="card panel-primary">
                    <div className="card-header text-center">
                        <h3 className="panel-title"><strong><i className="fas fa-list"></i>   {props.name}</strong></h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="search">Topic</label>
                                <input type="text" className="form-control" id="search-term"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="start-year">Start Year (Optional)</label>
                                <input type="text" className="form-control" id="start-year"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="end-year">End Year (Optional)</label>
                                <input type="text" className="form-control" id="end-year"/>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Search;