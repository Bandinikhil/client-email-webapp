import React, { useEffect, useState } from "react";
import EmailListItem from "./EmailListItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../utils/emailsSlice";
import { EMAILS_LIST_API } from "../utils/constants";

const EmailList = () => {
  const [emailList, setEmailList] = useState(null);
  const [favList, setFavList] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showRead, setShowRead] = useState(false);
  const [showUnRead, setShowUnRead] = useState(false);
  const [readList, setReadList] = useState([]);
  const [unreadList, setUnreadList] = useState([]);
  const favouriteEmails = useSelector((store) => store.favourite.favList);
  const readMails = useSelector((store) => store.read.readList);

  const dispatch = useDispatch();
// functions to store the filtered, read, unread mails to store
  const getFav = () => {
    const favEmail = emailList.filter((value) =>
      favouriteEmails.includes(value.id)
    );
    setFavList(favEmail);
    setShowFavorites(true);
    setShowRead(false);
    setShowUnRead(false);
  };

  const getRead = () => {
    setReadList(readMails);
    setShowRead(true);
    setShowFavorites(false);
    setShowUnRead(false);
  };

  const unRead = () => {
    let readId = readMails.map((mail) => mail.id);
    let newUnRead = emailList.filter((value) => !readId.includes(value.id));
    setUnreadList(newUnRead);
    setShowUnRead(true);
    setShowFavorites(false);
    setShowRead(false);
  };

  const showAll = () => {
    setFavList([]);
    setReadList([]);
    setUnreadList([]);
    setShowFavorites(false);
    setShowRead(false);
    setShowUnRead(false);
  };
// async function to fetch the emails list
  const fetchEmails = async () => {
    const data = await fetch(EMAILS_LIST_API);
    const json = await data.json();
    setEmailList(json.list);
    dispatch(setEmails(json.list));
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  if (!emailList) {
    return <div className="email-list">Loading...</div>;
  }
// based on the onClick filters get applied and filtered data goes to the EmailListItem component
  return (
    <div className="email-list">
      <div className="email-list-header">
        <h2>Inbox</h2>
        <div className="filter-buttons">
          <span
            className={`filter-button ${
              !showFavorites && !showRead && !showUnRead ? "active" : ""
            }`}
            onClick={showAll}
          >
            All
          </span>
          <span
            className={`filter-button ${showFavorites ? "active" : ""}`}
            onClick={getFav}
          >
            Favorites
          </span>
          <span
            className={`filter-button ${showRead ? "active" : ""}`}
            onClick={getRead}
          >
            Read
          </span>
          <span
            className={`filter-button ${showUnRead ? "active" : ""}`}
            onClick={unRead}
          >
            Unread
          </span>
        </div>
      </div>
      <div className="mx-4 my-2">
        {showFavorites
          ? favList.map((email) => (
              <Link key={`fav-${email.id}`} to={"/emailitem/" + email.id}>
                <EmailListItem email={email} />
              </Link>
            ))
          : showRead
          ? readList.map((email) => (
              <Link key={`read-${email.id}`} to={"/emailitem/" + email.id}>
                <EmailListItem email={email} />
              </Link>
            ))
          : showUnRead
          ? unreadList.map((email) => (
              <Link key={`unread-${email.id}`} to={"/emailitem/" + email.id}>
                <EmailListItem email={email} />
              </Link>
            ))
          : emailList.map((email) => (
              <Link key={`all-${email.id}`} to={"/emailitem/" + email.id}>
                <EmailListItem email={email} />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default EmailList;
