import styles from './index.less';

export default function LayOut(props: any) {
  return (
    <div>
      <div className={styles.layoutWrapper}>layout</div>
      {props.children}
    </div>
  )
}
