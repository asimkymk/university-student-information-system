//TODO : TABLE TASARIMI

import React, { Component } from "react";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
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
import styles from "../styles/Profile.module.css";
const Item = styled(Paper)(({ theme }) => ({
  color: "rgba(0, 0, 0, 0.87)",
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",

  flexDirection: "column",
  position: "relative",
  minWidth: "0px",
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

class Profile extends Component {
  constructor(props, children) {
    super(props);
    this.props = props;
    this.children = children;
    this.router = this.props.router;
  }
  componentDidMount() {
    if (this.props.isLogin == false) {
      this.router.push("/loginportal/");
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
            links: { "Ana Sayfa": "/", Bilgilerim: "/profile" },
            title: "Bilgilerim",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
              <Paper className={styles.listMenu}>
                <List>
                  <Link href="#ozlukbilgileri">
                    <li className={styles.linkItem}>
                      <Grid className={styles.itemPanel}>
                        <Grid className={styles.itemProfile}>
                          <PersonIcon></PersonIcon>
                        </Grid>
                        <Grid className={styles.itemBottom}>
                          <ListItemText
                            primary="Özlük Bilgileri"
                            className={styles.listItemText}
                          />
                        </Grid>
                      </Grid>
                    </li>
                  </Link>
                  <Link href="#birimbilgileri">
                    <li className={styles.linkItem}>
                      <Grid className={styles.itemPanel}>
                        <Grid className={styles.itemProfile}>
                          <SchoolIcon></SchoolIcon>
                        </Grid>
                        <Grid className={styles.itemBottom}>
                          <ListItemText
                            primary="Birim Bilgileri"
                            className={styles.listItemText}
                          />
                        </Grid>
                      </Grid>
                    </li>
                  </Link>
                  <Link href="#iletisimbilgileri">
                    <li className={styles.linkItem}>
                      <Grid className={styles.itemPanel}>
                        <Grid className={styles.itemProfile}>
                          <CallIcon></CallIcon>
                        </Grid>
                        <Grid className={styles.itemBottom}>
                          <ListItemText
                            primary="İletişim Bilgileri"
                            className={styles.listItemText}
                          />
                        </Grid>
                      </Grid>
                    </li>
                  </Link>
                  <Link href="#adresbilgileri">
                    <li className={styles.linkItem}>
                      <Grid className={styles.itemPanel}>
                        <Grid className={styles.itemProfile}>
                          <HomeIcon></HomeIcon>
                        </Grid>
                        <Grid className={styles.itemBottom}>
                          <ListItemText
                            primary="Adres Bilgileri"
                            className={styles.listItemText}
                          />
                        </Grid>
                      </Grid>
                    </li>
                  </Link>
                  <Link href="#hazirlikbilgileri">
                    <li className={styles.linkItem}>
                      <Grid className={styles.itemPanel}>
                        <Grid className={styles.itemProfile}>
                          <TranslateIcon></TranslateIcon>
                        </Grid>
                        <Grid className={styles.itemBottom}>
                          <ListItemText
                            primary="Hazırlık Bilgileri"
                            className={styles.listItemText}
                          />
                        </Grid>
                      </Grid>
                    </li>
                  </Link>
                  <Link href="#stajbilgileri">
                    <li className={styles.linkItem}>
                      <Grid className={styles.itemPanel}>
                        <Grid className={styles.itemProfile}>
                          <WorkIcon></WorkIcon>
                        </Grid>
                        <Grid className={styles.itemBottom}>
                          <ListItemText
                            primary="Staj Bilgileri"
                            className={styles.listItemText}
                          />
                        </Grid>
                      </Grid>
                    </li>
                  </Link>
                  <Link href="#girisbilgileri">
                    <li className={styles.linkItem}>
                      <Grid className={styles.itemPanel}>
                        <Grid className={styles.itemProfile}>
                          <LockOpenIcon></LockOpenIcon>
                        </Grid>
                        <Grid className={styles.itemBottom}>
                          <ListItemText
                            primary="Giriş Bilgileri"
                            className={styles.listItemText}
                          />
                        </Grid>
                      </Grid>
                    </li>
                  </Link>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={9}>
              <Grid container>
                <Grid item xs={12}>
                  <Item>
                    <Box style={{ textAlign: "center", alignItems: "center" }}>
                      <Grid container>
                        <Grid
                          item
                          xs={12}
                          style={{
                            textAlign: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                          }}
                        >
                          <Avatar
                            circular
                            src="https://demos.creative-tim.com/material-dashboard-2-pro-react-ts/static/media/bruce-mars.8a606c4a6dab54c9ceff.jpg"
                            sx={{ width: "15%", height: "auto" }}
                          ></Avatar>
                        </Grid>
                        <Grid item xs={12} paddingTop={1}>
                          <Typography variant="h5" className={styles.h5}>
                            Asım Kaymak
                          </Typography>
                          <Typography
                            variant="span"
                            className={styles.span}
                            button
                          >
                            Bilgisayar Mühendisliği
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Item>
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  id="ozlukbilgileri"
                  style={{ scrollMarginTop: "110px" }}
                >
                  <Item>
                    <Box>
                      <Grid container>
                        <Grid item xs={12} paddintBottom={2}>
                          <Typography variant="h5" className={styles.h5}>
                            Özlük Bilgileri
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container paddingBottom={2} paddingTop={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <FormControl fullWidth>
                                <TextField
                                  value="Asım"
                                  label="Ad"
                                  disabled
                                  id="firstname"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <FormControl fullWidth>
                                <TextField
                                  value="Kaymak"
                                  label="Soyad"
                                  disabled
                                  id="lastname"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid container paddingBottom={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <FormControl fullWidth>
                                <TextField
                                  value="Yurdagül"
                                  label="Anne Adı"
                                  disabled
                                  id="mothername"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <FormControl fullWidth>
                                <TextField
                                  value="Adem"
                                  label="Baba Adı"
                                  disabled
                                  id="fathername"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid container paddingBottom={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <FormControl fullWidth>
                                <TextField
                                  value="Türk"
                                  label="Uyruk"
                                  disabled
                                  id="nationality"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <FormControl fullWidth>
                                <TextField
                                  value="45262969542"
                                  label="Kimlik Numarası"
                                  disabled
                                  id="idnumber"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid container paddingBottom={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <FormControl fullWidth>
                                <TextField
                                  value="Erkek"
                                  label="Cinsiyet"
                                  disabled
                                  id="gender"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <FormControl fullWidth>
                                <TextField
                                  value="12.03.2000"
                                  label="Doğum Tarihi"
                                  disabled
                                  id="idnumber"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid container paddingBottom={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <FormControl fullWidth>
                                <TextField
                                  value="Bekar"
                                  label="Medeni Hali"
                                  disabled
                                  id="status"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <FormControl fullWidth>
                                <TextField
                                  value="Bahçelievler"
                                  label="Doğum Yeri"
                                  disabled
                                  id="birthplace"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  </Item>
                </Grid>
                <Grid
                  item
                  xs={12}
                  id="birimbilgileri"
                  style={{ scrollMarginTop: "110px" }}
                >
                  <Item>
                    <Box>
                      <Grid container>
                        <Grid item xs={12} paddintBottom={2}>
                          <Typography variant="h5" className={styles.h5}>
                            Birim Bilgileri
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container paddingBottom={2} paddingTop={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <FormControl fullWidth>
                                <TextField
                                  value="Mühendislik Fakültesi"
                                  label="Fakülte"
                                  disabled
                                  id="faculty"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <FormControl fullWidth>
                                <TextField
                                  value="Bilgisayar Mühendisliği, Lisans Programı"
                                  label="Bölüm"
                                  disabled
                                  id="department"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid container paddingBottom={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <FormControl fullWidth>
                                <TextField
                                  value="1306180004"
                                  label="Öğrenci Numarası"
                                  disabled
                                  id="studentnumber"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <FormControl fullWidth>
                                <TextField
                                  value="Normal"
                                  label="Öğrenci Durumu"
                                  disabled
                                  id="learnstatus"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid container paddingBottom={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <FormControl fullWidth>
                                <TextField
                                  value="Devamlı Öğrenci"
                                  label="Statu"
                                  disabled
                                  id="statu"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <FormControl fullWidth>
                                <TextField
                                  value="Standart Kayıt - ÖSYM"
                                  label="Kayıt Şekli"
                                  disabled
                                  id="registerType"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  </Item>
                </Grid>
              </Grid>

              <Grid
                item
                xs={12}
                id="iletisimbilgileri"
                style={{ scrollMarginTop: "110px" }}
              >
                <Item>
                  <Box>
                    <Grid container>
                      <Grid item xs={12} paddintBottom={2}>
                        <Typography variant="h5" className={styles.h5}>
                          İletişim Bilgileri
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container paddingBottom={2} paddingTop={2}>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                defaultValue="5397129136"
                                label="Cep Telefonu"
                                id="cellphone"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                defaultValue="2126039984"
                                label="Ev Telefonu"
                                id="homephone"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                        <Grid container paddingBottom={2}>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                value="asim.kaymak@ogr.iuc.edu.tr"
                                label="Kurumsal E-posta"
                                id="emailofficial"
                                disabled
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                defaultValue="kaymakasm@gmail.com"
                                label="Kurtarma E-posta"
                                id="email"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                        <Grid container paddingBottom={2}>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                defaultValue="5397129136"
                                label="Birincil Yakın Numarası"
                                id="veliphone"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            paddingRight={2}
                            paddingTop={3}
                            textAlign={"end"}
                          >
                            <Button color="primary">Güncelle</Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Item>
              </Grid>
              <Grid
                item
                xs={12}
                id="adresbilgileri"
                style={{ scrollMarginTop: "110px" }}
              >
                <Item>
                  <Box>
                    <Grid container>
                      <Grid item xs={12} paddintBottom={2}>
                        <Typography variant="h5" className={styles.h5}>
                          Adres Bilgileri
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container paddingBottom={2} paddingTop={2}>
                          <Grid item xs={12} sm={12} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                id="standard-multiline-static"
                                label="İkamet"
                                multiline
                                defaultValue="Hürriyet Mahallesi Kadıoğlu Sokak No: 5 Daire: 19 Bahçelievler / İstanbul"
                                variant="standard"
                              />
                            </FormControl>
                            <Grid
                              item
                              xs={12}
                              sm={12}
                              paddingRight={2}
                              paddingTop={3}
                              textAlign={"end"}
                            >
                              <Button color="primary">Güncelle</Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Item>
              </Grid>
              <Grid
                item
                xs={12}
                id="hazirlikbilgileri"
                style={{ scrollMarginTop: "110px" }}
              >
                <Item>
                  <Box>
                    <Grid container>
                      <Grid item xs={12} paddintBottom={2}>
                        <Typography variant="h5" className={styles.h5}>
                          Hazırlık Bilgileri
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container paddingBottom={2} paddingTop={2}>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                value="Tamamlandı"
                                disabled
                                label="Durum"
                                id="prepstatus"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                value="89,65"
                                disabled
                                label="Sınav Puanı"
                                id="preppoint"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                        <Grid container paddingBottom={2}>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                value="İngilizce"
                                disabled
                                label="Dil"
                                id="preplanguage"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                value="Başarılı"
                                disabled
                                label="Sonuç Bilgisi"
                                id="prepresult"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Item>
              </Grid>
              <Grid
                item
                xs={12}
                id="stajbilgileri"
                style={{ scrollMarginTop: "110px" }}
              >
                <Item>
                  <Box>
                    <Grid container>
                      <Grid item xs={12} paddintBottom={2}>
                        <Typography variant="h5" className={styles.h5}>
                          Staj Bilgileri
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container paddingBottom={2} paddingTop={2}>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                value="Tamamlandı"
                                disabled
                                label="Staj-1 Durum"
                                id="staj1status"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                value="30"
                                disabled
                                label="Staj-1 Gün Sayısı"
                                id="staj1day"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                        <Grid container paddingBottom={2}>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                value="ASELSAN A.Ş."
                                disabled
                                label="Staj-1 Kurum"
                                id="staj1place"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                value="18.07.2022 / 24.08.2022"
                                disabled
                                label="Staj-1 Başlangıç ve Bitiş Tarihi"
                                id="staj1dates"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container paddingBottom={2} paddingTop={2}>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                value="Tamamlanmadı"
                                disabled
                                label="Staj-2 Durum"
                                id="staj2status"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                value="-"
                                disabled
                                label="Staj-2 Gün Sayısı"
                                id="staj2day"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                        <Grid container paddingBottom={2}>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                value="-"
                                disabled
                                label="Staj-2 Kurum"
                                id="staj2place"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                value="-"
                                disabled
                                label="Staj-2 Başlangıç ve Bitiş Tarihi"
                                id="staj2dates"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Item>
              </Grid>
              <Grid
                item
                xs={12}
                id="girisbilgileri"
                style={{ scrollMarginTop: "110px" }}
              >
                <Item>
                  <Box>
                    <Grid container>
                      <Grid item xs={12} paddintBottom={2}>
                        <Typography variant="h5" className={styles.h5}>
                          Giriş Bilgileri
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container paddingBottom={2} paddingTop={2}>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                value="45262969542"
                                label="Kulanıcı Adı"
                                disabled
                                id="username"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                defaultValue="kanarya10"
                                label="Şifre"
                                id="password"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                        <Grid container paddingBottom={2}>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                defaultValue=""
                                label="Yeni Şifre"
                                id="newpassword"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                defaultValue=""
                                label="Yeni Şifre (Tekrar)"
                                id="newpasswordagain"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                        <Grid container paddingBottom={2}>
                          <Grid item xs={12} sm={6} paddingRight={2}></Grid>
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            paddingRight={2}
                            paddingTop={3}
                            textAlign={"end"}
                          >
                            <Button color="primary">Güncelle</Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Layout>
      </>
    );
  }
}

export default Profile;
