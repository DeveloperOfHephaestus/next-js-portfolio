import { Modal, ModalBody } from "reactstrap";

const ProgressBar = ({ progress, isShowing,title }) => {
  return (
    <Modal isOpen={isShowing} centered>
      <ModalBody>
        <h5 className="f-5">{title}</h5>
        <div
          style={{ height: 30, width: "100%" }}
          className="d-flex bg-black align-items-center justify-content-start "
        >
          <div
            className="bg-primary"
            style={{ height: "100%", width: `${progress}%` }}
          ></div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ProgressBar;
