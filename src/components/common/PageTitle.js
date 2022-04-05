import { useEffect, useState } from "react";

const usePageTitle = title => {
  const [page_title, setPageTitle] = useState(title);
   useEffect(() => {
    document.title = page_title; 
  },[page_title]);

  return [page_title, setPageTitle];
};

export {usePageTitle};