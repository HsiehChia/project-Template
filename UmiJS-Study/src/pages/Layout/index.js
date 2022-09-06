import styles from './index.less';

export default function LayOut(props) {
  return (
    <div className={styles.layoutWrapper}>
      layout
      <div>{props.children}</div>
    </div>
  )
}
