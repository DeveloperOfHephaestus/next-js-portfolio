"use client";
import { FormGroup, Input, Label } from "reactstrap";

const NormalInput = ({
  value,
  setValue,
  placeholder,
  disabled,
  type,
  label,
  options,
  className,
  inputClassName,
  inputStyle,
  required,
}) => {
  return (
    <FormGroup className={className}>
      {label && <Label className="f-5">{label}</Label>}
      <Input
        required={required}
        value={value}
        type={type}
        style={inputStyle}
        disabled={disabled}
        placeholder={placeholder}
        className={inputClassName}
        onChange={(e) =>
          type == "file"
            ? setValue(e.target.files[0])
            : setValue(e.target.value)
        }
      >
        {type == "select" ? (
          <>
            {options?.map((item, k) => (
              <option key={k} selected={k == 0}>
                {typeof item === "object" ? item?.title : item}
              </option>
            ))}
          </>
        ) : null}
      </Input>
    </FormGroup>
  );
};

export default NormalInput;
