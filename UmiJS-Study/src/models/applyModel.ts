import { applyRequest } from '@/services';

export default {
  namespace: 'applyModel',
  state: {
    applyData: {},
  },
  effects: {
    *applyRequest(
      { payload, callback }: { payload: any; callback: any },
      { put, call }: { put: any; call: any },
    ): any {
      const response: any = yield call(applyRequest, payload);
      if (callback) callback(response);
      yield put({
        type: 'applyData',
        payload: response,
      });
    },
  },
  reducers: {
    applyData(state: any, action: any) {
      return {
        ...state,
        applyData: action.payload,
      };
    },
  },
};
