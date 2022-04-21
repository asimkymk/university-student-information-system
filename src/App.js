import "./bootstrap/css/bootstrap.min.css";
import "./web.css";
import img from "./iuclogo.png";
import "font-awesome/css/font-awesome.min.css";
import { Modal } from "react-bootstrap";
import { useState } from "react";
<script type="text/javascript" src="/bootstrap/js/bootstrap.min.js" />;

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      <div className="row" style={{ minHeight: "100vh" }}>
        <div
          className="col-md-7 col-lg-4 col-10 mx-auto my-auto"
          style={{ position: "relative", top: "-50px" }}
        >
          <img className="login-logo" src={img} alt="Logo"></img>
          <div className="login-area">
            <form>
              <div className="input-group mb-3 mt-5">
                <div id="tcp" className="input-group-prepend">
                  <span
                    className="input-group-text h-100"
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
                  className="form-control"
                  placeholder="T.C. Kimlik Numarası"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
              <div className="input-group mb-3 mt-4">
                <div id="passwordp" className="input-group-prepend">
                  <span
                    className="input-group-text h-100"
                    id="basic-addon2"
                    style={{ background: "#D5AA41", borderColor: "#D5AA41" }}
                  >
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  type="password"
                  id="password"
                  minLength="8"
                  className="form-control"
                  placeholder="Şifre"
                  aria-describedby="basic-addon2"
                  required
                />
              </div>
              <div className="mt-2 mb-3" style={{ overflow: "hidden" }}>
                <button
                  type="submit"
                  className="button mt-3 mb-3"
                  style={{ marginLeft: "12px", float: "left", width: "43%" }}
                >
                  <i className="fa fa-sign-in"></i>&nbsp;Giriş Yap
                </button>
                <button
                  type="submit"
                  className="button mt-3 mb-3"
                  style={{ marginRight: "12px", float: "right", width: "43%" }}
                >
                  <i className="fa fa-plus-circle"></i>&nbsp;Kayıt Ol
                </button>
              </div>
              <div className="forgot" style={{ textAlign: "center" }}>
                <a href="##" onClick={handleShow} className="forgot">
                  <i className="fa fa-key forgot2"> &nbsp;</i>Şifremi Unuttum
                </a>
              </div>

              <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Şifremi Unuttum</Modal.Title>
                </Modal.Header>
                <form>
                  <Modal.Body>
                    <div className="input-group">
                      <div id="tcp" className="input-group-prepend">
                        <span
                          className="input-group-text h-100"
                          id="basic-addon1"
                          style={{
                            background: "#D5AA41",
                            borderColor: "#D5AA41",
                          }}
                        >
                          <i className="fa fa-id-badge "></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        minLength="11"
                        maxLength="11"
                        id="tc"
                        className="form-control"
                        placeholder="T.C. Kimlik Numarası"
                        aria-describedby="basic-addon1"
                        required
                      />
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <button type="submit" className="button w-100">
                      <i className="fa fa-paper-plane"></i>&nbsp;Gönder
                    </button>
                  </Modal.Footer>
                </form>
              </Modal>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
