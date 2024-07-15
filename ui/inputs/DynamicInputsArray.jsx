import { useEffect, useState } from "react";

/**creates inputs dynamically according to inputsExpectedForArray 's length
 * @description must be used in special case where for an array you want another array of values from inputs
 */
const DynamicInputsArray = ({
  InputComponent,
  values,
  setValues,
  className,
  inputsExpectedForArray,
}) => {
  const [inputsValues, setInputsValues] = useState(
    inputsExpectedForArray?.map(() => "")
  ); //create an empty string array of same length as values

  const handleSingleValueChange = (value, at) => {
    let array = [...inputsValues];
    array[at] = value;
    setInputsValues(array);
  };

  const renderInputs = () => {
    let totalInputsRequired = inputsExpectedForArray?.length;
    let inputs = [];
    for (let i = 0; i < totalInputsRequired; i++) {
      inputs?.push(
        <InputComponent
          id={i}
          value={values[i]}
          setValue={(v) => handleSingleValueChange(v, i)}
        />
      );
    }
    return inputs;
  };

  useEffect(() => {
    if (setValues) {
      setValues(inputsValues);
    }
  }, [inputsValues]);

  return <div className={className}>{renderInputs()}</div>;
};

export default DynamicInputsArray;
