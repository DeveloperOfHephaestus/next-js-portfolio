"use client";
import specialStyles from "./SpecialComponentStyles.module.css";

/**special component that shows the cards as collection like playlist  */
const Collection = ({ children }) => {
  return (
    <div className={specialStyles?.collection}>
      {children?.map((item, key) => (
        <div key={key}
        style={{left:`${key*5+10}%`,top:`${key*5}%`,zIndex:children?.length-key}}
        className={specialStyles?.collection_child}>{item}</div>
      ))}
    </div>
  );
};

export default Collection;
