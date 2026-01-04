import EventsCard from "../EventsCard/EventsCard";
import SkeletonLoading from "../SkeletonLoading/SkeletonLoading";

const UpcomingEvents = ({ eventsData, loading }) => {
  return (
    <section className="rounded-xl">
      <div className="mb-8 text-center">
        <h2 className="headings">Upcoming Events</h2>
        <p className="text-secondary mt-2">
          Join local sustainability events
        </p>
      </div>

      {eventsData.length === 0 && !loading && (
        <p className="text-center text-primary text-lg font-medium">
          No events available!
        </p>
      )}

      {loading ? (
        <div className="grid md:grid-cols-3 gap-6">
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
        </div>
      ) : (
        <div className="grid md:grid-cols-4 gap-6">
          {eventsData.map((event) => (
            <EventsCard key={event._id} event={event}></EventsCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default UpcomingEvents;
