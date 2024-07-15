import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteData,
  saveData,
  uniqueID,
  uploadImage,
} from "../backend/utility";
import {
  allLogs,
  allNotifications,
  allOrders,
  allPosts,
  allProducts,
  allSprayLogs,
  allTopics,
  allUsers,
} from "../redux/action";
import { dummyOrders } from "../dummyData";
import { useCrud } from "./utilityHooks";
import moment from "moment";

/*----------------useUsers----------------------*/
export const useUsers = () => {
  const reduxUsers = useSelector((s) => s?.allUsers ?? []);
  const [users, setUsers] = useState(
    reduxUsers?.filter((user) => user?.role !== "admin")
  );
  const {
    taskMessage,
    modifyCollection,
    modifyReduxState,
    collectionTaskTypes,
    reduxTaskTypes,
  } = useCrud(users, setUsers, allUsers, "Users", "userId");

  const handleDeleteUser = async (data) => {
    let obj = { ...data };
    await modifyCollection(
      collectionTaskTypes?.delete,
      obj,
      "User deleted successfully"
    );
    await modifyReduxState(reduxTaskTypes?.delete, obj);
  };

  return { users, handleDeleteUser };
};
/*-----------------------------------------------*/

/*-----------------usePosts-------------------------*/
export const usePosts = () => {
  const reduxPosts = useSelector((s) => s?.allPosts ?? []);
  const [posts, setPosts] = useState(reduxPosts);
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false);
  const {
    collectionTaskTypes,
    modifyCollection,
    modifyReduxState,
    reduxTaskTypes,
    taskMessage,
    uploadFile,
    uploadProgress,
  } = useCrud(posts, setPosts, allPosts, "Posts", "id");

  const handleAddPost = async (data) => {
    setisLoading(true);
    let obj = { ...data, id: uniqueID(), createdAt: Date.parse(new Date()) };
    setisLoading(true);

    if (typeof obj?.photo == "object") {
      let url = await uploadFile(obj?.photo, "posts");
      obj.photo = url;
    }

    await modifyCollection(
      collectionTaskTypes?.save,
      obj,
      "Post Added successfully"
    );
    await modifyReduxState(reduxTaskTypes?.create, obj);

    setisLoading(false);
  };

  const handleEditPost = async (data) => {
    let obj = { ...data };
    setisLoading(true);

    if (typeof obj?.photo == "object") {
      let url = await uploadFile(obj?.photo, "posts");
      obj.photo = url;
    }

    await modifyCollection(
      collectionTaskTypes?.edit,
      obj,
      "Post Edited successfully"
    );
    await modifyReduxState(reduxTaskTypes?.edit, obj);
    setisLoading(false);
  };

  const handleDeleteComment = async (commentObj, index) => {
    let obj = { ...commentObj };
    console.log("Expected to delete comment", commentObj, "at", index);
  };

  const handleDeletePost = async (data) => {
    let obj = { ...data };
    await modifyCollection(
      collectionTaskTypes?.delete,
      obj,
      "Post deleted successfull"
    );
    await modifyReduxState(reduxTaskTypes?.delete, obj);
  };

  return {
    posts,
    handleEditPost,
    isLoading,
    uploadProgress,
    taskMessage,
    handleDeleteComment,
    handleDeletePost,
    handleAddPost,
  };
};
/*---------------------------------------------------*/

/*-------------useTopics-----------------------------*/
export const useTopics = () => {
  const reduxTopics = useSelector((s) => s?.allTopics ?? []);
  const [topics, setTopics] = useState(reduxTopics);
  const [isLoading, setisLoading] = useState(false);
  const {
    collectionTaskTypes,
    modifyCollection,
    modifyReduxState,
    reduxTaskTypes,
    taskMessage,
    uploadFile,
    uploadProgress,
  } = useCrud(topics, setTopics, allTopics, "Topics", "id");

  const handleAddTopic = async (data) => {
    setisLoading(true);
    let obj = { ...data, id: uniqueID() };
    await modifyCollection(
      collectionTaskTypes?.save,
      obj,
      "Topic Added successfully"
    );
    await modifyReduxState(reduxTaskTypes?.create, obj);
    setisLoading(false);
  };

  const handleEditTopic = async (data) => {
    setisLoading(true);
    let obj = { ...data };
    await modifyCollection(
      collectionTaskTypes?.edit,
      obj,
      "Topic Edited successfully"
    );
    await modifyReduxState(reduxTaskTypes?.edit, obj);
    setisLoading(false);
  };

  const handleDeleteTopic = async (data) => {
    setisLoading(true);
    let obj = { ...data };
    await modifyCollection(
      collectionTaskTypes?.delete,
      obj,
      "Topic deleted successfully"
    );
    await modifyReduxState(reduxTaskTypes?.delete, obj);
    setisLoading(false);
  };

  return {
    topics,
    handleAddTopic,
    uploadProgress,
    taskMessage,
    isLoading,
    handleEditTopic,
    handleDeleteTopic,
  };
};

/*---------------------------------------------------*/

/*---------------useDashboardCalculations-------------*/
export const useDashboardCalculations = () => {
  const reduxUsers = useSelector((s) => s?.allUsers ?? []);

  const getUsersDOBThisMonth = () => {
    let array = [...reduxUsers]?.filter((item) => {
      let currentMonth = new Date()?.getMonth() + 1;
      let dobMonth = moment(item?.dateOfBirth)?.get("month");

      if (currentMonth === dobMonth) return true;
      else return false;
    });

    return Math.floor((array?.length / reduxUsers?.length) * 100);
  };

  const getUsersChartData = () => {};

  return { getUsersChartData, getUsersDOBThisMonth };
};
/*----------------------------------------------------*/

