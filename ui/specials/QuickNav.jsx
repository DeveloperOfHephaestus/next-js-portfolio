import { Card, CardBody } from "reactstrap";
import specialStyles from "./SpecialStyles.module.css";
import { quickNavItems } from "../../dummyData";
import { Link, useLocation } from "react-router-dom";

const QuickNav = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={`${specialStyles?.quick_nav}  border-transparent border-transparent mx-2 `}
    >
      {quickNavItems?.map((item, key) => (
        <Link
          key={key}
          className={` ${
            pathname === item?.link
              ? specialStyles?.quick_nav_item_active
              : specialStyles?.quick_nav_item
          }  `}
          to={item?.link}
        >
          {item?.icon}
        </Link>
      ))}
    </div>
  );
};

export default QuickNav;
