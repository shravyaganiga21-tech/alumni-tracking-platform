import { useState } from "react";
import Navbar from "../components/Navbar";

function Events() {
  const [search, setSearch] = useState("");
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const events = [
    {
      title: "Alumni Career Connect",
      date: "September 20, 2026",
      time: "5:00 PM",
      mode: "Online",
      speaker: "Rahul Sharma",
      type: "Networking",
    },
    {
      title: "Resume & Interview Workshop",
      date: "September 25, 2026",
      time: "4:00 PM",
      mode: "BMSCE Campus",
      speaker: "Priya Nair",
      type: "Workshop",
    },
    {
      title: "Tech Industry Networking Meet",
      date: "October 2, 2026",
      time: "6:00 PM",
      mode: "Online",
      speaker: "Arjun Kumar",
      type: "Networking",
    },
  ];

  const filteredEvents = events.filter((event) => {
    const searchText = search.toLowerCase();

    return (
      event.title.toLowerCase().includes(searchText) ||
      event.speaker.toLowerCase().includes(searchText) ||
      event.type.toLowerCase().includes(searchText)
    );
  });

  const handleRegister = (title) => {
    if (registeredEvents.includes(title)) {
      setRegisteredEvents(
        registeredEvents.filter((event) => event !== title)
      );
    } else {
      setRegisteredEvents([...registeredEvents, title]);
    }
  };

  return (
    <>
      <Navbar />

      <div className="events">
        <div className="events-header">
          <h1>Alumni Events</h1>

          <p>
            Attend networking sessions, workshops, mentoring events, and
            industry talks organized by our alumni community.
          </p>
        </div>

        <div className="event-search">
          <input
            type="text"
            placeholder="Search events, speakers, or event type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="events-grid">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => {
              const isRegistered = registeredEvents.includes(event.title);

              return (
                <div className="event-card" key={index}>
                  <div className="event-date">
                    <span>📅</span>
                    <strong>{event.date}</strong>
                  </div>

                  <h2>{event.title}</h2>

                  <p>🕐 {event.time}</p>

                  <p>📍 {event.mode}</p>

                  <p>🎤 Hosted by {event.speaker}</p>

                  <p>🏷️ {event.type}</p>

                  <button
                    onClick={() => handleRegister(event.title)}
                    className={isRegistered ? "registered-button" : ""}
                  >
                    {isRegistered
                      ? "✓ Registered"
                      : "Register for Event"}
                  </button>
                </div>
              );
            })
          ) : (
            <p>No events found.</p>
          )}
                </div>

        <div className="my-events">
          <h2>📌 My Events</h2>

          {registeredEvents.length > 0 ? (
            <div className="registered-events">
              {events
                .filter((event) =>
                  registeredEvents.includes(event.title)
                )
                .map((event, index) => (
                  <div className="registered-event-card" key={index}>
                    <h3>{event.title}</h3>

                    <p>📅 {event.date}</p>

                    <p>🕐 {event.time}</p>

                    <p>📍 {event.mode}</p>

                    <span>✓ Registered</span>
                  </div>
                ))}
            </div>
          ) : (
            <p className="no-events">
              You haven't registered for any events yet.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
export default Events;