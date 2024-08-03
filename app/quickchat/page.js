import ChatContainer from "@/ui/specials/ChatContainer";
import { BsChatDots } from "react-icons/bs";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const page = () => {
  return (
    <div className="page-section">
      <Container fluid>
        <div className="text-center mb-2">
          <h1 className="section-heading">
            <BsChatDots size={30} /> Quick Chat
          </h1>
          <p className="section-paragraph">
            You can easily and quickly contact using your next-dev-account{" "}
          </p>
        </div>

        <ChatContainer />
      </Container>
    </div>
  );
};

export default page;
