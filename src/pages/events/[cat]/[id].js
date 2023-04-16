import React from "react";

function EventPage() {
  return (
    <div>
      <h1>Our single event</h1>
    </div>
  );
}

export default EventPage;

export async function getStaticPaths() {
  const data = await import("../../../../data/data.json");
  const { allEvents } = data;
  console.log("alleventsslfsfs", allEvents);
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}
