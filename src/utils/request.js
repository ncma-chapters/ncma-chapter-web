// Node modules.
import axios from 'axios';

// =====================
// Ensure we return undefined and not null to avoid `null` being saved into our Redux store.
// =====================
const nullCheck = (parsedResponse) => {
  if (parsedResponse === null) {
    return undefined;
  }
  return parsedResponse;
};

// =====================
// Status 204 or 205? Do not try to parse since there's nothing sent over.
// =====================
const cleanEmptyResponse = (response) => {
  if (response.status === 204 || response.status === 205) {
    return undefined;
  }
  return response.data;
};

// =====================
// Main request util.
// =====================
const request = (url, options = {}) => {
  // Clean common `body` instead of `data` mistake.
  if (options.body) {
    options.data = options.skipParsingBody ? options.body : JSON.parse(options.body);
  }

  // Make the request.
  return axios({
    ...options,
    url,
  })
    .then(cleanEmptyResponse)
    .then(nullCheck);
};

// Export main request func and helper funcs.
export default request;
