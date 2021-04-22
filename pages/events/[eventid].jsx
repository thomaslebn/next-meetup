import { useRouter } from "next/router";

import EventItem from "../../components/event-item/event-item-component";
import EventSummary from "../../components/event-summary/event-summary-component";
import EventLogistic from "../../components/event-logistic/event-logistic-component";
import EventContent from "../../components/event-content/event-content-component";

import { getEventById } from "../../dummy-data";
import ErrorAlert from "../../components/error-alert/error-alert-component";

const EventDetailPage = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p> Not event found. </p>;
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary {...event} />
      <EventLogistic {...event} />
      <EventContent>
        <p> {event.description} </p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
