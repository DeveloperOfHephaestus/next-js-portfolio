"use client";

import NormalInput from "@/ui/inputs/NormalInput";
import SquareLayout from "@/ui/specials/SquareLayout";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "reactstrap";
import loginVector from "@/public/login-vector.png";
import Image from "next/image";
import { signIn } from "@/backend/auth";
import { useDispatch } from "react-redux";
import { userLogin } from "@/redux/action";
import { getDocByKeyValue } from "@/backend/utility";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/ui/HOC/ProtectedRoute";
import { useAuthMiddleWare } from "@/middlewares";

const page = () => {
  const navRouter = useRouter();
  const dispatch = useDispatch();
  const [loginCredentials, setLoginCredentials] = useState({
    password: "",
    email: "",
  });
  const [signupCredentials, setSignupCredentials] = useState({
    name: "",
    email: "",
  });

  const handleLogin = () => {
    if (loginCredentials?.email !== "" && loginCredentials?.password) {
      signIn(loginCredentials?.email, loginCredentials?.password)
        .then(async (uid) => {
          let [user] = await getDocByKeyValue("Users", "uid", uid);
          dispatch(userLogin(user));
          navRouter.replace("/");
        })
        .catch((r) => console.error(r));
    }
  };

  return (
    <main>
      <div className="page-section">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-around gap-4 flex-wrap ">
            <div
              className="form"
              onSubmit={(e) => {
                e?.preventDefault();
              }}
            >
              <div className="mx-3">
                <Image
                  src={loginVector}
                  height={150}
                  className="full-width object-fit-contain"
                />
                <h2 className="form-heading text-center">Log in</h2>
                <p className="f-5 text-center">
                  Log in to contact and download templates etc
                </p>
              </div>
              <div className="form-body">
                <NormalInput
                  value={loginCredentials?.email}
                  setValue={(v) =>
                    setLoginCredentials((prev) => ({
                      ...prev,
                      email: v,
                    }))
                  }
                  label={"Email"}
                  placeholder={"Write user name"}
                  type={"email"}
                />
                <NormalInput
                  label={"Password"}
                  value={loginCredentials?.password}
                  setValue={(v) =>
                    setLoginCredentials((prev) => ({ ...prev, password: v }))
                  }
                  placeholder={"Write your next-dev-saif account password"}
                  type={"password"}
                />
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  className="standard-btn"
                  onClick={() => handleLogin()}
                >
                  Log in
                </Button>
              </div>
            </div>
            <h2 className="f-6 m-0" style={{ letterSpacing: "5px" }}>
              OR
            </h2>
            <Form
              className="form"
              onSubmit={(e) => {
                e?.preventDefault();
              }}
            >
              <div className="mx-3">
                <h2 className="form-heading text-center">Signup</h2>
                <p className="f-5 text-center">
                  Signup to contact and download templates etc
                </p>
              </div>
              <div className="form-body">
                <NormalInput
                  value={loginCredentials?.name}
                  setValue={(v) =>
                    setLoginCredentials((prev) => ({
                      ...prev,
                      name: v,
                    }))
                  }
                  label={"Name"}
                  placeholder={"Write user name"}
                  type={"text"}
                />
                <NormalInput
                  label={"Email"}
                  value={loginCredentials?.email}
                  setValue={(v) =>
                    setLoginCredentials((prev) => ({ ...prev, email: v }))
                  }
                  placeholder={"Write your email"}
                  type={"email"}
                />
              </div>
              <div className="text-center">
                <Button type="submit" className="standard-btn">
                  Sign Up
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default ProtectedRoute(
  page,
  useAuthMiddleWare,
  "/",
  "You are already logged in"
);
