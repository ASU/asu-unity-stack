// @ts-check

const formatCompleteDate = date => {
  const newDate = date.toLocaleDateString("en-US", {
    timeZone: "UTC",
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return newDate;
};

const stringifyDate = date => {
  const stringifiedDate = date.toLocaleString("en-US", {
    timeZone: "UTC",
  });
  return stringifiedDate;
};

const standardizeTime = date => {
  let standardizedDate = date.split("T");
  standardizedDate =
    standardizedDate.length > 1
      ? standardizedDate.join("T")
      : `${standardizedDate[0].split(":")[0]}T00:00:00Z`;
  return standardizedDate;
};

const formatAMPM = date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "p.m." : "a.m.";
  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${minutes} ${ampm}`;
};

/**
 *
 * @param {string} startTime
 * @param {string} endTime
 * @returns {string}
 */
export const formatTime = (startTime, endTime) => {
  const standardizedStartTime = standardizeTime(startTime);
  const standardizedEndTime = standardizeTime(endTime);
  let formatedStartTime = stringifyDate(new Date(standardizedStartTime));
  let formatedEndTime = stringifyDate(new Date(standardizedEndTime));
  formatedStartTime = formatAMPM(new Date(formatedStartTime));
  formatedEndTime = formatAMPM(new Date(formatedEndTime));
  if (startTime === endTime) {
    return formatedStartTime;
  }
  return `${formatedStartTime} - ${formatedEndTime}`;
};

/**
 *
 * @param {string} date
 * @param {"ISO" | "COMPLETE"} format
 * @returns {string}
 */
export const formatDate = (date, format) => {
  const standardizedDate = standardizeTime(date);
  const responses = {
    ISO: standardizedDate.split("T")[0],
    COMPLETE: formatCompleteDate(new Date(standardizedDate)),
  };
  return responses[format];
};
