import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import "./styles.css";
import { useDispatch } from "react-redux";
import { addread } from "../utils/readSlice";

const EmailListItem = ({ email, isFavorite }) => {
  const [reading, setReading] = useState(false);
  const timestamp = new Date(email.date);
  const dispatch = useDispatch();

  const toggleReading = () => {
    setReading(!reading);
    dispatch(addread(email));
  };

  useEffect(() => {
    setReading(isFavorite);
  }, [isFavorite]);

  const formattedDate = format(timestamp, "dd/MM/yyyy hh:mma");

  return (
    <div
      className={`mx-4 my-3 rounded-lg border-solid border-2 border-gray-200 email-item ${
        reading ? "read-card" : "read"
      }`}
      onClick={toggleReading}
    >
      {isFavorite && <div className="favorite-indicator">Favorite</div>}
      <div className="avatar-container">
        <div className="email-avatar text-2xl text-white">
          {email.from.name[0]}
        </div>
      </div>
      <div className="details-container">
        <div className="sender">
          <span className="sender-name">From: {email.from.name}</span>
          <span className="sender-email">{email.from.email}</span>
        </div>
        <div className="subject">{email.subject}</div>
        <div className="short-description">{email.short_description}</div>
        <div className="date">{formattedDate}</div>
      </div>
    </div>
  );
};

export default EmailListItem;

