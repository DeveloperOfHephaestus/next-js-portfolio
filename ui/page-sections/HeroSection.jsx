import { Card, CardBody, Col, Container, Row } from "reactstrap";
import developerImage from "@/public/developer.png";
import Image from "next/image";
import { socialLinks } from "@/dummyData";
import SpecialLink from "../specials/SpecialLink";
import ThreejsRenderer from "../React-three-fiber/ThreejsRenderer";
import Box from "../React-three-fiber/Box";
import { randFloat } from "three/src/math/MathUtils";
import Group from "../React-three-fiber/Group";
import Banner3DModal from "../React-three-fiber/Banner3DModal";
import { Suspense } from "react";
import WaveBg from "../React-three-fiber/WaveBg";

const HeroSection = () => {
  return (
    <div
      className="page-section position-relative "
      style={{ overflow: "hidden" }}
    >
      {/* three js content */}
      <ThreejsRenderer>
        <directionalLight intensity={3} color={"white"} />
        <directionalLight intensity={4} position={[0, 0, 5]} />
        <directionalLight intensity={5} position={[-3, 5, 0]} />

        <WaveBg />
        <Suspense
          fallback={
            <mesh>
              <boxGeometry />
              <meshBasicMaterial color={"red"} />
            </mesh>
          }
        >
          <Banner3DModal position={[2, -3, 0]} />
        </Suspense>
        <Group position={[2, 0, 0]} smallerDevicePosition={[0, -2, 0]}>
          <Box
            position={[randFloat(-4, 4), 0, randFloat(-4, 4)]}
            texturePath={"./next-js-logo.png"}
          />
          <Box
            position={[randFloat(-4, 4), 0, randFloat(-4, 4)]}
            texturePath={"./firebase-logo.png"}
          />
          <Box
            position={[randFloat(-4, 4), 0, randFloat(-4, 4)]}
            texturePath={"./bootstrap-logo.png"}
          />
          <Box
            position={[randFloat(-4, 4), 0, randFloat(-4, 4)]}
            texturePath={"./three-js-logo.png"}
          />
          <Box
            position={[randFloat(-4, 4), 0, randFloat(-4, 4)]}
            texturePath={"./redux-logo.png"}
          />
          <Box
            position={[randFloat(-4, 4), 0, randFloat(-4, 4)]}
            texturePath={"./react-logo.png"}
          />
        </Group>
      </ThreejsRenderer>
      {/* three js content */}
      <Container fluid>
        <Row className="g-2">
          <Col md={6} className="d-flex align-items-center">
            <div>
              <div className="mb-4 ">
                <h1
                  style={{ fontSize: "50px" }}
                  className="section-heading mb-3 f-6 text-center text-md-start"
                >
                  Next-Dev-Saif
                </h1>
                <p className="section-paragraph m-0  text-center text-md-start">
                  Looking for a developer passoniate about web development ? I
                  believe if you dont push boundaries you will never know what
                  you are capable to do . So here is your next-developer-saif
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} style={{ minHeight: "50vh" }}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
