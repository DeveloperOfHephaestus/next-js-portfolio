import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Label,
  UncontrolledDropdown,
} from "reactstrap";

const DropDownInput = ({ value, setValue, options }) => {
  return (
    <UncontrolledDropdown>
      <DropdownToggle className="border-transparent bg-transparent text-black " caret>
        {typeof value == "object" ? value?.title : value?.name}
      </DropdownToggle>

      <DropdownMenu>
        {options?.map((item, key) => (
          <DropdownItem key={key} onClick={() => setValue(item)}>
            {typeof item === "object" ? item?.title ?? item?.name : item}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default DropDownInput;
