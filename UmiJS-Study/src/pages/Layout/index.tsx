import styles from './index.less';

// import { Provider } from 'react-redux'
// import store from '@/utils/store'

import { IntlProvider } from '@/utils/Provider'
// import { Provider } from 'react-redux'
// import store from '@/utils/store'
// import { getBasicConfig, setBasicConfig } from '@/utils/store/actions/basicActions'

  // useEffect(() => {
  //   const initStoreConfig = async () => {
  //     await dispatch(setBasicConfig({Title: 'test11111'}))
  //   }
  //   initStoreConfig()
  // }, [dispatch])

  // useEffect(() => {
  //   dispatch({
  //     type: 'basicModel/getBasicData'
  //   });
  // }, []);

export default function LayOut(props: any) {
  return (
    // <Provider store={store}>
    <IntlProvider>
      <div>
        <div className={styles.layoutWrapper}>layout</div>
        {props.children}
      </div>
    </IntlProvider>
    // </Provider>
  )
}
