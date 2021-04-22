import EventItem from "../event-item/event-item-component";

import styles from "./event-list.module.css";

const EventList = ({ eventData }) => {

  return (
    <ul className={styles.list}>
      {eventData.map(({ ...otherEventProps }) => (
        <EventItem key={otherEventProps.id} {...otherEventProps} />
      ))}
    </ul>
  );
};

export default EventList;
