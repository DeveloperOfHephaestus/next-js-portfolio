"use client";
import { quickActions } from "@/dummyData";
import Link from "next/link";
import { useState } from "react";
import { SlActionRedo } from "react-icons/sl";

import {
  Button,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
  Tooltip,
  UncontrolledTooltip,
} from "reactstrap";
const QuickActions = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen((prev) => !prev);
  return (
    <div
      className="position-fixed"
      style={{
        right: 0,
        top: "50%",
        zIndex: 20,
      }}
    >
      <Button
        onClick={() => toggleModal()}
        id="quick-action"
        className=" p-2 border-none"
        style={{
          color: "dodgerblue",
          background: "linear-gradient(white,whitesmoke)",
          borderRadius: "0.5rem",
        }}
      >
        <SlActionRedo size={20} className="icon" />
      </Button>
      <UncontrolledTooltip target={"quick-action"}>
        Quick Actions : Share, Read blog or Read Developer logs
      </UncontrolledTooltip>

      <Modal 
      fade={false}
      isOpen={modalOpen} toggle={toggleModal} centered>
        <ModalHeader>
          <div className="d-flex  flex-row full-width justify-content-between">
            <div>
              <h3 className=" f-5 m-0 ">Quick Actions</h3>
            </div>
            <Button
              onClick={() => toggleModal()}
              className="bg-transparent m-0 border-none text-danger"
            >
              close
            </Button>
          </div>
        </ModalHeader>

        <ModalBody>
          <div>
            {quickActions?.map((action, key) => {
              if (action?.isBtn)
                return (
                  <Button
                    key={key}
                    className="full-width  border-none bg-transparent   d-flex align-items-center gap-2 px-0 my-2 py-2"
                    //   onClick={() => navigator?.clipboard?.writeText("dddd")}
                  >
                    {action?.icon} {action?.title}
                  </Button>
                );
              else
                return (
                  <Link
                    key={key}
                    className="full-width d-flex align-items-center gap-2 px-0 btn  my-2 py-2 "
                    href={action?.to}
                  >
                    {action?.icon} {action?.title}
                  </Link>
                );
            })}
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default QuickActions;
