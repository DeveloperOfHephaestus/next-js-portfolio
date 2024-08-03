import { Button } from "reactstrap";
import specialStyles from "./SpecialStyles.module.css";

const NavigatorTab = ({ flowAt, items, onItemClick,className }) => {
  return (
    <div className={`${specialStyles?.navigator_tab} ${className}`}>
      {items?.map((item, key) => (
        <Button
          onClick={() => onItemClick(item)}
          key={key}
          className={`${specialStyles?.navigator_tab_item} ${
            item?.flowAt === flowAt
              ? specialStyles?.navigator_tab_item_active
              : ""
          }`}
        >
          {item?.title}
        </Button>
      ))}
    </div>
  );
};

export default NavigatorTab;
