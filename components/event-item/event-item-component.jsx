import Link from "next/link";

import styles from "./event-item.module.css";

import Button from "../button/button.component";

import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = ({ id, title, description, location, date, image }) => {
  const updateDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const updateAddress = location.replace(",", "\n");
  const linkEvent = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={`/${image}`} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2> {title} </h2>
          <div className={styles.date}>
            <DateIcon />
            <time> {updateDate} </time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address> {updateAddress} </address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={linkEvent}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
