export function isJson(data) {
  try {
    data = JSON.parse(JSON.stringify(data));
  } catch (e) {
    return false;
  }
  if (typeof data !== 'object' || data === null || data === '') {
    return false;
  }
  return true;
}

export function isValidJsonObjectString(data) {
  try {
    data = JSON.parse(data);
  } catch (e) {
    return false;
  }
  if (typeof data !== 'object' || data === null || data === '') {
    return false;
  }
  return true;
}

export function isValidJsonValue(data) {
  try {
    JSON.parse(data);
  } catch (e) {
    return false;
  }
  return true;
}

export function capitalizeString(input) {
  if (typeof input !== 'string') {
    console.log('[Utils] capitalizeString: input is not a string.');
    return input;
  }
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

// consider using react-intl formatDate to replace: https://formatjs.io/docs/react-intl/api
export function getDateTimeString(datetime, format = 'yyyy-MM-dd HH:mm:ss') {
  const dt = new Date(datetime);
  if (dt === 'Invalid Date') {
    console.error(`[Utils] getDateTimeString: invalid date: ${datetime}`);
    return 'Invalid Date';
  }

  if (typeof format !== 'string') {
    console.error(`[Utils] getDateTimeString: invalid format: ${format}`);
    return 'Invalid Format';
  }

  const year = `${dt.getFullYear()}`.padStart(4, 0);
  const month = `${dt.getMonth() + 1}`.padStart(2, 0);    // index start from 0
  const date = `${dt.getDate()}`.padStart(2, 0);
  const hr = `${dt.getHours()}`.padStart(2, 0);
  const min = `${dt.getMinutes()}`.padStart(2, 0);
  const sec = `${dt.getSeconds()}`.padStart(2, 0);

  return format.replaceAll('yyyy', year).replaceAll('MM', month).replaceAll('dd', date).replaceAll('HH', hr).replaceAll('mm', min).replaceAll('ss', sec);
}

/**
 * the number day before a date
 * @param {number} number day
 * @returns yyyy-MM-dd HH:mm:ss
 */
export const getDateBefore = (num) => {
  if (isNaN(num)) {
    console.error('[Utils] getDateBefore: value must be a number');
  }
  const dt = new Date();
  return getDateTimeString(dt.setDate(dt.getDate() - num));
};

export function emptyStringToNull(value) {
  if (value === undefined) {
    return null;
  }
  if (typeof value === 'string' && value.length === 0) {
    return null;
  }

  return value;
}

/**
 * convert Size To DisplaySize
 * @param {string} size total byte
 * @returns
 */
export function convertDataSizeToDisplaySize(size) {
  let result = { value: size, unit: '' };
  let num = 1024.00;
  let unitArray = ['', 'Ki', 'Mi', 'Gi', 'Ti', 'Pi', 'Ei', 'Zi', 'Yi'];
  let parsedSize = parseInt(size);

  if (isNaN(parsedSize)) {
    return result;
  }

  for (let i = 0; i < unitArray.length; i++) {
    if (parsedSize < Math.pow(num, i + 1)) {
      result.value = (parsedSize / Math.pow(num, i)).toFixed(2);
      result.unit = unitArray[i];
      return result;
    }
  }
}

/**
 * convert size with unit to bytes
 * @param {number} value data size without unit
 * @param {string} unit unit
 * @returns number in bytes
 */
export function convertDisplaySizeToDataSize(value, unit) {
  if (isNaN(value)) {
    console.error('[Utils] convertDisplaySizeToDataSize: value must be a number');
  }
  const unitArray = ['', 'Ki', 'Mi', 'Gi', 'Ti', 'Pi', 'Ei', 'Zi', 'Yi'];
  if (unitArray.includes(unit) === false) {
    console.error(`[Utils] convertDisplaySizeToDataSize: unsupported unit: ${unit}`);
  }

  for (let i = 0; i < unitArray.length; i++) {
    if (unitArray[i] === unit) {
      return value * Math.pow(1024, i);
    }
  }
}

export function rgbToHex(color) {
  if (color.indexOf('rgb') > -1) {
    return '#' + color.match(/[0-9|.]+/g).map((x, i) => i === 3 ? parseInt(255 * parseFloat(x)).toString(16) : parseInt(x).toString(16).length === 1 ? 0 + parseInt(x).toString(16) : parseInt(x).toString(16)).join('');
  }
  return color;
}

export function roundDecimal(value, precision = 2) {
  return Math.round(Math.round(value * Math.pow(10, (precision || 0) + 1)) / 10) / Math.pow(10, (precision || 0));
}

// TODO: getUnit function support resource units in Kubernetes and units conversion.
// https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#resource-units-in-kubernetes
export function getK8sUnit(value, decimalPlaces = 2) {
  let data = convertDataSizeToDisplaySize(value);
  return `${roundDecimal(data.value, decimalPlaces)} ${data.unit}`;
};

// for sorting
export function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

/**
 * get specific field values of an object array to return a new array
 * @param {array} objArray source object array
 * @param {string} key specific key
 * @returns value array
 */
export function getValueList(objArray, key) {
  let list = [];
  for (let obj of objArray) {
    list.push(obj[key]);
  }
  return list;
}

export function checkAuthInfo(acl, route, method) {
  if (Array.isArray(acl) === false) {
    console.error('[Utils] checkAuthInfo: acl must be an array');
    return false;
  }

  const auth = acl.find(item => item.route === route);
  if (auth === undefined || Array.isArray(auth?.method) === false) {
    return false;
  }

  const checkAuth = auth.method.find(item => item === method);
  return checkAuth !== undefined ? true : false;
}

/**
 * remove specific keys recursively of a json object
 * @param {object} object source json object
 * @param {array} removedKeys array of specific keys
 */
export function removeKeys(object, removedKeys) {
  if (isJson(object) === false) {
    console.error('[Utils] removeKeys: invalid json object');
    return;
  }
  if (Array.isArray(removedKeys) === false) {
    console.error('[Utils] removeKeys: removedKeys must be a string array');
    return;
  }

  if (Array.isArray(object)) {
    for (const item of object) {
      if (isJson(item)) {
        removeKeys(item, removedKeys);
      }
    }
  }
  else {    // assert json object
    // remove specific keys in json object
    for (const key of removedKeys) {
      delete object[key];
    }

    // handle object in object
    for (const key in object) {
      const item = object[key];
      if (isJson(item)) {
        removeKeys(item, removedKeys);
      }
    }
  }
}

/**
 * sort array alphabetically (from a-z), but "mainRole" is always the first
 * @param {array} roleNames array of roleNames
 * @param {string} mainRole
 */
export function sortRoleNames(roleNames, mainRole = '') {
  if (Array.isArray(roleNames) === false) {
    console.error('[Utils] sortRoleNames: roleNames must be a string array');
    return [];
  }
  if (typeof mainRole !== 'string') {
    console.log('[Utils] sortRoleNames: mainRole is not a string.');
    return [];
  }
  if (roleNames.length <= 1) {
    return roleNames;
  }

  const _roleNames = [...roleNames];
  const data = _roleNames.sort((a, b) => a.localeCompare(b));
  const adminIndex = data.findIndex(obj => obj === mainRole);
  if (adminIndex > 0) {
    data.splice(adminIndex, 1);
    data.splice(0, 0, mainRole);
  }
  return data;
};

/**
 * get token expiration time from jwt token, if more jwt token functions needed, use 3rd party package is suggested
 * @param {string} jwtToken
 * @returns time span
 */
export const getExpirationTime = (jwtToken) => {
  if (typeof jwtToken !== 'string') {
    console.error('[Utils] getExpirationTime: wrong jwt token format.');
    return undefined;
  }

  const base64Payload = jwtToken.split('.')[1];
  if (base64Payload === undefined || base64Payload === '') {
    console.error('[Utils] getExpirationTime: wrong jwt token format.');
    return undefined;
  }

  let payload;
  try {
    payload = JSON.parse(atob(base64Payload));
  }
  catch {
    console.error('[Utils] getExpirationTime: token parse error.');
    return undefined;
  }

  const expiration = payload.exp;
  if (isNaN(expiration)) {
    console.error('[Utils] getExpirationTime: wrong exp format.');
    return undefined;
  }

  return expiration;
};