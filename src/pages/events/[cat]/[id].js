import Image from "next/image";
import React from "react";

function EventPage({ data }) {
  return (
    <div>
      <Image src={data.image} width={900} height={500} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export default EventPage;

export async function getStaticPaths() {
  const data = await import("../../../../data/data.json");
  const { allEvents } = data;

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

export async function getStaticProps(context) {
  const { allEvents } = await import("../../../../data/data.json");
  const id = context.params.id;
  const eventData = allEvents.find((ev) => ev.id == id);
  console.log("eventDataFilter", eventData);
  return {
    props: { data: eventData },
  };
}
