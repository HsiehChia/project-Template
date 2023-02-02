import { Effect, Reducer } from 'umi';
import { getBasicData } from '@/services';

export interface BasicModelState {
  Title: '',
  BeiAn: '',
  QRCode: '',
  Phone: [],
  Email: '',
  Address: [],
  ProductMore: "",
  PositionMore: '',
  FaceBook: '',
  Twitter: '',
  YouTube: '',
  LinkedIn: ''
}

export interface BasicModelType {
  name: 'basicModel';
  state: BasicModelState;
  effects: {
    getBasicData: Effect;
  };
  reducers: {
    setBasicData: Reducer<BasicModelState>;
  }
}

const BasicModel = {
  namespace: 'basicModel',
  state: {
    Title: '',
    BeiAn: '',
    QRCode: '',
    Phone: [],
    Email: '',
    Address: [],
    ProductMore: "",
    PositionMore: '',
    FaceBook: '',
    Twitter: '',
    YouTube: '',
    LinkedIn: ''
  },
  effects: {
    *getBasicData(
      { payload, callback }: { payload: any; callback: any },
      { put, call }: { put: any; call: any },
    ): any {
      const response: any = yield call(getBasicData, payload);
      if (callback) callback(response);
<<<<<<< HEAD
      if(response.code !== 1) {
        // 有错误
        console.error(response.msg)
      } else {
        yield put({
          type: 'setBasicData',
          payload: response.data,
        });
      }
    },
  },
  reducers: {
    setBasicData(state: any, action: any) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  subscriptions: {
    setUp({dispatch, history}) {
      history.listen(({pathname}) => {
        console.log( pathname );
        // dispatch({ type: 'basicModel/getBasicData'})
      })
    }
  }
};

export default BasicModel;
=======
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
>>>>>>> 184606a (feat: dva model)
