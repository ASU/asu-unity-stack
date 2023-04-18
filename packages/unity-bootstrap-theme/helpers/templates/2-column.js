import React from "react";

export default (content) => {
  return (
    <div class="container">
      <div class="row">
        <div id="html-root" class="col-6">
          {content}
        </div>
        <div class="col-6">
          {content}
        </div>
      </div>
    </div>
  )
}
