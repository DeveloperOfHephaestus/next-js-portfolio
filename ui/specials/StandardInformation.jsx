const StandardInformation = ({ title, value }) => {
  return (
    <div>
      <p className="f-5 m-0">{title}</p>
      <small className="standard-information">{value}</small>
    </div>
  );
};

export default StandardInformation;
