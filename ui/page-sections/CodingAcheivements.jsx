import { Card, Container } from "reactstrap";
import CircularLayout from "../specials/CircularLayout";
import SquareLayout from "../specials/SquareLayout";
import Link from "next/link";

const CodingAcheivements = () => {
  return (
    <div className="page-section">
      <Container fluid>
        <div className="mb-5">
          <h2 className="section-heading">Front End Acheivements</h2>
          <p className="section-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deleniti
            odit alias explicabo corporis dolorum odio quaerat blanditiis
            laborum voluptatibus aut nihil est tenetur, ipsa, esse ullam. Ipsa,
            illum inventore.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <SquareLayout containerClassName={"achievements"}>
            <Link href={"/projects#templates"} className="achievement-card ">
              <h6 className="m-0 f-6">NextNavigation.js</h6>
            </Link>
            <Link href={"/projects#templates"} className="achievement-card ">
              <h6 className="m-0 f-6">SquareLayout </h6>
            </Link>
            <Link href={"/projects#templates"} className="achievement-card ">
              <h6 className="m-0 f-6">CircleLayout</h6>
            </Link>
            <Link href={"/projects#templates"} className="achievement-card">
              <h6 className="m-0 f-6">ReduxFirebase Util</h6>
            </Link>
          </SquareLayout>
        </div>
      </Container>
    </div>
  );
};

export default CodingAcheivements;
