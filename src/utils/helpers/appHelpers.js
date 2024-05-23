import moment from 'moment';

export const transformObjectToDotNotation = (obj, prefix = "", result = []) => {
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (!value) return;

    const nextKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object") {
      transformObjectToDotNotation(value, nextKey, result);
    } else {
      result.push(nextKey);
    }
  })
  return result
};

export const getNumbersOnly = ({ e, min, max, precision }) => {
  const regex = /^[0-9]+([.][0-9])?$/;
  let value = e.target.value;
  const previousValues = value.substring(0, value.length - 1);

  if (value.includes(".")) {
    if (precision == 0) return e.target.value = previousValues;
    const splitNum = value.split(".");/* means values has multiple dots */
    if (splitNum.length > 2) return e.target.value = previousValues;
    if (!regex.test(splitNum[0]) || (splitNum[1] && !regex.test(splitNum[1]))) return e.target.value = previousValues;
    if (splitNum[1].length > precision) return e.target.value = previousValues;
  }
  else if (!regex.test(value)) return e.target.value = previousValues;

  value = parseFloat(value);
  if (min && value < min) return e.target.value = previousValues;
  if (max && value > max) return e.target.value = previousValues;
  if (value == 0 && value.length > 2) return e.target.value = 0;
}

export const getCharsOnly = (params) => {
  const { e, min, max } = params;
  const regex = /^([a-zA-Z]+\s?)*$/;
  const value = e.target.value;
  if (!value) return;

  const previousValues = value.substring(0, value.length - 1);

  if (!regex.test(value)) {
    e.target.value = previousValues;
    return getCharsOnly(params);
  };
  if (min && value?.length < min) return e.target.value = previousValues;
  if (max && value?.length > max) return e.target.value = previousValues;
}

export const removeNullKeysFromObj = (req = {}, ignoreKeys = []) => {
  let res = {}
  Object.entries(req)?.some((keyValue) => {
    let key = keyValue[0], value = keyValue[1]
    if (ignoreKeys?.includes(key)) { return false; }
    if (value && !["object", "function", "undefined", "boolean"]?.includes(typeof value)) {
      res[key] = value
    }
  })
  return res;
}

export const dateDiff = (startDate = null, endDate = null) => {
  let res = 0;
  if (startDate && endDate) {
    let date1 = moment(startDate);
    let date2 = moment(endDate);
    let months = date2.diff(date1, "months")
    res = months
  }
  return res;

}
