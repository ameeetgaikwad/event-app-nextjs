import Image from "next/image";
import React from "react";
import Link from "next/link";
function EventsPage({ data }) {
  return (
    <div>
      <h1>Events Page</h1>
      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`}>
            <Image src={ev.image} alt={ev.title} width={300} height={200} />

            <h2>{ev.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("../../../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
