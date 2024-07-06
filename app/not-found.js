import Link from "next/link";

const NotFound = () => {
  return (
    <div
      style={{ minHeight: "90vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div>
        <h1 className="f-6 text-center">404</h1>
        <h5 className="f-6 text-center">Page Under Development</h5>
        <p className="mb-3">This is a test release and is in development</p>

        <Link  className="text-center d-block full-width" href={"/"}>Go to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
