"use client";

import { useRouter } from "next/navigation";
import Loading from "../specials/Loading";

/**this special component protects the route for authentication and other purposes using Higher Order Component
 * @param WrappedComponent must be react-functional-component 
 * @param middleware a custom hook that returns boolean on which WrappedComponent will be rendered or not
 * @param redirectURL url to redirect if condition is not true
 * @param reason a message to be shown and then redirect occurs
 */
const ProtectedRoute = (WrappedComponent, middleware, redirectURL, reason) => {
  return (props) => {
    const navRouter = useRouter();
    const condition = middleware();
    if (!condition) {
      return (
        <div className="page-section d-flex align-items-center flex-column justify-content-center">
          <h1 className="f-6">404</h1>
          <strong className="d-block text-center">{reason}</strong>{" "}
          {navRouter.replace(redirectURL)}
        </div>
      );
    } else return <WrappedComponent />;
  };
};

export default ProtectedRoute;
