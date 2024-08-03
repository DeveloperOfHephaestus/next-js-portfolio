import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const ActionOptions = ({ details, link, onDeleteClick }) => {
  return (
    <UncontrolledDropdown>
      <DropdownToggle className="bg-transparent border-none d-flex justify-content-end text-black">
        <BsThreeDotsVertical size={25} />
      </DropdownToggle>
      <DropdownMenu>
        {link && (
          <DropdownItem>
            <Link
              to={link}
              state={details}
              className="bg-transparent border-transparent full-width d-flex gap-2 text-decoration-none align-items-center text-black "
            >
              <FaRegEye size={25} />
              <small className="f-5">View</small>
            </Link>
          </DropdownItem>
        )}
        {link&&<DropdownItem divider />}
        <DropdownItem
          onClick={() => onDeleteClick(details)}
          className="text-danger d-flex gap-2 align-items-center"
        >
          <RiDeleteBin6Line size={25} />
          <small className="f-6">Delete</small>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default ActionOptions;
