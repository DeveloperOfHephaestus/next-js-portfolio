import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";

const ExperienceCard = ({
  title,
  value,
  description,
  Icon,
  IconColor,
  link,
}) => {
  return (
    <Card className="border-none exp-card full-height">
      <CardHeader
        className="f-5 border-none py-3 bg-transparent "
        tag={"div"}
      >
        <h5 className="f-6 m-0">{title}</h5>
        <small className="value">{value}%</small>
      </CardHeader>
      <CardBody className="text-center ">
        <Icon size={150} color={IconColor} className="mb-3" />
        <p className="f-5 m-0">{description}</p>
      </CardBody>
      <CardFooter className="border-none d-flex justify-content-between  bg-transparent">
        <small className="text-black f-6">Check</small>
        <a className="text-black" href={link}>
          <small className="f-6">Click here </small>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ExperienceCard;
