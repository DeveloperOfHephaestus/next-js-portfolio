import { TbError404 } from "react-icons/tb";
const UnderDevelopment = () => {
  return (
    <div
      style={{ minHeight: "90vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div>
        <h1 className="text-center">
         404
        </h1>
        <h4 className="f-5 text-center text-black mb-2">Oprimaze</h4>
        <p className="f-4 text-center">
          Page is either removed or under development
        </p>
      </div>
    </div>
  );
};

export default UnderDevelopment;
