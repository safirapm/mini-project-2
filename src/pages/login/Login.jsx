import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Container, Button, Modal, CloseButton, Form } from "react-bootstrap";
import "./login.css";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      axios
        .get(
          `${process.env.REACT_APP_BASEURL}authentication/token/new?api_key=${process.env.REACT_APP_APIKEY}`
        )
        .then((response) => {
          const requestToken = response.data.request_token;
          console.log(requestToken);
          axios
            .post(
              `${process.env.REACT_APP_BASEURL}authentication/token/validate_with_login?api_key=${process.env.REACT_APP_APIKEY}`,
              {
                username: values.username, // safirapmx
                password: values.password, // #SpmDibimbing10
                request_token: requestToken,
              }
            )
            .then((res) => {
              const validatedRequestToken = res.data.request_token;
              console.log(validatedRequestToken);
              axios
                .post(
                  `${process.env.REACT_APP_BASEURL}authentication/session/new?api_key=${process.env.REACT_APP_APIKEY}`,
                  {
                    request_token: validatedRequestToken,
                  }
                )
                .then((res) => {
                  const sessionID = res.data.session_id;
                  console.log(sessionID);
                  localStorage.setItem("session", sessionID);
                  navigate("/home");
                });
            });
        });
    },
  });

  return (
    <>
      <Container className="background">
        <div className="before-modal">
          <div className="welcome">
            <h1>
              Welcome to <span style={{ fontWeight: "bold" }}>TheMovieDB</span>
            </h1>
            <h3>Your Favorite Home-Cinema.</h3>
          </div>
          <div>
            <Button
              variant="secondary"
              size="lg"
              className="click-btn"
              onClick={handleShow}
            >
              Sign In
            </Button>
          </div>
        </div>

        {/* Modal */}
        <Modal show={show} onHide={handleClose}>
          <Container fluid className="login-format">
            <div className="signin-title">Sign In</div>
            <br />
            <form onSubmit={formik.handleSubmit}>
              <div
                className="mb-8"
                htmlFor="username"
                style={{ fontWeight: "500" }}
              >
                Username
              </div>
              <input
                className="login-input"
                id="username"
                name="username"
                type="text"
                placeholder="Type your username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="no-input">{formik.errors.username}</div>
              ) : null}
              <br />
              <div
                className="mt-10 mb-8"
                htmlFor="password"
                style={{ fontWeight: "500" }}
              >
                Password
              </div>
              <input
                className="login-input"
                id="password hide-password"
                name="password"
                placeholder="Type your password"
                type={showPassword ? "text" : "password"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="no-input">{formik.errors.password}</div>
              ) : null}
              <Form>
                {["Show Password"].map((type) => (
                  <div key={`${type}`} className="mt-10">
                    <Form.Check
                      type="checkbox"
                      id={`${type}`}
                      label={`${type}`}
                      onClick={togglePassword}
                    />
                  </div>
                ))}
              </Form>
              <br />
              <button type="submit" className="btn btn-light signin-btn">
                Log In
              </button>
            </form>
          </Container>
        </Modal>
      </Container>
    </>
  );
}

export default Login;
