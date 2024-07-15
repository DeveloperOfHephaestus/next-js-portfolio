export const userLogin = (payload) => {
  return {
    type: "LOGIN",
    payload: payload,
  };
};

export const allProjects = (payload) => {
  return { type: "ALLPROJECTS", payload: payload };
};
