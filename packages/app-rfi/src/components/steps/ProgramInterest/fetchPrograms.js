// Fetch degree data from Degree Search REST API.
// Returns the full degree dataset for the given program (undergrad | graduate).
// We do filtering in useEffect()s to manage filtering logic for our various

import { KEY } from "../../../core/utils/constants";

// field options.
export async function fetchDegreesData({
  dataSourcePotLuck,
  dataSourceDegreeSearch,
  dataSourceAsuOnline,
  Campus,
  CareerAndStudentType,
}) {
  let serviceUrl;
  let program;

  // ASUOnline API
  if (Campus === KEY.ONLINE) {
    program =
      CareerAndStudentType === KEY.READMISSION
        ? KEY.GRADUATE
        : KEY.UNDERGRADUATE; // full word "undergraduate"
    serviceUrl = `${dataSourceAsuOnline}?category=${program}`;
    return (
      fetch(serviceUrl, {
        headers: {
          // eslint-disable-next-line prettier/prettier
          Accept: "application/json",
        },
      })
        // Handle as text first due to encoding issues.
        .then(response => response.json())
        .then(data => data)
        .catch(error => new Error(error))
    );
  }
  // TODO REMVOE FOR DPL
  if (dataSourcePotLuck !== "" && true) {
    program = CareerAndStudentType === KEY.READMISSION ? KEY.GR : KEY.UG;

    serviceUrl =
      `${dataSourcePotLuck}?degreeType=${program}` +
      `&include=degreeDescriptionShort` +
      `&include=degreeDescriptionLong` +
      `&include=campusesOffered` +
      `&include=planCategories` +
      `&include=degreeType`;

    return fetch(serviceUrl)
      .then(response => response.json())
      .then(data => data)
      .catch(error => new Error(error));
  }

  // Degree Search REST API
  program =
    CareerAndStudentType === KEY.READMISSION ? KEY.GRADUATE : KEY.UNDERGRAD;

  serviceUrl = `${dataSourceDegreeSearch}?init=false&method=findAllDegrees&fields=Descr100,Degree,CollegeAcadOrg,CollegeDescr100,DepartmentCode,DepartmentName,AcadPlanType,AcadPlan,AcadProg,AcadProg,planCatDescr,CampusStringArray&program=${program}&cert=false`;

  return fetch(serviceUrl)
    .then(response => response.json())
    .then(data => data)
    .catch(error => new Error(error));
}

// Fetch a single degree record by the acadPlan (aka Program of Interest, aka
// Interest2) from DS REST API. Results include ONLNE results, so haven't
// implemented dual logic for ASUOnline. Doesn't seem to be required by the
// use cases, either.
export async function fetchDegreeByAcadPlan(
  dataSourcePotLuck,
  dataSourceDegreeSearch,
  acadPlan
) {
  // TODO Still need DPL version
  // TODO Confirm we don't need to add support for ASUOnline lookup?

  const serviceUrl = `${dataSourceDegreeSearch}?init=false&method=findDegreeByAcadPlan&acadPlan=${acadPlan}&fields=Descr100,Degree,CollegeAcadOrg,CollegeDescr100,DepartmentCode,DepartmentName,AcadPlanType,AcadPlan,AcadProg,AcadProg,planCatDescr,CampusStringArray&cert=false`;
  return fetch(serviceUrl)
    .then(response => response.json())
    .then(data => data)
    .catch(error => new Error(error));
}
