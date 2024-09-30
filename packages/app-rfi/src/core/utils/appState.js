import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import { variants } from "../../components/appVariants";
import { CertInfo } from "../../components/steps/CertInfo";
import { Success } from "../../components/steps/Success";
import { KEY } from "./constants";
import { fetchDegreesData } from "./fetchPrograms";
import { rfiSubmit } from "./submission-helpers";

const defaultVariant = "rfiVariant2";

const gradPropToFormValue = type => {
  if (type === KEY.GRADUATE) {
    return KEY.READMISSION;
  }
  if (type === KEY.UNDERGRAD) {
    return KEY.FRESHMAN;
  }
  return undefined;
};

export const betterPropNames = props => ({
  filterByCampusCode: props.actualCampus,
  filterByCollegeCode: props.college,
  filterByDepartmentCode: props.department,
  setValuePOI: props.programOfInterest,
  setInitialValueCampusType: props.campus,
  setInitialValueAOI: props.areaOfInterest,
  setInitialValueGradType: gradPropToFormValue(props.studentType),
  ...props,
});

const getInitialValues = props => ({
  Campus: props.setInitialValueCampusType,
  CareerAndStudentType: props.setInitialValueGradType,
  Interest1: props.setInitialValueAOI,
  Interest2: props.setValuePOI,
  EmailAddress: undefined,
  FirstName: undefined,
  LastName: undefined,
  Phone: undefined,
  ZipCode: undefined,
  EntryTerm: undefined,
  GdprConsent: false,
  CitizenshipCountry: undefined,
  // Street1: undefined,
  // City: undefined,
  // State: props.stateProvince,
  Country: props.country,
  Zip: undefined,
  // BirthDate: undefined,
  MilitaryStatus: "None",
  // Comments: undefined,
  // Email: undefined,
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
    isCertMinor,
  } = props;
  const [loaded, setLoaded] = useState(false);
  const [forceUpdatedPlan, setForceUpdatedPlan] = useState();
  const [campusProgramHasChoice, setCampusProgramHasChoice] = useState();
  const [stepNumber, setStepNumber] = useState(0);
  const steps = variants[variant] || variants[defaultVariant];
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
    // Fetch the selected acadPlan
    const fetchData = async () => {
      let Interest2 = props.programOfInterest || formik.values.Interest2;
      Interest2 = Interest2 === KEY.FALSE_EMPTY ? undefined : Interest2;
      // If
      if (Interest2) {
        fetchDegreesData({
          dataSourceDegreeSearch,
          dataSourceAsuOnline,
          CareerAndStudentType: formik.values.CareerAndStudentType,
          Campus: formik.values.CampusProgramHasChoice || formik.values.Campus,
          Interest2,
        }).then(([response, data]) => {
          if (response === "Error") {
            // eslint-disable-next-line no-console
            console.error(data);
            return;
          }

          if (test) {
            // @ts-ignore
            console.log(data[0]);
          }
          const { emailAddr, planType } = data[0];
          setDegreeData(data[0]);
          if (emailAddr) {
            setCertMinorEmail(emailAddr);
          }
          setLoaded(true);
        });
      } else {
        setLoaded(true);
      }
    };

    fetchData();
  }, [formik.values.Interest2]);

  useEffect(() => {
    // Fetch List of acadPlans
    const fetchData = async () => {
      fetchDegreesData({
        dataSourceDegreeSearch,
        dataSourceAsuOnline,
        filterByDepartmentCode,
        filterByCollegeCode,
        filterByCampusCode,
        Campus: formik.values.CampusProgramHasChoice || formik.values.Campus,
        CareerAndStudentType: formik.values.CareerAndStudentType,
      }).then(([response, data]) => {
        if (response === "Error") {
          // eslint-disable-next-line no-console
          console.error(data);
          return;
        }
        if (test) {
          // @ts-ignore
          console.log(data);
        }
        setDegreeDataList(data);

        if (
          formik.values.Interest2 &&
          formik.values.Interest2 !== KEY.FALSE_EMPTY
        ) {
          const selectedDegree = data.find(
            plan =>
              plan.acadPlanCode === formik.values.Interest2 || // check for PLAN pattern
              plan.acadCode === formik.values.Interest2 // check for PROGRAM-PLAN pattern
          );
          if (selectedDegree?.acadPlanKey) {
            setForceUpdatedPlan(selectedDegree.acadPlanKey);
          }
        }
      });
    };

    if (loaded) {
      fetchData();
    }
  }, [
    loaded,
    formik.values.CampusProgramHasChoice,
    formik.values.Campus,
    formik.values.CareerAndStudentType,
    filterByDepartmentCode,
    filterByCollegeCode,
    filterByCampusCode,
  ]);

  const returnObject = {
    forceUpdatedPlan,
    campusProgramHasChoice,
    setCampusProgramHasChoice,
    degreeDataList,
    degreeData,
    showForm: true,
    showStepButtons: true,
    props,
    formik,
    handleBack,
    step,
    totalSteps,
    stepNumber,
  };

  // ERFI-159 Do not render if a programOfInterest prop has rfiDisplay = false
  // 'showForm' will allow the root '/AsuRfi/index.js` to exit before rendering
  if (props.programOfInterest && degreeData.rfiDisplay === false) {
    returnObject.showForm = false;
    return returnObject;
  }

  // ERFI-58 Always show CertInfo page if prop is true
  if (isCertMinor) {
    returnObject.showStepButtons = false;
    returnObject.step = (
      <CertInfo certMinorEmail={certMinorEmail} successMsg={props.successMsg} />
    );
    return returnObject;
  }

  if (success) {
    returnObject.showStepButtons = false;
    returnObject.step = <Success successMsg={props.successMsg} />;

    return returnObject;
  }

  return returnObject;
};
