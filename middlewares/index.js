import { useSelector } from "react-redux";

export const useAuthMiddleWare = () => {
  const { uid } = useSelector((s) => s?.user ?? {});

  if (!uid) {
    return true;
  } else return false;
};
