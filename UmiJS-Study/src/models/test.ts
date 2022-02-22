import { getName } from '@/services/test'
export default {
  namespace: 'dvaTest',
  state: {
    name: {}
  },
  effects: {
    *getName({ payload, callback }: { payload: any, callback: any }, { put, call }: { put: any, call: any }): any {
      const response: any = yield call(getName, payload);

      if (callback) {
        callback(response)
      }
      yield put({
        type: 'nameInfo',
        payload: response
      })
    },
  },
  reducers: {
    // 纯函数，不做数据处理
    nameInfo(state: any, action: any) {
      return {
        ...state,
        name: action.payload
      }
    }
  }
}
