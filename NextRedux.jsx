"use client";

import { Spinner } from "reactstrap";
import useFirebaseFetch from "./redux/useFirebaseFetch";
import Loading from "./ui/specials/Loading";

const NextRedux = ({ children }) => {  
  const { isLoading } = useFirebaseFetch();
  console.log("re-render");
  return <>{!isLoading ? children : <Loading />}</>;
};

export default NextRedux;
