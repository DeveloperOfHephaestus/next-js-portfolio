"use client";
import { Button, Col, Container, Row } from "reactstrap";
import MobileAppSimulator from "../specials/MobileAppSimulator";
import { useState } from "react";

const PushBoundaries = () => {
  const [flowAt, setFlowAt] = useState(0);

  const renderMobileScreen = () => {
    switch (flowAt) {
      case 0:
        return (
          <>
            <p className="text-white mb-3 text-center">CLick the button below</p>
            <div className="d-flex justify-content-center">
              <Button
                style={{ height: "40px", width: "70px" }}
                className=" bg-dark border-none d-flex align-items-center justify-content-center"
                onClick={() => setFlowAt(1)}
              >
                Click
              </Button>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <h5 className="f-6 text-center">Boom !!! Click back arrow</h5>
          </>
        );
      default:
        return;
    }
  };

  return (
    <div className="page-section  ">
      <Container fluid>
        <Row className="g-2">
          <Col
            md={6}
            className="position-relative d-flex justify-content-center"
          >
            <MobileAppSimulator
              activeScreen={
                <div className="d-flex mt-5 flex-column justify-content-center">
                  <h5 className="text-white text-center">Mobile Simulator</h5>
                  <p className="f-5 text-white text-center">
                    Fully responsive mobile screen component to showcase some
                    app screens for app landing pages
                  </p>
                  {renderMobileScreen()}
                </div>
              }
              flowAt={flowAt}
              setFlowAt={setFlowAt}
              onBackClick={() => setFlowAt(0)}
            />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <div>
              <div className="mb-4 ">
                <h2 className="section-heading mb-3 f-6 text-center text-md-start">
                  Pushed Several Boundaries
                </h2>
                <p className="section-paragraph m-0  text-center text-md-start">
                  I've pushed several boundaries in my work, including the
                  creation of a mobile simulator using React that accurately
                  mimics key screens of mobile applications. This innovative
                  tool showcases my expertise in frontend development and UI/UX
                  design, providing a realistic preview of app functionalities
                  and interactions. By combining React's flexibility with
                  meticulous attention to detail, I strive to redefine user
                  testing and development workflows, ensuring seamless and
                  intuitive mobile experiences.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PushBoundaries;
