import React from "react";
import { useParams } from "react-router-dom";
import useEmailListItem from "../utils/useEmailListItem";
import EmailList from "./EmailList";
import ListItem from "./ListItem";

const EmailBody = () => {
  const { id } = useParams();

  const resInfo = useEmailListItem(id);

  if (resInfo === null) return null;

  return (
    <div className="flex flex-col lg:flex-row mx-3 w-full">
      <div className="lg:w-1/3 block lg:flex-wrap w-full ">
        <EmailList />
      </div>
      <div className="lg:w-2/3 block lg:flex-wrap w-full ">
        <ListItem data={resInfo} />
      </div>
    </div>
  );
};

export default EmailBody;
