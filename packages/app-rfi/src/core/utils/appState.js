import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import { variants } from "../../components/appVariants";
import { CertInfo } from "../../components/steps/CertInfo";
import { Success } from "../../components/steps/Success";
import { KEY } from "./constants";
import { fetchDegreesData } from "./fetchPrograms";
import { pushDataLayerEventToGa, setClientId } from "./google-analytics";
import {
  submissionFormFieldPrep,
  submissionSetHiddenFields,
} from "./submission-helpers";

const rfiSubmit = (value, submissionUrl, test, callback = () => ({})) => {
  // MARSHALL FIELDS FOR THE PAYLOAD

  let payload = value;
  payload = submissionFormFieldPrep(payload);
  payload = submissionSetHiddenFields(payload, test);

  // Patch ASUOnline clientid or enterpriseclientid and also
  // ga_clientid onto payload.
  // TODO Confirm sourcing for ga_clientid
  payload = setClientId(payload);

  // Google Analytics push to simulate submit button click
  // after validation has occurred.
  pushDataLayerEventToGa("rfi-submit");

  if (test) {
    // eslint-disable-goNext-line no-alert
    alert(`SUBMITTED FORM \n${JSON.stringify(payload, null, 2)}`);
  }

  return fetch(
    // NOTE: You can use relative URL for submission to client
    // site proxy endpoint.
    `${submissionUrl}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // We convert the payload to JSON and send it as the
      // POST body.
      body: JSON.stringify(payload),
    }
  )
    .then(response => response.json())
    .then(response => {
      // eslint-disable-goNext-line no-console
      callback(response);
    });
};

export const betterPropNames = props => ({
  variant: props.variant || "rfiVariant1",
  campusCode: props.actualCampus,
  collegeAcadOrg: props.college,
  departmentAcadOrg: props.department,
  isTypeGraduate: props.studentType === "graduate",
  ...props,
});

const getInitialValues = props => ({
  Campus: props.campus,
  CareerAndStudentType: props.studentType,
  Interest1: props.areaOfInterest,
  Interest2: props.programOfInterest,
  EmailAddress: undefined,
  FirstName: undefined,
  LastName: undefined,
  Phone: undefined,
  ZipCode: undefined,
  EntryTerm: undefined,
  GdprConsent: false,
  CitizenshipCountry: undefined,
  Street1: undefined,
  City: undefined,
  State: props.stateProvince,
  Country: props.country,
  Zip: undefined,
  BirthDate: undefined,
  MilitaryStatus: "No",
  Comments: undefined,
  Email: undefined,
});

/**
 * @param {import("../types/rfi-types").RFIProps} props
 * @returns {}
 */
export const useRfiState = props => {
  const {
    variant,
    test,
    dataSourceDegreeSearch,
    dataSourceAsuOnline,
    filterByDepartmentCode,
    filterByCollegeCode,
    filterByCampusCode,
    submissionUrl,
  } = props;
  const [stepNumber, setStepNumber] = useState(0);
  const steps = variants[variant] || variants["rfiVariant1"];
  const [snapshot, setSnapshot] = useState(getInitialValues(props));

  const step = steps[stepNumber] || steps[0]; // catch Storybook edge case
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const [degreeDataList, setDegreeDataList] = useState([]);
  const [certMinorEmail, setCertMinorEmail] = useState("");
  const [degreeData, setDegreeData] = useState({});
  const [success, setSuccess] = useState();

  const goNext = values => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

  const handleBack = () => {
    // setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

  const handleStepValidate = values => {
    const result = step.props.validate
      ? step.props.validate(values, props)
      : {};
    return result;
  };

  const handleSubmit = async (values, bag) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      rfiSubmit(values, submissionUrl, test, () => setSuccess(true));
      return;
    }
    bag.setTouched({});

    goNext(values);
  };

  const formik = useFormik({
    initialValues: snapshot,
    validate: handleStepValidate,
    onSubmit: handleSubmit,
    validationSchema: Yup.object(step.props.validationSchema),
  });

  useEffect(() => {
    const fetchData = async () => {
      const Interest2 = props.programOfInterest || formik.values.Interest2;
      if (Interest2 && formik.values.Campus !== KEY.ONLINE) {
        fetchDegreesData({
          dataSourceDegreeSearch: props.dataSourceDegreeSearch,
          Interest2,
        }).then(([response, data]) => {
          if (response === "Error") {
            // eslint-disable-next-line no-console
            console.error(data);
            return;
          }
          const { emailAddr, planType } = data[0];
          setDegreeData(data[0]);
          if (props.isCertMinor && emailAddr && planType === KEY.CER) {
            setCertMinorEmail(emailAddr);
          }
        });
      }
    };

    fetchData();
  }, [formik.values.Interest2]);

  useEffect(() => {
    const fetchData = async () => {
      fetchDegreesData({
        dataSourceDegreeSearch,
        dataSourceAsuOnline,
        filterByDepartmentCode,
        filterByCollegeCode,
        filterByCampusCode,
        Campus: formik.values.Campus,
        CareerAndStudentType: formik.values.CareerAndStudentType,
      }).then(([response, data]) => {
        if (response === "Error") {
          // eslint-disable-next-line no-console
          console.error(data);
          return;
        }
        if (test && window) {
          // @ts-ignore
          window.degreeData = data;
        }
        setDegreeDataList(data);
      });
    };

    fetchData();
  }, [formik.values.Campus, formik.values.CareerAndStudentType]);

  const returnObject = {
    degreeDataList,
    degreeData,
    showStepButtons: true,
    props,
    formik,
    handleBack,
    step,
    totalSteps,
    stepNumber,
  };

  if (certMinorEmail) {
    returnObject.showStepButtons = false;
    returnObject.step = (
      <CertInfo certMinorEmail={certMinorEmail} successMsg={props.successMsg} />
    );
    return returnObject;
  }

  if (!success) {
    returnObject.showStepButtons = false;
    returnObject.step = <Success successMsg={props.successMsg} />;

    return returnObject;
  }

  return returnObject;
};
