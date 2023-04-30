import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";

function EventPage({ data }) {
  const inputEmail = useRef();
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) throw new Error(`Error:${response.status}`);
      const data = await response.json();
      console.log("POST", data);
    } catch (e) {
      console.log(e, "error");
    }
  };
  return (
    <div className="event_single_page">
      <Image src={data.image} width={900} height={500} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <form onSubmit={onSubmit}>
        <label className="email_registration">Get registered</label>
        <input ref={inputEmail} type="email" />
        <button type="submit">Submit</button>
      </form>
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
