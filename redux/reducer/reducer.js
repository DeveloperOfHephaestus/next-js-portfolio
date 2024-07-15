const initialValue = {
  allProjects: [],
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
    default:
      return state;
  }
};

export default reducerData;
