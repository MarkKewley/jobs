import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import { FETCH_JOBS } from './types';

const JOB_QUERY_PARAMS = {
  publisher: '4201738803816157',
  format: 'json',
  v: '2',
  latlong: 1, // return lat's and longs
  radius: 10, // in miles
  q: 'javascript' // the job search term, TODO: Add in a text input for searching for jobs
};

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch';

const buildJobsUrl = zip => {
  // l => location. use postal code or a "city, state/province/region" combination
  const query = qs.stringify({...JOB_QUERY_PARAMS, l: zip});
  return `${JOB_ROOT_URL}?${query}`;
};

export const fetchJobs = (region, callback) => async dispatch => {
  try {
    let zip = await reverseGeocode(region);
    const url = buildJobsUrl(zip);
    let {data} = await axios.get(url);
    dispatch({type: FETCH_JOBS, payload: data});
    callback();
  } catch (e) {
    console.error(e);
  }
};