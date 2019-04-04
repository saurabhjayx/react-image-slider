import {
  FETCH_IMAGES,
} from '../actionTypes';

import { getImages } from './apis/slider';

export const fetch_images = (json = {}) => {
  return (dispatch) => {
    getImages(dispatch, { type: FETCH_IMAGES, ...json });
  }
}
