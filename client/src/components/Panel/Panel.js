import React from "react";
 
const Panel = props => (
  <div className="panel panel-primary mb-4 p-4 bg-info rounded">
    <div className="panel-heading">
   
      <h1 className="panel-title">
        <strong>
          <i className={`fa fa-${props.icon}`} aria-hidden="true" /> {props.title}
        </strong>
      </h1>
    </div>
    <div className="panel-body">{props.children}</div>
  </div>
);

export default Panel;