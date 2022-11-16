import {
  SET_BASIC_CONFIG,
} from '../actionTypes'

const initState = {
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

export default (state = initState, action) => {
  switch (action.type) {
    case SET_BASIC_CONFIG:
      return {
        ...state,
        ...action.payload.storeConfig,
      }
    default:
      // console.log(action);
      return state
  }
}
