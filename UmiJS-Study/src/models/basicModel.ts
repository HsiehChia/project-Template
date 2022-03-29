import { getBasicData } from '@/services';

export default {
  namespace: 'basicModel',
  state: {
    basicData: {},
  },
  effects: {
    *getBasicData(
      { payload, callback }: { payload: any; callback: any },
      { put, call }: { put: any; call: any },
    ): any {
      const response: any = yield call(getBasicData, payload);
      if (callback) callback(response);
      yield put({
        type: 'basicData',
        payload: response.basicData,
      });
    },
  },
  reducers: {
    basicData(state: any, action: any) {
      return {
        ...state,
        basicData: action.payload,
      };
    },
  },
};
