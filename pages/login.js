import loginStyles from "../styles/Login.module.css";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import $ from "jquery";
import { useRouter } from "next/router";
import {
  faSignIn,
  faIdBadge,
  faLock,
  faKey,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import AppConstant from "../connect/app_constants";
import Index from "./index";
export default function Login() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [tcNo, setTcNo] = useState("");
  const [forgotTcNo, setForgottcNo] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState("");
  const handleTcNo = (event) => {
    setTcNo(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleForgot = (event) => {
    setForgottcNo(event.target.value);
  };
  const idBadgeElement = (
    <FontAwesomeIcon icon={faIdBadge} className={`mx-auto faIdBadge`} />
  );
  const lockElement = (
    <FontAwesomeIcon icon={faLock} className={`mx-auto faLock`} />
  );
  const signElement = (
    <FontAwesomeIcon
      icon={faSignIn}
      className={`mx-auto ${loginStyles.faSignIn} faSignIn`}
    />
  );
  const forgotPasswordElement = (
    <FontAwesomeIcon
      icon={faKey}
      className={`${loginStyles.forgot2} ${loginStyles.faKey2} mx-auto`}
    >
      &nbsp;
    </FontAwesomeIcon>
  );
  const sendElement = (
    <FontAwesomeIcon icon={faPaperPlane} className={`faPaperPlane mx-auto`} />
  );

  if (AppConstant.isLogged) {
    return <Index></Index>;
  }
  return (
    <>
      <Head>
        <title>Giriş - İÜC ÖBS</title>
      </Head>
      <div className={loginStyles.body}>
        <div className={`container ${loginStyles.containerText}`}>
          <div className="row" style={{ minHeight: "100vh" }}>
            <div
              className="col-md-7 col-lg-5 col-10 mx-auto my-auto"
              style={{ position: "relative", top: "-50px" }}
            >
              <div className={loginStyles.loginLogo}>
                <Image
                  src="/login/iuclogo.png"
                  alt="Logo"
                  layout="responsive"
                  width="100%"
                  height="100%"
                ></Image>
              </div>
              <div className={loginStyles.loginArea}>
                <form action="/">
                  <div
                    className="mt-3 mb-3"
                    style={{
                      fontSize: "16pt",
                      color: "#11263E",
                      fontWeight: "bold",
                      opacity: "0.9",
                      textAlign: "center",
                    }}
                  >
                    Öğrenci Girişi
                  </div>

                  <div
                    className={`input-group mb-2 mt-2 ${loginStyles.inputGroup}`}
                  >
                    <div
                      id="tcp"
                      className={`input-group-prepend my-auto mx-auto ${loginStyles.inputGroupPrepend}`}
                    >
                      <span
                        className={`input-group-text h-100 ${loginStyles.inputGroupText}`}
                        id="basic-addon1"
                      >
                        {idBadgeElement}
                      </span>
                    </div>
                    <input
                      type="text"
                      maxLength="11"
                      name="tc"
                      id="tc"
                      value={tcNo}
                      onChange={handleTcNo}
                      className={`form-control ${loginStyles.formControl}`}
                      placeholder="T.C. Kimlik Numarası"
                      style={{ border: "none" }}
                      aria-describedby="basic-addon1"
                      required
                      onInvalid={(e) =>
                        e.target.setCustomValidity(
                          "Lütfen T.C. Kimlik Numaranızı doldurunuz."
                        )
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                  </div>
                  <div
                    className={`input-group mb-3 mt-4 ${loginStyles.inputGroup}`}
                  >
                    <div
                      id="passwordp"
                      className={`input-group-prepend my-auto mx-auto ${loginStyles.inputGroupPrepend}`}
                    >
                      <span
                        className={`input-group-text h-100 ${loginStyles.inputGroupText}`}
                        id="basic-addon2"
                      >
                        {lockElement}
                      </span>
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className={`form-control ${loginStyles.formControl}`}
                      placeholder="Şifre"
                      aria-describedby="basic-addon2"
                      style={{ border: "none" }}
                      required
                      value={password}
                      onChange={handlePassword}
                      onInvalid={(e) =>
                        e.target.setCustomValidity(
                          "Lütfen şifrenizi doldurunuz."
                        )
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                  </div>
                  <div id="hata" className={loginStyles.hata}>
                    Hatalı giriş!
                  </div>
                  <div
                    className="mt-2 mb-2"
                    style={{
                      overflow: "hidden",
                      paddingTop: "10px",
                      textAlign: "center",
                    }}
                  >
                    <button
                      id="btn1"
                      type="button"
                      formMethod="post"
                      onClick={(e) => {
                        axios
                          .post(
                            "http://localhost:3001/login/",
                            {
                              tcNo: tcNo,
                              password: password,
                            },
                            {
                              headers: {
                                token: AppConstant.token,
                              },
                            }
                          )
                          .then(function (response) {
                            if (response.data.result == true) {
                              e.preventDefault();
                              $("#hata").slideUp(50);
                              AppConstant.token = response.data.data[0].token;
                              AppConstant.isLogged = true;
                              AppConstant.tcNo = tcNo;
                              AppConstant.name = response.data.data[0].isim;
                              router.push("/");
                            } else {
                              $("#hata").slideDown(300);
                            }
                          })
                          .catch(function (error) {
                            console.log(error);
                          });
                      }}
                      className={`button mt-1 mb-3 ${loginStyles.button}`}
                      style={{
                        paddingLeft: "12px",
                        paddingRight: "12px",
                        width: "95%",
                      }}
                    >
                      {signElement}
                      &nbsp; Giriş Yap
                    </button>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <a
                      className={loginStyles.forgot}
                      onClick={handleShow}
                      style={{ color: "#232323" }}
                      href="#tcf"
                    >
                      {forgotPasswordElement}
                      &nbsp;Şifremi Unuttum
                    </a>
                  </div>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    centered
                    className={`mx-auto my-auto`}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Şifremi Unuttum</Modal.Title>
                    </Modal.Header>
                    <form>
                      <Modal.Body>
                        <div
                          className={`input-group mb-2 ${loginStyles.inputGroup}`}
                        >
                          <div
                            id="tcp"
                            className={`input-group-prepend my-auto mx-auto ${loginStyles.inputGroupPrepend}`}
                          >
                            <span
                              className={`input-group-text ${loginStyles.inputGroupText} h-100`}
                              id="basic-addon1"
                              style={{
                                background: "#D5AA41",
                                borderColor: "#D5AA41",
                              }}
                            >
                              {idBadgeElement}
                            </span>
                          </div>
                          <input
                            type="text"
                            minLength="11"
                            maxLength="11"
                            id="tcf"
                            value={forgotTcNo}
                            onChange={handleForgot}
                            className={`form-control ${loginStyles.formControl}`}
                            placeholder="T.C. Kimlik Numarası"
                            aria-describedby="basic-addon1"
                            required
                          />
                        </div>
                        <div
                          id="hatau"
                          style={{ marginTop: "1rem" }}
                          className={loginStyles.sifre}
                        >
                          {forgotPassword}
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <button
                          id={loginStyles.btn3}
                          type="button"
                          className={`button w-100 ${loginStyles.button}`}
                          onClick={(e) => {
                            axios
                              .post("http://localhost:3001/forgotpassword/", {
                                tcNo: forgotTcNo,
                              })
                              .then(function (response) {
                                if (response.data.result == true) {
                                  e.preventDefault();
                                  setForgotPassword(
                                    "Şifreniz: " + response.data.data
                                  );
                                  $("#hatau").css("color", "#11263e");
                                  $("#hatau").slideDown(300);
                                } else {
                                  e.preventDefault();
                                  setForgotPassword(response.data.message);
                                  $("#hatau").css("color", "red");
                                  $("#hatau").slideDown(300);
                                }
                              })
                              .catch(function (error) {
                                console.log(error);
                              });
                          }}
                          style={{
                            marginRight: "12px",
                            float: "right",
                            width: "43%",
                          }}
                        >
                          {sendElement}
                          &nbsp; Gönder
                        </button>
                      </Modal.Footer>
                    </form>
                  </Modal>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
