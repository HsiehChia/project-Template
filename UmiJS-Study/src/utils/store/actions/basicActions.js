import { SET_BASIC_CONFIG } from '../actionTypes'

import request from 'umi-request';

export const setBasicConfig = (storeConfig) => ({
  type: SET_BASIC_CONFIG,
  payload: {
    storeConfig,
  },
})

export const getBasicConfig = () => async (dispatch) => {
  try {
    const resp = await request('/api/index/basic');
    console.log(1111111111111);
    dispatch(setBasicConfig(resp.data))
  } catch (error) {
    console.error(error)
  }
}
