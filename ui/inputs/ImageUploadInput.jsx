import { Button, Label } from "reactstrap";
import imageUploadIcon from "../../assets/image-upload-icon.png";
import { MdOutlinePhotoCamera } from "react-icons/md";
const ImageUploadInput = ({
  value,
  setValue,
  id,
  imgHeight,
  imgWidth,
  imgClassName,
}) => {
  return (
    <>
      {value !== "" && value !== undefined ? (
        <div className="d-flex flex-column gap-2 align-items-center position-relative">
          <img
            src={typeof value === "object" ? URL.createObjectURL(value) : value}
            height={imgHeight}
            width={imgWidth}
            className={imgClassName}
          />
          <Label
            for={`img-upload-input-${id}`}
            className="btn d-block bg-black text-white  d-flex align-items-center justify-content-center "
          >
            Click to upload
          </Label>
        </div>
      ) : (
        <div className="d-flex flex-column gap-2 align-items-center position-relative">
          <img
            src={imageUploadIcon}
            height={imgHeight}
            width={imgWidth}
            className={imgClassName}
          />
          <Label
            for={`img-upload-input-${id}`}
            className="btn d-block bg-black text-white  d-flex align-items-center justify-content-center "
          >
            Click to upload
          </Label>
        </div>
      )}
      <input
        type="file"
        id={`img-upload-input-${id}`}
        className="d-none"
        onChange={(e) => setValue(e?.target?.files[0])}
      />
    </>
  );
};

export default ImageUploadInput;
