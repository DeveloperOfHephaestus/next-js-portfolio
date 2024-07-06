"use client";
import { bottomBarLinks } from "@/dummyData";
import { Button } from "reactstrap";

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      {bottomBarLinks?.map((item, key) => {
        let Tag = item?.Tag;
        if (key < (bottomBarLinks?.length / 2))
          return (
            <Tag className="bottom-bar-link" {...item?.props}>
              {item?.icon}
             <div className="title">{item?.title}</div> 
            </Tag>
          );
      })}
      <h6 className="f-6 m-0 bottom-bar-logo">NDS</h6>
      {bottomBarLinks?.map((item, key) => {
        let Tag = item?.Tag;
        if (key > (bottomBarLinks?.length / 2)-1)
          return (
            <Tag className="bottom-bar-link" {...item?.props}>
              {item?.icon}
              <div className="title">{item?.title}</div> 
            </Tag>
          );
      })}
    </div>
  );
};

export default BottomBar;
