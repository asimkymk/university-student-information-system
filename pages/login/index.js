/*TODO
REFACTOR BUTTON STYLE
CUSTOMINPUTTEXT
CLEAN CODE*/

import "font-awesome/css/font-awesome.min.css";
import loginStyles from "../../styles/Login.module.css";
import { Head } from "next/head";
import CustomButton from "../../components/CustomButton";

export default function Login() {
  return (
    <div className={loginStyles.body}>
      <div className={`container ${loginStyles.containerText}`}>
        <div className="row" style={{ minHeight: "100vh" }}>
          <div
            className="col-md-7 col-lg-4 col-10 mx-auto my-auto"
            style={{ position: "relative", top: "-50px" }}
          >
            <img
              className={loginStyles.loginLogo}
              src="/login/iuclogo.png"
              alt="Logo"
            ></img>
            <div className={loginStyles.loginArea}>
              <form>
                <div
                  className={`input-group mb-3 mt-5 ${loginStyles.inputGroup}`}
                >
                  <div id="tcp" className="input-group-prepend">
                    <span
                      className={`input-group-text h-100 ${loginStyles.inputGroupText}`}
                      id="basic-addon1"
                      style={{ background: "#D5AA41", borderColor: "#D5AA41" }}
                    >
                      <i className="fa fa-id-badge "></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    maxLength="11"
                    id="tc"
                    className={`form-control ${loginStyles.formControl}`}
                    placeholder="T.C. Kimlik Numarası"
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
                  <div id="passwordp" className="input-group-prepend">
                    <span
                      className={`input-group-text h-100 ${loginStyles.inputGroupText}`}
                      id="basic-addon2"
                      style={{ background: "#D5AA41", borderColor: "#D5AA41" }}
                    >
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    id="password"
                    className={`form-control ${loginStyles.formControl}`}
                    placeholder="Şifre"
                    aria-describedby="basic-addon2"
                    required
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Lütfen şifrenizi doldurunuz.")
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                  />
                </div>
                <div className="mt-2 mb-3" style={{ overflow: "hidden" }}>
                  <CustomButton
                    id="btn1"
                    type="submit"
                    className={`button mt-3 mb-3 ${loginStyles.button}`}
                    style={{ marginLeft: "12px", float: "left", width: "43%" }}
                    icon={`fa fa-sign-in ${loginStyles.faSignIn}`}
                    value="Giriş Yap"
                  ></CustomButton>

                  <CustomButton
                    id="btn2"
                    type="submit"
                    className={`button mt-3 mb-3 ${loginStyles.button}`}
                    style={{
                      marginRight: "12px",
                      float: "right",
                      width: "43%",
                    }}
                    icon={`fa fa-plus-circle ${loginStyles.faPlusCircle}`}
                    value="Kayıt Ol"
                  ></CustomButton>
                </div>
                <div
                  className={loginStyles.forgot}
                  style={{ textAlign: "center" }}
                >
                  <a className={loginStyles.forgot} href="#">
                    <i className={`fa fa-key ${loginStyles.forgot2}`}>
                      {" "}
                      &nbsp;
                    </i>
                    Şifremi Unuttum
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
