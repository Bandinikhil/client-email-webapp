import { useEffect, useState } from "react";

const useEmailListItem = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const data = await fetch(
      "https://flipkart-email-mock.vercel.app/?id=" + id
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };

  return resInfo;
};

export default useEmailListItem;
