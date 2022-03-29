import { useEffect, useState } from 'react';
import { connect, Helmet, useDispatch, useLocation, IGetInitialProps, Link } from 'umi';
import styles from './home.less'

const Layout = (props: any) => {

  console.log(props);

  const {basicData} = props.basicModel;

  // const intl = useIntl();
  const location = useLocation();
  const dispatch = useDispatch();
  // const [basicData, setBasicData] = useState<any>([]);

  // const fetch = () => {
  //   dispatch({
  //     type: 'basicModel/getBasicData',
  //     callback: (response: any) => {
  //       setBasicData(response.basicData.data);
  //     },
  //   });
  // };

  // useEffect(() => {
  //   fetch();
  // }, []);

  // useEffect(() => {
  //   if (!globalThis.scrollTo) return;
  //     globalThis.scrollTo({
  //       behavior: 'smooth',
  //       left: 0,
  //       top: 0,
  //     });
  // });

  return (
    <>
      <Helmet encodeSpecialCharacters={false}>
        <title>
            test server
        </title>
      </Helmet>
      <div className={styles.homepage}> Home Page </div>
      {basicData.code}
      <Link to='/'>首页</Link>
    </>
  );
};

Layout.getInitialProps = (async ({ store, isServer }) => {
  if (!isServer) {
    return;
  }
  await store.dispatch({type: 'basicModel/getBasicData'});
  const { basicModel } = store.getState();
  return basicModel
}) as IGetInitialProps;

export default connect(({ basicModel }: { basicModel: any }) => ({
  basicModel,
}))(Layout);