/*----------useNotifications--------------------------*/
export const useNotifications = () => {
  const reduxNotifications = useSelector((s) => s?.allNotifications ?? []);
  const [notifications, setNotifications] = useState(reduxNotifications);
  const [isLoading, setisLoading] = useState(false);
  const {
    collectionTaskTypes,
    modifyCollection,
    modifyReduxState,
    reduxTaskTypes,
    taskMessage,
  } = useCrud(
    notifications,
    setNotifications,
    allNotifications,
    "Notifications",
    "id"
  );

  const handleNewNotifications = async (data) => {
    setisLoading(true);
    let obj = { ...data, id: uniqueID(), read: false };
    await modifyCollection(
      collectionTaskTypes?.save,
      obj,
      "notification added successfully and will be visible to user later"
    );
    await modifyReduxState(reduxTaskTypes?.create, obj);

    setisLoading(false);
  };

  const handleDeleteNotifications = async (data) => {
    let obj = { ...data };
    setisLoading(true);
    await modifyCollection(
      collectionTaskTypes?.delete,
      obj,
      "notification deleted successfully"
    );
    await modifyReduxState(reduxTaskTypes?.delete, obj);
    setisLoading(false);
  };

  return {
    taskMessage,
    isLoading,
    notifications,
    handleNewNotifications,
    handleDeleteNotifications,
  };
};
/*---------------------------------------------------*/

/*------------------useProducts----------------------*/
export const useProducts = () => {
  const reduxProducts = useSelector((s) => s?.allProducts ?? []);
  const [products, setProducts] = useState(reduxProducts);
  const [isLoading, setIsLoading] = useState(false);
  const {
    collectionTaskTypes,
    modifyCollection,
    modifyReduxState,
    reduxTaskTypes,
    taskMessage,
    uploadFile,
    uploadProgress,
  } = useCrud(products, setProducts, allProducts, "Products", "id");

  const handleProductEdit = async (data) => {
    let obj = { ...data };
    setIsLoading(true);
    if (typeof obj?.photo === "object") {
      let url = await uploadFile(obj?.photo, "products");
      obj.photo = url;
    }
    await modifyCollection(
      collectionTaskTypes?.edit,
      obj,
      "Product edited successfully"
    );
    await modifyReduxState(reduxTaskTypes?.edit, obj);
    setIsLoading(false);
  };

  const handleProductAdd = async (data) => {
    let obj = { ...data, id: uniqueID() };
    setIsLoading(true);
    if (typeof obj?.photo === "object") {
      let url = await uploadFile(obj?.photo, "products");
      obj.photo = url;
    }
    await modifyCollection(
      collectionTaskTypes?.save,
      obj,
      "Product edited successfully"
    );
    await modifyReduxState(reduxTaskTypes?.create, obj);
    setIsLoading(false);
  };

  const handleDeleteProduct = async (data) => {
    let obj = { ...data };
    await modifyCollection(
      collectionTaskTypes?.delete,
      obj,
      "Product deleted successfully"
    );
    await modifyReduxState(reduxTaskTypes?.delete, obj);
  };

  return {
    products,
    isLoading,
    taskMessage,
    uploadProgress,
    handleProductEdit,
    handleProductAdd,
    handleDeleteProduct,
  };
};
/*---------------------------------------------------*/

/*------------------useLogs-------------------------*/
export const useLogs = () => {
  const reduxLogs = useSelector((s) => s?.allLogs ?? []);
  const [logs, setLogs] = useState(
    reduxLogs?.sort((a, b) => {
      if (a?.createdAt > b?.createdAt) return -1;
      else return 1
    })
  );
  const {
    collectionTaskTypes,
    modifyCollection,
    modifyReduxState,
    reduxTaskTypes,
    taskMessage,
  } = useCrud(logs, setLogs, allLogs, "Logs", "id");
  const [isLoading, setisLoading] = useState(false);

  const handleDeleteLog = async (data) => {
    setisLoading(true);
    let obj = { ...data };
    await modifyCollection(
      collectionTaskTypes?.delete,
      obj,
      "Log deleted successfully"
    );
    await modifyReduxState(reduxTaskTypes?.delete, obj);
    setisLoading(false);
  };

  return { logs, handleDeleteLog, isLoading, taskMessage };
};
/*--------------------------------------------------*/

/*-------------------useSprayLogs-----------------*/
export const useSprayLogs = () => {
  const reduxSprayLogs = useSelector((s) => s?.allSprayLogs ?? []);
  const reduxUsers = useSelector((s) => s?.allUsers ?? []);
  const [sprayLogs, setSprayLogs] = useState(
    reduxSprayLogs?.sort((a, b) => {
      if (a?.createdAt > b?.createdAt) return -1;
      else return 1
    })
  );
  const {
    collectionTaskTypes,
    modifyReduxState,
    taskMessage,
    modifyCollection,
    reduxTaskTypes,
  } = useCrud(sprayLogs, setSprayLogs, allSprayLogs, "SprayLogs", "id");
  const [isLoading, setisLoading] = useState(false);

  const handleDeleteSprayLog = async (data) => {
    setisLoading(true);
    let obj = { ...data };
    await modifyCollection(
      collectionTaskTypes?.delete,
      obj,
      "Spray log deleted successfully"
    );
    await modifyReduxState(reduxTaskTypes?.delete, obj);
    setisLoading(false);
  };

  return { sprayLogs, handleDeleteSprayLog, taskMessage, isLoading };
};

/*------------------------------------------------*/
