const SpecialLink = ({ title, description, icon, link, color }) => {
  return (
    <a className="special-link px-4  border-none" href={link}>
      <div className="icon" style={{ color: color }}>
        {icon}
      </div>
      <div className="detail">
        <p className="f-6 m-0 ">{title}</p>
        <small className="f-5 d-block">{description}</small>
      </div>
    </a>
  );
};

export default SpecialLink;
