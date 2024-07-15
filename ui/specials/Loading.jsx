import { Spinner } from "reactstrap";
import introImg from "@/public/developer.png";
import Image from "next/image";

const Loading = () => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className="loading"></div>
    </div>
  );
};

export default Loading;
