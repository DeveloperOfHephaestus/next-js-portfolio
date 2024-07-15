import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getAllOfCollection } from "../backend/utility";

/**Get and dispatch the collection from firebase */
export const getAndDispatchAllDataFromCollection = async (
  collection,
  reduxAction,
  reduxDispatchHook
) => {
  const response = await getAllOfCollection(collection);
  if (response) {
    reduxDispatchHook(reduxAction(response));
  } else {
    throw "Error while getting collection " + collection;
  }
};

/**updates the item in array , use with hooks */
export const updateItemOfArrayUsingStates = (
  state,
  newItem,
  setState,
  successMessage
) => {
  let array = [...state];
  let index = array?.findIndex((item) => item?._id === newItem?._id);
 try {
    array[index] = newItem;
    setState(array);
    toast.success(successMessage);
  } catch(e) {
    throw "Cannot find index "+e;
  }
};

export const deleteItemOfArrayUsingStates = (
  state,
  tobeDeleted,
  setState,
  successMessage
) => {
  let array = [...state];
  let newArray = array?.filter((item) => item?._id !== tobeDeleted?._id);
  setState(newArray);
  toast.success(successMessage);
};

export const filterBasedOnCondition=(array,condition)=>{
  let filteredArray=[...array]?.filter((item)=>condition(item))
  return filteredArray
};


