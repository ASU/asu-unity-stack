import React from "react";

export default (content) => {
  return (
    <div className="container">
      <div className="row">
        <div id="html-root" className="col-3">
          {content}
        </div>
        <div className="col-3">
          {content}
        </div>
        <div className="col-3">
          {content}
        </div>
        <div className="col-3">
          {content}
        </div>
      </div>
    </div>
  )
}
