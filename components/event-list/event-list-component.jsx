import EventItemComponent from "../event-item/event-item-component";

import styles from "./event-list.module.css";

const EventListComponent = ({ eventData }) => {

  return (
    <ul className={styles.list}>
      {eventData.map(({ ...otherEventProps }) => (
        <EventItemComponent key={otherEventProps.id} {...otherEventProps} />
      ))}
    </ul>
  );
};

export default EventListComponent;
