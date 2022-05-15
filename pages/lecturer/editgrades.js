//TODO : TABLE TASARIMI

import React, { Component, useState } from "react";
import Image from "next/image";
import Layout from "../../components/Layout/LayoutLecturer";
import Head from "next/head";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import TranslateIcon from "@mui/icons-material/Translate";
import WorkIcon from "@mui/icons-material/Work";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Link from "next/link";
import FormHelperText from "@mui/material/FormHelperText";
import $ from "jquery";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const exclamationElement2 = (
  <FontAwesomeIcon
    icon={faCheck}
    className={`mx-auto ${styles.exclamationElement}`}
    style={{ color: "white" }}
  />
);
import {
  Box,
  Card,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Button,
  Typography,
} from "@mui/material";
import otherstyles from "../../styles/Profile.module.css";
import styles from "../../styles/RequestAndObjection.module.css";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Item = styled(Paper)(({ theme }) => ({
  color: "rgba(0, 0, 0, 0.87)",
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",

  flexDirection: "column",
  position: "relative",
  minWidth: "0px",
  width: "100%",
  overflowWrap: "break-word",
  backgroundColor: "rgb(255, 255, 255)",
  backgroundClip: "border-box",
  border: "0px solid rgba(0, 0, 0, 0.125)",
  borderRadius: "0.75rem",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",
  overflow: "visible",
  paddingLeft: "1rem",
  padding: "1rem",
  marginBottom: "1.1rem",
}));

