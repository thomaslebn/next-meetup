import styles from "./logistic-item.module.css";

function LogisticItem({ icon: Icon, children }) {
  return (
    <li className={styles.item}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <span className={styles.content}>{children}</span>
    </li>
  );
}

export default LogisticItem;
