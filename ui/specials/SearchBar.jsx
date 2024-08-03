import { Input } from "reactstrap";
import specialStyles from "./SpecialStyles.module.css";
import { CiSearch } from "react-icons/ci";
const SearchBar = ({ value, setValue ,placeholder}) => {
  return (
    <div className={specialStyles?.search_bar}>
        <div className="">
        <CiSearch size={20} />
      </div>
      <Input
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e?.target?.value)}
        className="border-transparent bg-transparent mx-2"
      />
    
    </div>
  );
};

export default SearchBar;
