import { getAndDispatchAllDataFromCollection } from "@/utils";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProjects, allUserChats, userLogin } from "./action";
import firebase from "firebase/compat/app";
import { getDocByKeyValue } from "@/backend/utility";

const useFirebaseFetch = () => {
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(true);
  const reduxUser = useSelector((s) => s?.user ?? {});

  useLayoutEffect(() => {
    firebase.auth().onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        let [user] = await getDocByKeyValue("Users", "uid", currentUser?.uid);
        dispatch(userLogin(user));
        const getAllUserMessages = async () => {
          const [chatDoc] = await getDocByKeyValue(
            "Chats",
            "chatter",
            user?._id
          );
          dispatch(allUserChats(chatDoc?.messages));
        
        };

        getAllUserMessages();
        setisLoading(false);
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
export default useFirebaseFetch;
