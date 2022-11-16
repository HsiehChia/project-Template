import { SET_SEARCH_LIST } from '../actionTypes'

import request from 'umi-request';

export const setSearchList = (searchList) => ({
  type: SET_SEARCH_LIST,
  payload: {
    searchList,
  },
})

export const getSearchList = ({ type, keyword }) => async (dispatch) => {
  try {
    const resp = await await request(`/api/index/search/?type=${type}&keyword=${keyword || ''}`,);

    console.log(2222, resp);
    dispatch(setSearchList(resp.data))
  } catch (error) {
    console.error(error)
  }
}

