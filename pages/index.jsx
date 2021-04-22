import { getFeaturedEvents } from "../dummy-data";

import EventListComponent from "../components/event-list/event-list-component";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventListComponent eventData={featuredEvents} />
    </div>
  );
};

export default HomePage;
