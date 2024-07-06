import { Card, CardBody, Col, Container, Row } from "reactstrap";
import developerImage from "@/public/developer.png";
import Image from "next/image";
import { socialLinks } from "@/dummyData";
import SpecialLink from "../specials/SpecialLink";
import Particles from "../specials/Particles";


const HeroSection = () => {
  
  return (
    <div className="page-section position-relative " style={{overflow:"hidden"}}>
   <Particles/>
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
          <Col md={6} className="position-relative">
            <Image
              style={{ animation: "up-and-down 5s linear infinite" }}
              src={developerImage}
              alt="next-dev-saif"
              className="full-width object-fit-contain"
              height={500}
            />
            <div
              style={{ bottom: 0 }}
              className="d-flex flex-wrap  justify-content-center position-absolute full-width  gap-3 align-items-center"
            >
              {socialLinks?.map((item, key) => (
                <SpecialLink
                  key={key}
                  color={item?.color}
                  description={item?.description}
                  icon={item?.icon}
                  link={item?.link}
                  title={item?.title}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
