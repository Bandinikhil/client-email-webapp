import React from "react";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite } from "../utils/favouritesSlice";
import "./styles.css";

const ListItem = ({ data, params }) => {
  const allMails = useSelector((store) => store?.emails?.items);
  const { id, body } = data;


  const selectedMail = allMails?.find((mail) => mail?.id === id);
  const selectedMailFrom = selectedMail?.from || {};
  const selectedMailName = selectedMailFrom?.name || "";
  const selectedMailSubject = selectedMail?.subject || "";
  const selectedMailDate = selectedMail ? new Date(selectedMail.date) : null;

  // Format the date and time
  const formattedDate = selectedMailDate
    ? format(selectedMailDate, "dd/MM/yyyy hh:mma")
    : "";

  const dispatch = useDispatch();
  const favourite = (ids) => {
    dispatch(addFavourite(ids));
  };

  // body of the mail when we click the particular mail
  return (
    <>
      <div className="p-4 border rounded-lg shadow-sm fixed ">
        <div className="flex flex-row items-center justify-between">
          <div className="avatar-container flex flex-row items-center justify-between mx-2">
            <div className="email-avatar text-2xl text-white mr-4">
              {selectedMailName[0]}
            </div>
            <div className="flex flex-col justify-between">
              <div className="subject">{selectedMailSubject}</div>
              <div className="date">{formattedDate}</div>
            </div>
          </div>
          <div
            className="p-2 rounded-full bg-pink-600 text-white cursor-pointer "
            onClick={() => favourite(id)}
          >
            Mark as favourite
          </div>
        </div>
        <div
          className="my-10 mx-16"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </>
  );
};

export default ListItem;
