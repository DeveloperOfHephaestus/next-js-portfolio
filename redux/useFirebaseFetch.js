import { getAndDispatchAllDataFromCollection } from "@/utils";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { allProjects, userLogin } from "./action";
import firebase from "firebase/compat/app";
import { getDocByKeyValue } from "@/backend/utility";

const useFirebaseFetch = () => {
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(true);

  useLayoutEffect(() => {
    firebase.auth().onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        let [user] = await getDocByKeyValue("Users", "uid", currentUser?.uid);
        dispatch(userLogin(user));
        setisLoading(false)
      } else {
        dispatch(userLogin({}));
        setisLoading(false);
      }
    });
  }, []);

  //fetch data here
  useEffect(() => {
    getAndDispatchAllDataFromCollection("Projects", allProjects, dispatch);
  }, []);

  return { isLoading };
};
export default useFirebaseFetch
