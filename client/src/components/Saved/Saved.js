import React from 'react';

const Saved = props => (
  <div className="row mb-4">
    <div className="col-sm-12">
      <br/>
      <div className="card panel-primary">
        <div className="card-header text-center">
          <h3 className="panel-title"><strong><i className="fas fa-bookmark"></i>   Saved Articles</strong></h3>
        </div>
        <div className="card-body" id="saved-articles">
          <p>Saved articles appear here</p>
        </div>
      </div>
    </div>
  </div>
);

export default Saved;