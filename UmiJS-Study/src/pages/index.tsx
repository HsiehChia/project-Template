import { Link } from 'umi'
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div className={styles.test}>
        test size
      </div>
      <Link to='/home'>Home</Link>
    </div>
  );
}
