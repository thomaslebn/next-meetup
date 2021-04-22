import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";

import LogisticItem from "../logistic-item/logistic-item-component";

import styles from "./event-logistic.module.css";

function EventLogistic({ date, location, image, title }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = location.replace(", ", "\n");

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <img src={`/${image}`} alt={title} />
      </div>
      <ul className={styles.list}>
        <LogisticItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticItem>
        <LogisticItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticItem>
      </ul>
    </section>
  );
}

export default EventLogistic;
