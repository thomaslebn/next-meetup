import { useRouter } from "next/router";
import { getFeaturedEvents } from "../dummy-data";

import EventListComponent from "../components/event-list/event-list-component";
import EventSearch from "../components/event-search/event-search-component";

const HomePage = () => {
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventListComponent eventData={featuredEvents} />
    </div>
  );
};

export default HomePage;
