import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";
import React from "react";



const Page = () => {
  return (
    <div id="home">
      <section className="flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-center">
          The Hub for Every Dev <br /> Event You Can&apos;t Miss
        </h1>
        <p className="subheading">Hackathons, Meetups, and Conferences, All in One Place</p>
        <ExploreBtn />
      </section>

      <section id="events" className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events.map((event) => (
            <li key={event.slug}><EventCard {...event} /></li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Page;