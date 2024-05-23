import { getCredentials } from '@/utils/helpers/authHelpers'
import axios from 'axios';
import { showMessage } from '../helpers/toastHelpers';
import { _toastVariants } from '../constants/constants';

const axiosInstance = axios.create();
axiosInstance.interceptors.response.use(success, error);

function getRequestHeaders(type) {
  let headers = {}
  switch (type) {
    case 'json':
      headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
      break
    case 'form':
      headers = {
        accept: 'application/json',
        'access-control-allow-origin': '*',
        'content-type': 'multipart/form-data',
      }
      break
    default:
      headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      }
      break
  }
  return headers
}

function createQueryOrParams(object, type = 'query') {
  let string = ''
  let length = Object.entries(object).length || 0
  if (type === 'query') {
    string = '?'
    Object.entries(object).forEach((item, index) => {
      string = string + item[0] + '=' + item[1]
      if (length !== index + 1) {
        string = string + '&'
      }
    })
  } else if (type === 'params') {
    string = '/'
    Object.entries(object).forEach((item, index) => {
      string = string + item[1]
      if (length !== index + 1) {
        string = string + '/'
      }
    })
  }
  return string
}

const apiRequest = async ({
  endUrl,
  method = "GET",
  headerType = 'json',
  // Payload
  body = null,
  query = null,
  params = null,
  // Auth
  token = true,
  savedToken = null,
  showMsg = false
}) => {
  let requestHeaders = getRequestHeaders(headerType)
  if (savedToken) {
    requestHeaders.Authorization = 'Bearer ' + savedToken
  } else if (token) { /* Add token */
    requestHeaders.Authorization = 'Bearer ' + getCredentials()?.access_token
  }
  if (params) { /* Add params */
    endUrl = endUrl + createQueryOrParams(params, 'params')
  }
  if (query) { /* Add query */
    endUrl = endUrl + createQueryOrParams(query, 'query')
  }
  const options = {
    method: method,
    headers: requestHeaders,
    timeoutInterval: 10000,
  }
  if (body) {
    options.body = headerType === 'json' ? JSON.stringify(body) : body
  }
  try {
    let fetched = await fetch(endUrl, options)
    let response = await fetched.json()
    let msg = response?.errors?.length > 0 ? response?.errors?.[0].message : ''
    
    if (response.status === 200 || response.status_code === 200) {
      /* Will modify according to api's response */
      response = {
        status: true,
        data: response.data,
        message: response.message,
      }
    } else {
      response = { status: false, data: {}, message: response.message || msg }
    }
    if (showMsg) {
      showMessage({
        variant: response?.status
          ? _toastVariants.Success
          : _toastVariants.Error,
        message: response?.message || msg,
      })
    }
    return response
  } catch (e) {
    if (showMsg) {
      showMessage({ variant: _toastVariants.Error, message: e.toString() })
    }
    return { status: false, data: {}, message: e.toString() }
  }
}

const apiRequestForMediaFiles = async ({
  endUrl,
  method,
  headerType = 'json',
  body = null,
  query = null,
  params = null,
  token = true,
  savedToken = null,
  showMsg = false
}) => {
  let requestHeaders = getRequestHeaders(headerType)
  if (savedToken) {
    requestHeaders.Authorization = 'Bearer ' + savedToken
  } else if (token) {
    /* Add token */
    requestHeaders.Authorization = 'Bearer ' + getCredentials()?.access_token
  }
  if (params) {
    /* Add params */
    endUrl = endUrl + createQueryOrParams(params, 'params')
  }
  if (query) {
    /* Add query */
    endUrl = endUrl + createQueryOrParams(query, 'query')
  }

  const options = {
    method: method,
    headers: requestHeaders,
    timeoutInterval: 10000,
  }
  if (body) {
    options.body = headerType === 'json' ? JSON.stringify(body) : body
  }
  try {
    let response = await fetch(endUrl, options)
    const blob = await response.blob()
    const url = window.URL.createObjectURL(new Blob([blob]))
    if (url) {
      response = { status: true, data: { url }, message: "file get successfully" }
    } else {
      response = { status: false, data: {}, message: "Something went wrong." }
    }
    return response
  } catch (e) {
    if (showMsg) {
      showMessage({ variant: _toastVariants.Error, message: e.toString() })
    }
    return { status: false, data: {}, message: e.toString() }
  }
}

// Handle Success Response 
function success(response) {
  const { data } = response || {};
  if (data?.status === 200) {
    return {
      status: true,
      data: response.data.data,
      message: response.data.message
    };
  } else {
    if (data && Array.isArray(data.errors) && data.errors.length > 0) {
      const rejectData = {
        message: data.errors?.[0]?.message || 'Unable to connect to network',
        data: data?.data,
        status: false
      }
      return Promise.reject(rejectData);
    }
  }
}

// Handle Error Response 
function error(error) {
  const rejectData = {
    status: false,
    data: error?.response?.data?.data,
    message: error?.response?.data?.errors?.[0]?.message || 'Unable to connect to network'
  };
  return Promise.reject(rejectData);
}

export {
  apiRequest,
  apiRequestForMediaFiles,
  axiosInstance as axios
}
