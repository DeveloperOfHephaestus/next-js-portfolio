import specialStyles from "./SpecialComponentStyles.module.css";

const SquareLayout = ({
  children,
  containerClassName,
  diamondLayout,
  containerWidth,
  squareBoxWidth,
}) => {
  const totalRows = children?.length / 2;

  if (children?.length % 2 !== 0) {
    return <strong>Square Layout failed ,children count are not even</strong>;
  } else {
  }

  return (
    <div
      className={`${specialStyles?.square_layout_container} `}
      style={{ width: containerWidth }}
    >
      <div
        className={`${specialStyles?.square_layout_box} ${containerClassName}`}
        style={{ width: squareBoxWidth }}
      >
        <div className="d-flex gap-3 gap-md-3  mb-3 mb-md-3 justify-content-between flex-wrap">
          <div
            className={specialStyles?.square_layout_item}
            style={{ "--transformX": "-15%", "--transformY": "-50%" }}
          >
            {children[0]}
          </div>
          <div
            className={specialStyles?.square_layout_item}
            style={{ "--transformX": "15%", "--transformY": "-50%" }}
          >
            {children[1]}
          </div>
        </div>
        <div className="d-flex  gap-3 gap-md-3  mb-3 mb-md-3  justify-content-between flex-wrap">
          <div
            className={specialStyles?.square_layout_item}
            style={{ "--transformX": "-15%", "--transformY": "50%" }}
          >
            {children[2]}
          </div>
          <div
            className={specialStyles?.square_layout_item}
            style={{ "--transformX": "15%", "--transformY": "50%" }}
          >
            {children[3]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareLayout;
