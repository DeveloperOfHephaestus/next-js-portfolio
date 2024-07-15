import { Button, Label } from "reactstrap";
import imageUploadIcon from "../../assets/image-upload-icon.png";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
const MultipleImagesUpload = ({ value, setValue, id }) => {
  const handleRemovePhoto = (index) => {
    let array = [...value];
    array[index] = null;
    let newArray = array?.filter((item) => item !== null);
    setValue(newArray);
  };

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          height: "250px",
          width: "257px",
          background: "rgba(248, 248, 248, 1)",
          boxShadow: "-0.96px 0 0 1px rgba(228, 230, 232, 1)",
          borderRadius: "22px",
        }}
      >
        <Label
          className="d-block cursor-pointer text-center"
          for={`img-upload-input-${id}`}
        >
          <img
            src={imageUploadIcon}
            height={55}
            width={55}
            className="object-fit-contain"
          />
          <small className="d-block f-5 color-half-black text-center">
            Upload Images here
          </small>
        </Label>
        <input
          id={`img-upload-input-${id}`}
          className="d-none"
          type="file"
          multiple
          onChange={(e) => {
            let newValue = [[...value], ...e?.target?.files]?.flat();
            setValue(newValue);
          }}
        />
      </div>
      <div className="my-3 d-flex align-items-center gap-2 flex-wrap">
        {value?.map((image, key) => {
          if (image !== "")
            return (
              <div key={key}
              style={{height:288,width:288}}
              className="position-relative">
                <img
                  key={key}
                  src={
                    typeof image === "object"
                      ? URL.createObjectURL(image)
                      : image
                  }
                  height={288}
                  width={288}
                  style={{ objectPosition: "left",borderRadius:'22px' }}
                  className="object-fit-contain"
                />
                <Button 
                className="bg-transparent border-none text-danger"
                 style={{position:'absolute',top:0,right:0}}
                onClick={() => handleRemovePhoto(key)}><RiDeleteBin5Fill size={20}/></Button>
              </div>
            );
        })}
      </div>
    </>
  );
};

export default MultipleImagesUpload;
