import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/event-list/event-list-component";

const AllEventsPage = () => {
  const allEvents = getAllEvents();
  return (
    <div>
      <EventList eventData={allEvents} />
    </div>
  );
};

export default AllEventsPage;
