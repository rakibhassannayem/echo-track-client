import React from "react";
import { GoPeople } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCalendarToday } from "react-icons/md";

const EventsCard = ({ event }) => {
  const {
    title,
    date,
    location,
    description,
    maxParticipants,
    currentParticipants,
  } = event;
  const realDate = new Date(date).toLocaleString();
  return (
    <div className="card bg-base-100 shadow-sm cursor-pointer hover:scale-105 transition">
      <div className="card-body py-2 px-3 text-secondary text-base">
        <h2 className="card-title text-primary justify-between">{title}</h2>
        <p>{description}</p>

        <div className="flex items-center gap-1">
          <MdOutlineCalendarToday /> {realDate}
        </div>
        <div className="flex items-center gap-1">
          <IoLocationOutline />
          {location}
        </div>
        <div className="flex items-center gap-1">
          <GoPeople />
          {currentParticipants}/{maxParticipants}
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
