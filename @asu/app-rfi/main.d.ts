import React from "react";

export interface RFIProps {
  appPathFolder?: string;
  campus?: string;
  actualCampus?: string;
  college?: string;
  department?: string;
  studentType?: string;
  areaOfInterest?: string;
  programOfInterest?: string;
  programOfInterestOptional?: boolean
  isCertMinor?: boolean
  country?: string
  stateProvince?: string
  successMsg?: string
  test?: boolean
  dataSourceDegreeSearch?: string
  dataSourceAsuOnline?: string
  dataSourceCountriesStates?: string
  ubmissionUrl: string
}

export const AsuRfi: React.FunctionComponent<RFIProps>
