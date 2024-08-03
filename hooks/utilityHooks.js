/*---------------------------------------------------------*/

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, saveData, uploadImage } from "../backend/utility";
import { toast } from "react-toastify";
import NavigatorTab from "@/ui/specials/NavigatorTab";
import PaginationControls from "@/ui/specials/PaginationControls";

/**pagination hook use with PaginationControls Component */
export const usePagination = (items, itemsPerPage) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const indexOfLastItem = currentPageIndex * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [currentItemsShown, setCurrentItemsShown] = useState();
  const PageNumbers = [];
  for (let i = 1; i <= Math.ceil(items?.length / itemsPerPage); i++) {
    PageNumbers.push(i);
  }

  const getPreviousIndex = () => {
    if (currentPageIndex == 1) return;
    else setCurrentPageIndex(currentPageIndex - 1);
  };
  const getNextIndex = () => {
    if (currentPageIndex == PageNumbers.length) return;
    else setCurrentPageIndex(currentPageIndex + 1);
  };

  useEffect(() => {
    setCurrentItemsShown(items?.slice(indexOfFirstItem, indexOfLastItem));
  }, [items, currentPageIndex]);

  return {
    PageNumbers,
    currentItemsShown,
    setCurrentItemsShown,
    currentPageIndex,
    getNextIndex,
    getPreviousIndex,
    setCurrentPageIndex,
    pageCount: Math.ceil(items?.length / itemsPerPage),
  };
};

/*--------------useScreenWidth-----------------*/
/**a custom hook aware of screen for responsiveness
 * @returns  `recommendedview`  can be either cards or table . for shorts its cards and for large its table
 * @param breakPoint is size , from which greater values will return table and smaller values will return cards
 */
export const useScreenWidth = (breakPoint) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [recommendedview, setRecommendedView] = useState(
    window.innerWidth >= breakPoint ? "table" : "cards"
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > breakPoint) {
        setRecommendedView("table");
      } else {
        setRecommendedView("cards");
      }
    };

    window.addEventListener("resize", handleResize);
    if (window.innerWidth >= breakPoint) {
      setRecommendedView("table");
    } else setRecommendedView("cards");

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { screenWidth, recommendedview };
};

/*-------------useCrud-------------------*/
/**special hook for dealing with edit delete and add in redux to avoid rewriting code
 * @param items the state array on which crud will be applied
 * @param setItems the setState of array
 * @param reduxAction redux action related to particular data
 * @param collectionName the name of collection in firebase
 * @param uniqueProperty the unique property like id or _id of documents in collection or objects in array
 */
