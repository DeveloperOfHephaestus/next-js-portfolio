import imgIllustration from "./photo-illustration.png";
/**special image component aware of src type
 * @description creates URL.createObjectURL() if type of src is object otherwise same as
 */
const Img = ({ height, width, src, alt, style, className }) => {
  return (
    <img
      alt={alt}
      height={height}
      width={width}
      className={className}
      src={
        src === "" || src === undefined
          ? imgIllustration
          : typeof src === "object"
          ? URL.createObjectURL(src)
          : src
      }
      style={style}
    />
  );
};

export default Img;
