import loginStyles from "../../styles/Login.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image"
import {
  faSignIn,
  faIdBadge,
  faLock,
  faPlusCircle,
  faKey,
  faPaperPlane,
  faCalendar,
  faMarsAndVenus,
  faFont,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
export default function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const idBadgeElement = (
    <FontAwesomeIcon icon={faIdBadge} className={`mx-auto faIdBadge`} />
  );
  const lockElement = (
    <FontAwesomeIcon icon={faLock} className={`mx-auto faLock`} />
  );
  const signElement = (
    <FontAwesomeIcon icon={faSignIn} className={`mx-auto ${loginStyles.faSignIn} faSignIn`} />
  );

  const passElement = (
    <FontAwesomeIcon icon={faLock} className={`mx-auto`}>
      &nbsp;
    </FontAwesomeIcon>
  );

  const sendElement = (
    <FontAwesomeIcon icon={faPaperPlane} className={`faPaperPlane mx-auto`} />
  );
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
                >
                </Image>
              </div>
              <div className={loginStyles.loginArea}>
                <form action="/lecturer">
                  <div className="mt-3 mb-3" style={{ fontSize: "16pt", color: "#11263E", fontWeight: "bold", opacity: "0.9", textAlign: "center" }}>Öğretim Görevlisi Girişi</div>
                  <div
                    className={`input-group mb-3 mt-2 ${loginStyles.inputGroup}`}
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
                      onInvalid={(e) =>
                        e.target.setCustomValidity(
                          "Lütfen şifrenizi doldurunuz."
                        )
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <label className={`switch ${loginStyles.switch}`}>
                      <input type="checkbox" />
                      <span
                        className={`slider round ${loginStyles.slider} ${loginStyles.round}`}
                      ></span>
                    </label>
                    <span style={{ verticalAlign: "bottom", color: "#232323" }}>
                      &nbsp;Beni Hatırla
                    </span>
                  </div>
                  <div
                    className="mt-3 mb-3"
                    style={{ overflow: "hidden", paddingTop: "10px" }}
                  >
                    <button
                      id="btn1"
                      type="submit"
                      formMethod="post"
                      className={`button ${loginStyles.button}`}
                      style={{
                        marginLeft: "12px",
                        marginRight: "12px",
                        float: "left",
                        width: "96%",
                      }}
                    >
                      {signElement}
                      &nbsp; Giriş Yap
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
