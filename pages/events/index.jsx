import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

import EventList from "../../components/event-list/event-list-component";
import EventSearch from "../../components/event-search/event-search-component";

const AllEventsPage = () => {
  const router = useRouter();
  const allEvents = getAllEvents();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList eventData={allEvents} />
    </>
  );
};

export default AllEventsPage;
