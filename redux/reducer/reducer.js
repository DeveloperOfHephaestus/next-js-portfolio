const initialValue = {
  allProjects: [],
  allUserChats: [],
  user: {},
};

const reducerData = (state = initialValue, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "ALLPROJECTS": {
      return { ...state, allProjects: action.payload };
    }
    case "ALLUSERCHATS": {
      return { ...state, allUserChats: action.payload };
    }
    default:
      return state;
  }
};

export default reducerData;
