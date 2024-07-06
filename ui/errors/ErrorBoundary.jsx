"use client";
import { Component } from "react";
import { Card, CardBody, Modal, ModalBody, ModalHeader } from "reactstrap";
import { MdOutlineErrorOutline } from "react-icons/md";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "" };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error: error?.stack?.toString() };
  }
  componentDidCatch(error, errorInfo) {
    // You can use your own error logging service here
    console.error(error, errorInfo);
  }
  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Card
       
          className="text-danger border-none"
        >
          <CardBody
            style={{ background: "linear-gradient(white,whitesmoke)" }}
            className="border-none"
          >
           
            <h2 className="mb-3"> Oops, there is an error!</h2>
            <p className="f-5" style={{lineHeight:'30px'}}>{this.state.error}</p>
          </CardBody>
        </Card>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
