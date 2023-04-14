import React from "react";

function EventsPage() {
  return (
    <div>
      <h1>Events Page</h1>
      <div>
        <a href="">
          <img src="" alt="" />
          <h2>Events in London</h2>
        </a>
        <a href="">
          <img src="" alt="" />
          <h2>Events in San Francisco</h2>
        </a>
        <a href="">
          <img src="" alt="" />
          <h2>Events in San Bacelona</h2>
        </a>
      </div>
    </div>
  );
}

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = import("../../../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
