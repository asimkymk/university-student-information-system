//TODO : TABLE TASARIMI

import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import styles from "../styles/Profile.module.css";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
class Home extends Component {
  constructor(props, children) {
    super(props);
    this.props = props;
    this.children = children;
    this.router = this.props.router;
  }
  componentDidMount() {
    if (this.props.isLogin == false) {
      this.router.push("/login/");
    }
  }
  render() {
    return (
      <>
        <Head>
          <title>Bilgilerim - İÜC ÖBS</title>
        </Head>
        <Layout
          appBar={{
            links: { "Ana Sayfa": "#", Bilgilerim: "#" },
            title: "Bilgilerim",
          }}
        >
          <div>
            <div
              className={`page-header min-height-300 border-radius-xl mt-2 ${styles.cardBackground}`}
            >
              <span className="mask  bg-gradient-primary  opacity-6"></span>
            </div>
            <div className={`card card-body mt-n6 ${styles.card}`}>
              <div className="row gx-4 mb-2">
                <div className="col-auto">
                  <div className="avatar avatar-xl position-relative">
                    <img
                      src="https://demos.creative-tim.com/material-dashboard-2-pro-react-ts/static/media/team-3.0ef0be95e6850814c79e.jpg"
                      alt="profile_image"
                      className="w-100 border-radius-4xl shadow-sm"
                    />
                  </div>
                </div>
                <div className="col-auto my-auto">
                  <div className="h-100">
                    <h5 className={`mb-1 ${styles.profileText}`}>
                      Asım Kaymak
                    </h5>
                    <p
                      className={`mb-0 font-weight-normal text-sm ${styles.profileSubText}`}
                    >
                      Bilgisayar Mühendisliği
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                  <div className="nav-wrapper position-relative end-0"></div>
                </div>
              </div>
              <div className="row">
                <div className="row">
                  <div className="col-12 col-xl-4">
                    <div className="card card-plain h-100">
                      <div className="card-header pb-0 p-3">
                        <div className="row">
                          <div className="col-md-8 d-flex align-items-center">
                            <h6 className="mb-0">Özlük Bilgileri</h6>
                          </div>
                          <hr className="horizontal gray-light mt-2 mb-2" />
                          <div className="col-md-4 text-end">
                            <a href="javascript:;">
                              <i
                                className="fas fa-user-edit text-secondary text-sm"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit Profile"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-3">
                        <ul className="list-group">
                          <li className="list-group-item border-0 ps-0 pt-0 text-sm list-section">
                            <strong className="text-dark li-header">
                              İsim:
                            </strong>{" "}
                            &nbsp; Asım Kaymak
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm list-section">
                            <strong className="text-dark li-header">
                              Kimlik Numarası:
                            </strong>{" "}
                            &nbsp; 45262969542
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm list-section">
                            <strong className="text-dark li-header">
                              Baba Adı:
                            </strong>{" "}
                            &nbsp; Adem
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm list-section">
                            <strong className="text-dark li-header">
                              Anne Adı:
                            </strong>{" "}
                            &nbsp; Yurdagül
                          </li>

                          <li className="list-group-item border-0 ps-0 text-sm list-section">
                            <strong className="text-dark li-header">
                              Doğum Tarihi:
                            </strong>{" "}
                            &nbsp; 12.03.2000
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm list-section">
                            <strong className="text-dark li-header">
                              Doğum Yeri:
                            </strong>{" "}
                            &nbsp; Bahçelievler
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm list-section">
                            <strong className="text-dark li-header">
                              Medeni Hali:
                            </strong>{" "}
                            &nbsp; Bekar
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm list-section">
                            <strong className="text-dark li-header">
                              Uyruk:
                            </strong>{" "}
                            &nbsp; Türk
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm list-section">
                            <strong className="text-dark li-header">
                              Kan Grubu:
                            </strong>{" "}
                            &nbsp;
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm list-section">
                            <strong className="text-dark li-header">
                              Cinsiyet:
                            </strong>{" "}
                            &nbsp; Erkek
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4">
                    <div className="card card-plain h-100">
                      <div className="card-header pb-0 p-3">
                        <h6 className="mb-0">Birim Bilgileri</h6>
                      </div>
                      <hr className="horizontal gray-light mt-2 mb-2" />
                      <div className="card-body p-3">
                        <ul className="list-group">
                          <li className="list-group-item border-0 ps-0 pt-0 text-sm list-section">
                            <strong className="text-dark li-header">
                              Fakülte:
                            </strong>{" "}
                            &nbsp; Mühendislik Fakültesi
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm list-section">
                            <strong className="text-dark li-header">
                              Birim:
                            </strong>{" "}
                            &nbsp; Bilgisayar Mühendisliği, Lisans Programı
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm list-section">
                            <strong className="text-dark li-header">
                              Kayıt Şekli:
                            </strong>{" "}
                            &nbsp; Standart Kayıt ÖSYM
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm list-section">
                            <strong className="text-dark li-header">
                              Numara:
                            </strong>{" "}
                            &nbsp; 1306180004
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm list-section">
                            <strong className="text-dark li-header">
                              Öğrenim Durumu:
                            </strong>{" "}
                            &nbsp; Normal
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm list-section">
                            <strong className="text-dark li-header">
                              Durum:
                            </strong>{" "}
                            &nbsp; Devamlı Öğrenci
                          </li>
                          <li className="list-group-item border-0 ps-0 text-sm list-section">
                            <strong className="text-dark li-header">
                              Askerlik Durumu:
                            </strong>{" "}
                            &nbsp; Belirsiz
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4">
                    <div className="card card-plain h-100">
                      <div class="row">
                        <div class="col-md-8 d-flex pb-0 p-3 align-items-center">
                          <h6 class="mb-0">Profile Information</h6>
                        </div>
                        <div class="col-md-4 text-end  pb-0">
                          <IconButton
                            variant="primary"
                            className="pe-3 ps-0 mb-0 ms-auto text-center w-25 w-md-auto "
                          >
                            <AddIcon></AddIcon>
                          </IconButton>
                        </div>
                      </div>
                      <hr className="horizontal gray-light mt-2 mb-2" />
                      <div className="card-body p-3">
                        <ul className="list-group">
                          <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
                            <div className="d-flex align-items-start flex-column justify-content-center">
                              <strong className="mb-0 li-header">
                                Cep Telefonu
                              </strong>
                              <p className="mb-0 list-section">
                                +90 (539) 712 9136
                              </p>
                            </div>
                            <Button
                              variant="text"
                              className="pe-3 ps-0 mb-0 ms-auto text-center w-10 w-md-auto"
                            >
                              &nbsp;&nbsp; Düzenle
                            </Button>
                          </li>
                          <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
                            <div className="d-flex align-items-start flex-column justify-content-center">
                              <strong className="mb-0 li-header">
                                Ev Telefonu
                              </strong>
                              <p className="mb-0 list-section">
                                +90 (212) 603 9984
                              </p>
                            </div>
                            <Button
                              variant="text"
                              className="pe-3 ps-0 mb-0 ms-auto text-center w-10 w-md-auto"
                            >
                              &nbsp;&nbsp; Düzenle
                            </Button>
                          </li>
                          <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
                            <div className="d-flex align-items-start flex-column justify-content-center">
                              <strong className="mb-0 li-header">
                                Mail Adresi
                              </strong>
                              <p className="mb-0 list-section">
                                kaymakasm@gmail.com
                              </p>
                            </div>
                            <Button
                              variant="text"
                              className="pe-3 ps-0 mb-0 ms-auto text-center w-10 w-md-auto"
                            >
                              &nbsp;&nbsp; Düzenle
                            </Button>
                          </li>
                          <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
                            <div className="d-flex align-items-start flex-column justify-content-center">
                              <strong className="mb-0 li-header">
                                Anne Cep Telefonu
                              </strong>
                              <p className="mb-0 list-section">
                                +90 (539) 712 9136
                              </p>
                            </div>
                            <Button
                              variant="text"
                              className="pe-3 ps-0 mb-0 ms-auto text-center w-10 w-md-auto"
                            >
                              &nbsp;&nbsp; Düzenle
                            </Button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-4">
                    <div className="mb-5 ps-3">
                      <h6 className="mb-1">Projects</h6>
                      <p className="text-sm">Architects design houses</p>
                    </div>
                    <div className="row">
                      <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                        <div className="card card-blog card-plain">
                          <div className="card-header p-0 mt-n4 mx-3">
                            <a className="d-block shadow-xl border-radius-xl">
                              <img
                                src="../assets/img/home-decor-1.jpg"
                                alt="img-blur-shadow"
                                className="img-fluid shadow border-radius-xl"
                              />
                            </a>
                          </div>
                          <div className="card-body p-3">
                            <p className="mb-0 text-sm">Project #2</p>
                            <a href="javascript:;">
                              <h5>Modern</h5>
                            </a>
                            <p className="mb-4 text-sm">
                              As Uber works through a huge amount of internal
                              management turmoil.
                            </p>
                            <div className="d-flex align-items-center justify-content-between">
                              <button
                                type="button"
                                className="btn btn-outline-primary btn-sm mb-0"
                              >
                                View Project
                              </button>
                              <div className="avatar-group mt-2">
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-xs rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="bottom"
                                  title="Elena Morison"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-1.jpg"
                                  />
                                </a>
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-xs rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="bottom"
                                  title="Ryan Milly"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-2.jpg"
                                  />
                                </a>
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-xs rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="bottom"
                                  title="Nick Daniel"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-3.jpg"
                                  />
                                </a>
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-xs rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="bottom"
                                  title="Peterson"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-4.jpg"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                        <div className="card card-blog card-plain">
                          <div className="card-header p-0 mt-n4 mx-3">
                            <a className="d-block shadow-xl border-radius-xl">
                              <img
                                src="../assets/img/home-decor-2.jpg"
                                alt="img-blur-shadow"
                                className="img-fluid shadow border-radius-lg"
                              />
                            </a>
                          </div>
                          <div className="card-body p-3">
                            <p className="mb-0 text-sm">Project #1</p>
                            <a href="javascript:;">
                              <h5>Scandinavian</h5>
                            </a>
                            <p className="mb-4 text-sm">
                              Music is something that every person has his or
                              her own specific opinion about.
                            </p>
                            <div className="d-flex align-items-center justify-content-between">
                              <button
                                type="button"
                                className="btn btn-outline-primary btn-sm mb-0"
                              >
                                View Project
                              </button>
                              <div className="avatar-group mt-2">
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-xs rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="bottom"
                                  title="Nick Daniel"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-3.jpg"
                                  />
                                </a>
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-xs rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="bottom"
                                  title="Peterson"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-4.jpg"
                                  />
                                </a>
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-xs rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="bottom"
                                  title="Elena Morison"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-1.jpg"
                                  />
                                </a>
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-xs rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="bottom"
                                  title="Ryan Milly"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-2.jpg"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                        <div className="card card-blog card-plain">
                          <div className="card-header p-0 mt-n4 mx-3">
                            <a className="d-block shadow-xl border-radius-xl">
                              <img
                                src="../assets/img/home-decor-3.jpg"
                                alt="img-blur-shadow"
                                className="img-fluid shadow border-radius-xl"
                              />
                            </a>
                          </div>
                          <div className="card-body p-3">
                            <p className="mb-0 text-sm">Project #3</p>
                            <a href="javascript:;">
                              <h5>Minimalist</h5>
                            </a>
                            <p className="mb-4 text-sm">
                              Different people have different taste, and various
                              types of music.
                            </p>
                            <div className="d-flex align-items-center justify-content-between">
                              <button
                                type="button"
                                className="btn btn-outline-primary btn-sm mb-0"
                              >
                                View Project
                              </button>
                              <div className="avatar-group mt-2">
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-xs rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="bottom"
                                  title="Peterson"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-4.jpg"
                                  />
                                </a>
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-xs rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="bottom"
                                  title="Nick Daniel"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-3.jpg"
                                  />
                                </a>
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-xs rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="bottom"
                                  title="Ryan Milly"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-2.jpg"
                                  />
                                </a>
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-xs rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="bottom"
                                  title="Elena Morison"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-1.jpg"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                        <div className="card card-blog card-plain">
                          <div className="card-header p-0 mt-n4 mx-3">
                            <a className="d-block shadow-xl border-radius-xl">
                              <img
                                src="https://images.unsplash.com/photo-1606744824163-985d376605aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="img-blur-shadow"
                                className="img-fluid shadow border-radius-xl"
                              />
                            </a>
                          </div>
                          <div className="card-body p-3">
                            <p className="mb-0 text-sm">Project #4</p>
                            <a href="javascript:;">
                              <h5>Gothic</h5>
                            </a>
                            <p className="mb-4 text-sm">
                              Why would anyone pick blue over pink? Pink is
                              obviously a better color.
                            </p>
                            <div className="d-flex align-items-center justify-content-between">
                              <button
                                type="button"
                                className="btn btn-outline-primary btn-sm mb-0"
                              >
                                View Project
                              </button>
                              <div className="avatar-group mt-2">
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-xs rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="bottom"
                                  title="Peterson"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-4.jpg"
                                  />
                                </a>
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-xs rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="bottom"
                                  title="Nick Daniel"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-3.jpg"
                                  />
                                </a>
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-xs rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="bottom"
                                  title="Ryan Milly"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-2.jpg"
                                  />
                                </a>
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-xs rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="bottom"
                                  title="Elena Morison"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-1.jpg"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default Home;
