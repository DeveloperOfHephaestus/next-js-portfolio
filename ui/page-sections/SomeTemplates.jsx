import { Card, CardBody, CardImg, Col, Container, Row } from "reactstrap";
import StandardSlider from "../specials/StandardSlider";
import Image from "next/image";
import reUsableTemp1 from "@/public/reuseable-template-1.png";
import ExperienceCard from "../cards/ExperienceCard";
import Link from "next/link";

const SomeTemplates = () => {
  return (
    <div className="page-section  ">
      <Container fluid>
        <Row className="g-3 ">
          <Col md={5} className="d-flex align-items-center">
            <div className="">
              <h2 className="section-heading mb-3 f-6 text-center text-md-start">
                Reuseable Responsive Templates
              </h2>
              <p className="section-paragraph mb-3 text-center text-md-start">
                Each admin panel template combines elegant design with robust
                functionality, offering intuitive navigation and comprehensive
                features tailored to meet the demands of modern digital
                environments. Explore my portfolio to see how these admin panel
                templates can elevate your project with efficiency and style.
              </p>
              <div className="text-center text-md-start">
                <Link href={`/projects#templates`} className="btn standard-btn">
                  See More
                </Link>
              </div>
            </div>
          </Col>
          <Col md={7} className="">
            <div className="text-center">
              <Image
                src={reUsableTemp1}
                className="full-width mb-2"
                style={{ objectFit: "contain", height: "auto" }}
                alt="re-usable dashboard template"
              />
              <p className="f-6 section-paragraph mb-0">Admin Template</p>
              <small className="f-6">Reusable Admin Pannel Template</small>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SomeTemplates;