export const useCrud = (
  items,
  setItems,
  reduxAction,
  collectionName,
  uniqueProperty
) => {
  const [taskMessage, setTaskMessage] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const reduxTaskTypes = { create: "create", edit: "edit", delete: "delete" };
  const collectionTaskTypes = { save: "save", edit: "edit", delete: "delete" };
  const dispatch = useDispatch();

  /**register a crud task for redux . Use this after saving to firebase collection
   * @param taskType must be one of reduxTaskTypes
   * @param newEntry the obj to be deleted ,edited or added to array
   */
  const modifyReduxState = (taskType, newEntry) => {
    switch (taskType) {
      case reduxTaskTypes?.create: {
        let array = [...items, newEntry];
        setItems(array);
        break;
      }
      case reduxTaskTypes?.edit: {
        let array = [...items];
        let index = array?.findIndex(
          (item) => item[uniqueProperty] === newEntry[uniqueProperty]
        );
        array[index] = newEntry;
        setItems(array);
        break;
      }
      case reduxTaskTypes?.delete: {
        let array = [...items]?.filter(
          (item) => item[uniqueProperty] !== newEntry[uniqueProperty]
        );
        setItems(array);
        break;
      }
      default: {
        throw "Unknown reduxTaskType";
      }
    }
  };

  /**use this to upload files to firebase as well as get progress */
  const uploadFile = async (file, folderName) => {
    setUploadProgress(0);
    setTaskMessage(`Uploading ${file?.name}`);
    try {
      const url = await uploadImage(file, folderName, setUploadProgress);
      return url;
    } catch (e) {
      setTaskMessage(`Error occured while uploading ${file?.name} `);
      throw e;
    }
  };

  /**throws or remove the object in firebase collection whoes collectionName is recieved by hook during initialization
   * @param taskType must be one of collectionTaskTypes
   * @param entry json obj
   * @param successMessage the message to be shown in toast
   */
  const modifyCollection = async (taskType, entry, successMessage) => {
    if (
      taskType === collectionTaskTypes?.save ||
      taskType === collectionTaskTypes?.edit
    ) {
      setTaskMessage(
        `${
          collectionTaskTypes?.save
            ? "Saving to database..."
            : "Updating in database..."
        }`
      );
      try {
        await saveData(collectionName, entry[uniqueProperty], entry);
        toast.success(successMessage);
        setTaskMessage(successMessage);

        return true;
      } catch (e) {
        throw e;
      }
    } else if (taskType === collectionTaskTypes?.delete) {
      setTaskMessage("Deleting from databse");
      try {
        await deleteData(collectionName, entry[uniqueProperty]);
        toast.success(successMessage);
        setTaskMessage(successMessage);
        return true;
      } catch (e) {
        throw e;
      }
    } else throw "Unknow collectionTaskType";
  };

  useEffect(() => {
    dispatch(reduxAction([...items]));
  }, [items]);

  return {
    taskMessage,
    uploadProgress,
    reduxTaskTypes,
    modifyCollection,
    modifyReduxState,
    uploadFile,
    collectionTaskTypes,
  };
};

/*----------------------------------------*/

/*------------usePagePackage------------------*/
/**use the components and functions of this hook to design your own ui for page
 * @param adaptLayout if is present the itemsDisplayType changes according to screen width using useScreenWidth()
 * @param searchItemsByCondition a callback fxn while filtering items in search
 * @param adaptLayoutBreakPoint the break point for changing itemsDisplayType
 * @description it is recommended to use in case where you want to match  design or your own ui
 * @returns usefull states for making a dashboard items page
 */
export const usePagePackage = (
  items,
  itemsPerPage,
  adaptLayout,
  searchItemsByCondition,
  adaptLayoutBreakPoint
) => {
  const { recommendedview } = useScreenWidth(adaptLayoutBreakPoint);
  const [itemsDisplayType, setItemsDisplayType] = useState(recommendedview);
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchedResults, setSearchedResults] = useState([]);

  useEffect(() => {
    if (adaptLayout) {
      setItemsDisplayType(recommendedview);
    }
  }, [recommendedview]);

  useEffect(() => {
    if (searchValue !== "") setIsSearching(true);
    else setIsSearching(false);
    if (searchItemsByCondition && isSearching) {
      let itemsToSearchFrom = [...items];
      let results = itemsToSearchFrom?.filter((item) =>
        searchItemsByCondition(searchValue?.toUpperCase(), item)
      );
      setSearchedResults(results);
    }
  }, [searchValue]);

  const {
    PageNumbers,
    currentItemsShown,
    currentPageIndex,
    getNextIndex,
    getPreviousIndex,
    setCurrentItemsShown,
    setCurrentPageIndex,
    pageCount,
  } = usePagination(items, itemsPerPage);

  return {
    searchParams: { searchedResults, setSearchValue, searchValue, isSearching },
    paginationParams: {
      PageNumbers,
      currentItemsShown,
      currentPageIndex,
      getNextIndex,
      getPreviousIndex,
      setCurrentItemsShown,
      setCurrentPageIndex,
      pageCount,
    },
    itemsDisplayType,
    setItemsDisplayType,
  };
};
/*---------------------------------------------*/
