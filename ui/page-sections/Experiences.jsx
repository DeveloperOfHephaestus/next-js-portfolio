import { Col, Container, Row } from "reactstrap";
import ExperienceCard from "../cards/ExperienceCard";
import { expertise } from "@/dummyData";

const Experiences = () => {
  return (
    <div className="page-section">
      <Container fluid>
        <div className="mb-5">
          <h2 className="f-6 mb-3 section-heading text-center ">
            All of My Expertise
          </h2>
          <p className="my-0 mx-lg-5 section-paragraph text-center ">
            I specialize in leveraging React and Next.js to build robust and
            responsive web applications, seamlessly integrating Firebase for
            scalable backend solutions. My proficiency extends to creating
            immersive 3D experiences using React Three Fiber and Three.js,
            pushing the boundaries of visual storytelling and interactive
            design. With a focus on performance and user experience, I combine
            these technologies to deliver engaging digital solutions that
            captivate and innovate.
          </p>
        </div>
        <Row className=" g-5 justify-content-center ">
          {expertise?.map((item, key) => (
            <Col md={6} xl={4} key={key}>
              <ExperienceCard
                Icon={item?.Icon}
                link={item?.link}
                IconColor={item?.IconColor}
                description={item?.description}
                title={item?.title}
                value={item?.value}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Experiences;
