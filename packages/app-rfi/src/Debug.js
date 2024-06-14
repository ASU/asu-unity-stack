import React from "react";

import { RfiContext } from "./core/utils/rfiContext";

export const Debug = () => (
  <RfiContext.Consumer>
    {({
      props: { test },
      formik: { validationSchema, validate, onSubmit, ...rest },
    }) =>
      test && (
        <div
          style={{
            margin: "1rem",
            borderRadius: 4,
            background: "#f6f8fa",
            boxShadow: "0 0 1px  #eee inset",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        >
          <div
            style={{
              textTransform: "uppercase",
              fontSize: 11,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              fontWeight: 500,
              padding: ".5rem",
              background: "#555",
              color: "#fff",
              letterSpacing: "1px",
            }}
          >
            Formik State
          </div>
          <pre
            style={{
              fontSize: ".85rem",
              padding: ".25rem .5rem",
              overflow: "auto",
              resize: "both",
              width: "30vw",
              height: "30vh",
            }}
          >
            {JSON.stringify(rest, null, 2)}
          </pre>
        </div>
      )
    }
  </RfiContext.Consumer>
);
