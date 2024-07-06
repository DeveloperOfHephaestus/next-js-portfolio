import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";
import reUsableTemp2 from "@/public/dashboard-customization.png";

const Customization = () => {
  return (
    <div className="page-section">
      <Container fluid>
        <Row className="g-3 ">
          <Col md={5} className="d-flex align-items-center">
            <div className="">
              <h2 className="section-heading mb-3 f-6 text-center text-md-start">
                Customization
              </h2>
              <p className="section-paragraph mb-3 text-center text-md-start">
                I believe user should be able to customize their admin
                panel.Featuring intuitive dashboard settings, users can
                effortlessly personalize their admin panel with various theme
                options.
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
                src={reUsableTemp2}
                className="full-width mb-2"
                style={{ objectFit: "contain", height: "auto" }}
                alt="re-usable dashboard template 2"
              />
              <p className="f-6 section-paragraph mb-0">Admin Template</p>
              <small className="f-6">Customizable Admin Pannel Template</small>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Customization;
