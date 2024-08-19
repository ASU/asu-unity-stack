/* eslint-disable react/no-danger */
// @ts-check
import React from "react";

import { sanitizeDangerousMarkup } from "../../../../../shared";
import { useRfiContext } from "../../core/utils/rfiContext";

// Component

export const Success = () => {
  const { successMsg } = useRfiContext();
  return (
    <div className="rfi-submitted">
      <i
        className="fas fa-check-circle rfi-submitted-icon"
        style={{ fontSize: "6rem", color: "#78BE20" }}
        aria-hidden="true"
      />
      <div className="rfi-submitted-sub-icon">Submitted</div>
      <h3 className="h2">Thank you for your interest in ASU.</h3>
      {successMsg ? (
        <div
          className="rfi-success-msg-wrapper"
          dangerouslySetInnerHTML={sanitizeDangerousMarkup(successMsg)}
        />
      ) : (
        <>
          <p>
            We’re interested in you too! You’ll be receiving more information
            from us soon. Until then, here are several ways for you to explore
            ASU.
          </p>
          <h4>Visit campus and see for yourself</h4>
          <p>
            We encourage you to plan a visit to campus to see for yourself what
            Sun Devil life is like. ASU offers year-round campus tours at all
            five ASU locations to give you a firsthand look at student life.
          </p>
          <div className="uds-buttons">
            <a
              className="btn btn-primary"
              href="https://visit.asu.edu/schedule"
              data-ga="btn-primary link"
              data-ga-name="onclick"
              data-ga-event="link"
              data-ga-action="click"
              data-ga-type="internal link"
              data-ga-region="main content"
            >
              Schedule a visit
            </a>
            <a
              className="btn btn-primary"
              href="https://tour.asu.edu"
              data-ga="btn-primary link"
              data-ga-name="onclick"
              data-ga-event="link"
              data-ga-action="click"
              data-ga-type="internal link"
              data-ga-region="main content"
            >
              Take a virtual tour
            </a>
          </div>
          <h4>Take the next step</h4>
          <p>
            If you’re ready,{" "}
            <a href="https://admission.asu.edu/apply">apply to ASU</a> today.
            Your admission specialist can help answer any questions you have
            about the enrollment process or becoming a Sun Devil. If you are an
            on-campus student,{" "}
            <a href="https://admission.asu.edu/contact/undergraduate">
              contact your admission representative.
            </a>
          </p>
          <p>
            <strong>It’s time to be a Sun Devil!</strong>
          </p>
        </>
      )}
    </div>
  );
};
