"use client";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Row,
} from "reactstrap";
import specialStyles from "./SpecialComponentStyles.module.css";
import { useEffect, useState } from "react";
import { CiCircleChevRight } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const StandardFAQs = ({ faqs }) => {
  const [currentFaqs, setCurrentfaqs] = useState(
    faqs?.map((item, key) => {
      return { ...item, id: key };
    })
  );
  const [isAnimating, setisAnimating] = useState(false);
  const [currentlyShown, setCurrentlyShown] = useState(currentFaqs[0]);

  useEffect(() => {
    setCurrentfaqs(
      faqs?.map((item, key) => {
        return { ...item, id: key };
      })
    );
  }, [faqs]);

  useEffect(() => {
    setisAnimating(true);
  }, [currentlyShown]);

  return (
    <Row className="gy-2">
      {currentFaqs?.map((item, key) => (
        <Col md={8} key={key}>
          <Card
            onClick={() => setCurrentlyShown(item)}
            className={specialStyles?.standard_faq}
          >
            <CardBody className="px-0">
              <div className="d-flex align-items-center justify-content-between">
                <h6 className="mb-lg-0 mb-md-0 mb-1 f-5">
                  {item?.question}
                </h6>
             
              </div>
              <div>
                <Collapse isOpen={currentlyShown?.id === item?.id}>
                  <p className="f-4 m-0">{item?.answer}</p>
                </Collapse>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default StandardFAQs;
