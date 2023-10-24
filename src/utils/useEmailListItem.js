import { useEffect, useState } from "react";
import { EMAIL_ITEM_API } from "./constants";

const useEmailListItem = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const data = await fetch(
        EMAIL_ITEM_API + id
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };

  return resInfo;
};

export default useEmailListItem;
