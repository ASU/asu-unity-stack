// @ts-check
import React from "react";

const RequestInfo = () => (
  <div className="reqInfo">
    <a
      className="btn btn-maroon btn-sm btn-block"
      href="https://requestinfo.asu.edu/request-info?prog=UGHI&amp;plan=FAMUSTTBM&amp;name=Theory+and+Composition+%28Theory%29&amp;contact=MDTAdmissions@asu.edu"
      target="_blank"
      rel="noreferrer"
    >
      Request Info
    </a>
  </div>
);

const ApplyNow = () => (
  <div>
    <button
      type="button"
      className="btn btn-gold btn-sm btn-block tt_Apply"
      data-toggle="modal"
      data-target="#myModal_"
    >
      Apply Now
    </button>
  </div>
);

export { RequestInfo, ApplyNow };
