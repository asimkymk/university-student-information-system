import "./bootstrap/css/bootstrap.min.css";
import "./web.css";
import img from "./iuclogo.png"
import 'font-awesome/css/font-awesome.min.css';
<script type="text/javascript" src="/bootstrap/js/bootstrap.min.js" />

function App() {
  return (
    <div className="container">
      <div className="row" style={{ minHeight: "100vh" }}>
        <div className="col-md-7 col-lg-4 col-10 mx-auto my-auto" style={{ position: "relative", top: "-50px" }}>
          <img className="login-logo" src={img} alt="Logo"></img>
          <div className="login-area">
            <form>
              <div className="input-group mb-3 mt-5">
                <div id="tcp" className="input-group-prepend">
                  <span className="input-group-text h-100" id="basic-addon1"><i className="fa fa-id-badge "></i></span>
                </div>
                <input type="text" maxLength="11" id="tc" className="form-control" placeholder="T.C. Kimlik Numarası" aria-describedby="basic-addon1" required 
                onInvalid={e => e.target.setCustomValidity('Lütfen T.C. Kimlik Numaranızı doldurunuz.')} onInput={e => e.target.setCustomValidity('')}/>
              </div>
              <div className="input-group mb-3 mt-4">
                <div id="passwordp" className="input-group-prepend">
                  <span className="input-group-text h-100" id="basic-addon2"><i className="fa fa-lock"></i></span>
                </div>
                <input type="password" id="password" className="form-control" placeholder="Şifre" aria-describedby="basic-addon2" required
                 onInvalid={e => e.target.setCustomValidity('Lütfen şifrenizi doldurunuz.')} onInput={e => e.target.setCustomValidity('')}/>
              </div>
              <div className="mt-2 mb-3" style={{ overflow: "hidden" }}>
                <button type="submit" className="btn btn-success mt-2" style={{ float: "left", width: "45%" }}>Giriş Yap</button>
                <button type="button" className="btn btn-primary mt-2" style={{ float: "right", width: "45%" }}>Kayıt Ol</button>
              </div>
              <div className="forgot" style={{textAlign:"center"}}>
                <a className="forgot" href="#password"><i className="fa fa-key forgot2"> &nbsp;</i>Şifremi Unuttum</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
