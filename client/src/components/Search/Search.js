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
                                <label for="search">Topic</label>
                                <input type="text" className="form-control" id="search-term"/>
                            </div>
                            <div className="form-group">
                                <label for="start-year">Start Year (Optional)</label>
                                <input type="text" className="form-control" id="start-year"/>
                            </div>
                            <div className="form-group">
                                <label for="end-year">End Year (Optional)</label>
                                <input type="text" className="form-control" id="end-year"/>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary" id="run-search"><i className="fa fa-search"></i> Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Search;