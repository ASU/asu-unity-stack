import React from "react";

export default (content) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          {content}
        </div>
        <div className="col-4">
          {content}
        </div>
        <div className="col-4">
          {content}
        </div>
      </div>
    </div>
  )
}
