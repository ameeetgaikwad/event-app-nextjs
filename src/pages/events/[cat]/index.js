import Image from "next/image";
import Link from "next/link";
import React from "react";

function EventsCatPage({ data, pageName }) {
  return (
    <div>
      <h1>Events in {pageName}</h1>
      <div>
        {data.map((ev) => {
          return (
            <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
              <Image src={ev.image} alt={ev.title} width={300} height={200} />
              <h2>{ev.title} </h2>
              <p>{ev.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("../../../../data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { allEvents } = await import("../../../../data/data.json");

  const data = allEvents.filter((ev) => ev.city === id);

  return { props: { data, pageName: id } };
}