export default function EditGrades() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showList = () => {
    console.log("ok");
    $("#list").show();
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className={`mx-auto my-auto`}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sınav İtirazı</Modal.Title>
        </Modal.Header>
        <form>
          <Modal.Body>
            <p>
              Ders seçim işlemi onaylandıktan sonra değiştirilemez. Onaylıyor
              musunuz?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <button
              id="btn3"
              type="submit"
              className={`button w-100 ${styles.button}`}
            >
              {exclamationElement2}
              &nbsp; Onayla
            </button>
          </Modal.Footer>
        </form>
      </Modal>
      <Head>
        <title>Bilgilerim - İÜC ÖBS</title>
      </Head>
      <Layout
        appBar={{
          links: { "Ana Sayfa": "/lecturer", "Not İşlemleri": "/editgrades" },
          title: "Not İşlemleri",
        }}
      >
        <Item>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" className={otherstyles.h5}>
                Not İşlemleri
              </Typography>
              <Typography variant="p">
                Lütfen not işlemi yapacağınız dersi seçip öğrencileri
                listeleyiniz.
              </Typography>
            </Grid>

            <Grid item xs={12} marginTop={1}>
              <div class="input-group">
                <select class="form-control">
                  <option>Ders seçin</option>
                  <option>Web Programlama</option>
                  <option>Inst. to the Algorithm</option>
                </select>
                <select class="form-control ml-1">
                  <option>Sınav türü seçin</option>
                  <option>Vize</option>
                  <option>Final</option>
                  <option>Proje & Ödev</option>
                </select>
                <input
                  type="number"
                  name=""
                  id=""
                  maxLength="2"
                  className="form-control"
                  placeholder="Etki Oranı girin"
                />
                <span class="input-group-btn">
                  <button
                    class="btn btn-default"
                    type="button"
                    tabindex="-1"
                    onClick={showList}
                  >
                    <span
                      class="glyphicon glyphicon-remove"
                      aria-hidden="true"
                    ></span>
                    Listele
                  </button>
                </span>
              </div>
            </Grid>
          </Grid>
        </Item>
        <Item className={styles.none} id="list">
          <div className={``}>
            <div style={{ textAlign: "center" }}>
              <div
                className={`container ${styles.mainContainer} ${styles.donem}`}
                onClick={(e) => {
                  if ($("#donem1").is(":visible")) {
                    $(e.currentTarget.parentElement.parentElement).css(
                      "background",
                      "#D3D1CE"
                    );
                    $(e.currentTarget).css("background", "#D3D1CE");
                  } else {
                    $(e.currentTarget.parentElement.parentElement).css(
                      "background",
                      "#fff"
                    );
                    $(e.currentTarget).css("background", "#fff");
                  }
                  $("#donem1").slideToggle(300);
                }}
              >
                Web Programlama - Vize - %25
              </div>
              <div id="donem1">
                <hr></hr>
                <div className={`row`}>
                  <div className={`col-1 my-auto ${styles.baslik}`}>Puan</div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-5 my-auto ${styles.baslik}`}>
                    Öğrenci Numarası
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-5 my-auto ${styles.baslik}`}>
                    Öğrenci Adı
                  </div>
                </div>

                <div className={`${styles.horizontalLine2}`}></div>

                <div className={`row ${styles.row}`}>
                  <div className={`col-1 my-auto ${styles.rows}`}>
                    <input type="text" name="" id="" className="form-control" />
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-5 my-auto ${styles.rows}`}>
                    1306180004
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-5 my-auto ${styles.rows}`}>
                    Asım Kaymak
                  </div>
                </div>
                <div className={`${styles.horizontalLine}`}></div>
                <div className={`row ${styles.row}`}>
                  <div className={`col-1 my-auto ${styles.rows}`}>
                    <input type="text" name="" id="" className="form-control" />
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-5 my-auto ${styles.rows}`}>
                    1306180004
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-5 my-auto ${styles.rows}`}>
                    Asım Kaymak
                  </div>
                </div>
                <div className={`${styles.horizontalLine}`}></div>
                <div className={`row ${styles.row}`}>
                  <div className={`col-1 my-auto ${styles.rows}`}>
                    <input type="text" name="" id="" className="form-control" />
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-5 my-auto ${styles.rows}`}>
                    1306180004
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-5 my-auto ${styles.rows}`}>
                    Asım Kaymak
                  </div>
                </div>
                <div className={`${styles.horizontalLine}`}></div>
                <div className={`row ${styles.row}`}>
                  <div className={`col-1 my-auto ${styles.rows}`}>
                    <input type="text" name="" id="" className="form-control" />
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-5 my-auto ${styles.rows}`}>
                    1306180004
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-5 my-auto ${styles.rows}`}>
                    Asım Kaymak
                  </div>
                </div>
                <div className={`${styles.horizontalLine}`}></div>
                <div className={`row ${styles.row}`}>
                  <div className={`col-1 my-auto ${styles.rows}`}>
                    <input type="text" name="" id="" className="form-control" />
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-5 my-auto ${styles.rows}`}>
                    1306180004
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-5 my-auto ${styles.rows}`}>
                    Asım Kaymak
                  </div>
                </div>
                <div className={`${styles.horizontalLine}`}></div>
                <div className={`row ${styles.row}`}>
                  <div className={`col-1 my-auto ${styles.rows}`}>
                    <input type="text" name="" id="" className="form-control" />
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-5 my-auto ${styles.rows}`}>
                    1306180004
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-5 my-auto ${styles.rows}`}>
                    Asım Kaymak
                  </div>
                </div>
                <div className={`${styles.horizontalLine}`}></div>
                <div className={`row ${styles.row}`}>
                  <div className={`col-1 my-auto ${styles.rows}`}>
                    <input type="text" name="" id="" className="form-control" />
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-5 my-auto ${styles.rows}`}>
                    1306180004
                  </div>
                  <div className={`${styles.mycol} my-auto`}>
                    <div className={`${styles.verticalLine}`}></div>
                  </div>
                  <div className={`col-5 my-auto ${styles.rows}`}>
                    Asım Kaymak
                  </div>
                  <div className={`${styles.horizontalLine}`}></div>
                  <div className={`row ${styles.row}`}>
                    <div className={`col-1 my-auto ${styles.rows}`}>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                      />
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-5 my-auto ${styles.rows}`}>
                      1306180004
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-5 my-auto ${styles.rows}`}>
                      Asım Kaymak
                    </div>
                  </div>
                  <div className={`${styles.horizontalLine}`}></div>
                  <div className={`row ${styles.row}`}>
                    <div className={`col-1 my-auto ${styles.rows}`}>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                      />
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-5 my-auto ${styles.rows}`}>
                      1306180004
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-5 my-auto ${styles.rows}`}>
                      Asım Kaymak
                    </div>
                  </div>
                  <div className={`${styles.horizontalLine}`}></div>
                  <div className={`row ${styles.row}`}>
                    <div className={`col-1 my-auto ${styles.rows}`}>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                      />
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-5 my-auto ${styles.rows}`}>
                      1306180004
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-5 my-auto ${styles.rows}`}>
                      Asım Kaymak
                    </div>
                  </div>
                  <div className={`${styles.horizontalLine}`}></div>
                  <div className={`row ${styles.row}`}>
                    <div className={`col-1 my-auto ${styles.rows}`}>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                      />
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-5 my-auto ${styles.rows}`}>
                      1306180004
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-5 my-auto ${styles.rows}`}>
                      Asım Kaymak
                    </div>
                  </div>
                  <div className={`${styles.horizontalLine}`}></div>
                  <div className={`row ${styles.row}`}>
                    <div className={`col-1 my-auto ${styles.rows}`}>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                      />
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-5 my-auto ${styles.rows}`}>
                      1306180004
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-5 my-auto ${styles.rows}`}>
                      Asım Kaymak
                    </div>
                  </div>
                  <div className={`${styles.horizontalLine}`}></div>
                  <div className={`row ${styles.row}`}>
                    <div className={`col-1 my-auto ${styles.rows}`}>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                      />
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-5 my-auto ${styles.rows}`}>
                      1306180004
                    </div>
                    <div className={`${styles.mycol} my-auto`}>
                      <div className={`${styles.verticalLine}`}></div>
                    </div>
                    <div className={`col-5 my-auto ${styles.rows}`}>
                      Asım Kaymak
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-12">
                    <div style={{ float: "right" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        className="float-right"
                        onClick={handleShow}
                      >
                        Onayla
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Item>
      </Layout>
    </>
  );
}
