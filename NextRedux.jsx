"use client";

import { Spinner } from "reactstrap";
import useFirebaseFetch from "./redux/useFirebaseFetch";
import Loading from "./ui/specials/Loading";

const NextRedux = ({ children }) => {  
  const { isLoading } = useFirebaseFetch();
  return <>{!isLoading ? children : <Loading />}</>;
};

export default NextRedux;
