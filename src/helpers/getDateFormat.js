/**
 * @param {string} weatherDate
 * @return {string}
 */

export const getDateFormat = (weatherDate) => {
  let date = new Date(weatherDate);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return dt + "/" + month + "/" + year;
};

export default getDateFormat;
