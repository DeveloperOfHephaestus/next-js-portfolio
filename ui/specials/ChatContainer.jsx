"use client";

import { getAllOfCollection } from "@/backend/utility";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Row,
} from "reactstrap";

const ChatContainer = () => {
  const currentUser = useSelector((s) => s?.user ?? {});
  const allReduxChats = useSelector((s) => s?.allUserChats ?? []);
  const [currentMessages, setCurrentMessages] = useState(allReduxChats);

  useEffect(() => {
    setCurrentMessages(allReduxChats);
  }, [allReduxChats]);

  const handleNewMessage = (messageObj) => {};

  return (
    <Card className="standard-card mx-lg-5">
      <CardHeader className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <img
            src={currentUser?.profilePhoto}
            height={50}
            width={50}
            className="avatar"
          />
          <h6 className="m-0 f-7">{currentUser?.name}</h6>
        </div>
        <p className="f-6 m-0 on-sm-hide">Chatting with Developer</p>
      </CardHeader>
      <CardBody style={{ height: "400px", overflow: "hidden scroll" }}>
        {currentMessages?.map((obj, key) => (
          <small className="f-5">{obj?.text}</small>
        ))}
      </CardBody>
      <CardFooter className="d-flex on-sm-wrap align-items-center justify-content-between gap-2">
        <Input className="full-width" placeholder="Write your message here" />
        <Button className="standard-btn on-sm-full-width">Send</Button>
      </CardFooter>
    </Card>
  );
};

export default ChatContainer;
