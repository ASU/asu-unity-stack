import React from "react";

export default (content) => {
  return (
    <div class="container">
      <div class="row">
        <div id="html-root" class="col-4">
          {content}
        </div>
        <div class="col-4">
          {content}
        </div>
        <div class="col-4">
          {content}
        </div>
      </div>
    </div>
  )
}
