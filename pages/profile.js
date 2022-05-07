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
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
              <Paper className={styles.listMenu}>
                <List>
                  <ListItem>
                    <ListItemButton className={styles.listItem}>
                      <PersonIcon></PersonIcon>
                      <ListItemText
                        primary="&nbsp;&nbsp;Özlük Bilgileri"
                        className={styles.listItemText}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton className={styles.listItem}>
                      <SchoolIcon></SchoolIcon>
                      <ListItemText
                        primary="&nbsp;&nbsp;Birim Bilgileri"
                        className={styles.listItemText}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton className={styles.listItem}>
                      <CallIcon></CallIcon>
                      <ListItemText
                        primary="&nbsp;&nbsp;İletişim Bilgileri"
                        className={styles.listItemText}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton className={styles.listItem}>
                      <HomeIcon></HomeIcon>
                      <ListItemText
                        primary="&nbsp;&nbsp;Adres Bilgileri"
                        className={styles.listItemText}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton className={styles.listItem}>
                      <TranslateIcon></TranslateIcon>
                      <ListItemText
                        primary="&nbsp;&nbsp;Hazırlık Bilgileri"
                        className={styles.listItemText}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton className={styles.listItem}>
                      <WorkIcon></WorkIcon>
                      <ListItemText
                        primary="&nbsp;&nbsp;Staj Bilgileri"
                        className={styles.listItemText}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton className={styles.listItem}>
                      <LockOpenIcon></LockOpenIcon>
                      <ListItemText
                        primary="&nbsp;&nbsp;Giriş Bilgileri"
                        className={styles.listItemText}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={9}>
              <Grid container>
                <Grid item xs={12}>
                  <Item>
                    <Box>
                      <Grid container>
                        <Grid item xs={3} xl={1}>
                          <Avatar
                            circular
                            src="https://demos.creative-tim.com/material-dashboard-2-pro-react-ts/static/media/bruce-mars.8a606c4a6dab54c9ceff.jpg"
                            sx={{ width: "100%", height: "auto" }}
                          ></Avatar>
                        </Grid>
                        <Grid
                          item
                          xs={9}
                          xl={11}
                          paddingLeft={3}
                          paddingTop={1}
                        >
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
                <Grid item xs={12}>
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
                              <InputLabel htmlFor="firstname">Ad</InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Asım"
                                  disabled
                                  id="firstname"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="lastname">Soyad</InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Kaymak"
                                  disabled
                                  id="lastname"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid container paddingBottom={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="mothername">
                                Anne Adı
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Yurdagül"
                                  disabled
                                  id="mothername"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="fathername">
                                Baba Adı
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Adem"
                                  disabled
                                  id="fathername"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid container paddingBottom={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="nationality">
                                Uyruk
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Türk"
                                  disabled
                                  id="nationality"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="idnumber">
                                Kimlik Numarası
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="45262969542"
                                  disabled
                                  id="idnumber"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid container paddingBottom={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="gender">Cinsiyet</InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Erkek"
                                  disabled
                                  id="gender"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="birthdate">
                                Doğum Tarihi
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="12.03.2000"
                                  disabled
                                  id="idnumber"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid container paddingBottom={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="status">
                                Medeni Hal
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Bekar"
                                  disabled
                                  id="status"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="birthplace">
                                Doğum Yeri
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Bahçelievler"
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
                <Grid item xs={12}>
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
                              <InputLabel htmlFor="faculty">Fakülte</InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Mühendislik Fakültesi"
                                  disabled
                                  id="faculty"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="department">
                                Bölüm
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Bilgisayar Mühendisliği, Lisans Programı"
                                  disabled
                                  id="department"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid container paddingBottom={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="studentnumber">
                                Numara
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="1306180004"
                                  disabled
                                  id="studentnumber"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="learnstatus">
                                Öğrenim Durumu
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Normal"
                                  disabled
                                  id="learnstatus"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid container paddingBottom={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="statu">Statu</InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Devamlı Öğrenci"
                                  disabled
                                  id="statu"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="registerType">
                                Kayıt Şekli
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Standart Kayıt - ÖSYM"
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

              <Grid container>
                <Grid item xs={12}>
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
                              <InputLabel htmlFor="firstname">Ad</InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Asım"
                                  disabled
                                  id="firstname"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="lastname">Soyad</InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Kaymak"
                                  disabled
                                  id="lastname"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid container paddingBottom={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="mothername">
                                Anne Adı
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Yurdagül"
                                  disabled
                                  id="mothername"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="fathername">
                                Baba Adı
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Adem"
                                  disabled
                                  id="fathername"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid container paddingBottom={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="nationality">
                                Uyruk
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Türk"
                                  disabled
                                  id="nationality"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="idnumber">
                                Kimlik Numarası
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="45262969542"
                                  disabled
                                  id="idnumber"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid container paddingBottom={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="gender">Cinsiyet</InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Erkek"
                                  disabled
                                  id="gender"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="birthdate">
                                Doğum Tarihi
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="12.03.2000"
                                  disabled
                                  id="idnumber"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid container paddingBottom={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="status">
                                Medeni Hal
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Bekar"
                                  disabled
                                  id="status"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="birthplace">
                                Doğum Yeri
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Bahçelievler"
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
                <Grid item xs={12}>
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
                              <InputLabel htmlFor="faculty">Fakülte</InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Mühendislik Fakültesi"
                                  disabled
                                  id="faculty"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="department">
                                Bölüm
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Bilgisayar Mühendisliği, Lisans Programı"
                                  disabled
                                  id="department"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid container paddingBottom={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="studentnumber">
                                Numara
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="1306180004"
                                  disabled
                                  id="studentnumber"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="learnstatus">
                                Öğrenim Durumu
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Normal"
                                  disabled
                                  id="learnstatus"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid container paddingBottom={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="statu">Statu</InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Devamlı Öğrenci"
                                  disabled
                                  id="statu"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <InputLabel htmlFor="registerType">
                                Kayıt Şekli
                              </InputLabel>
                              <FormControl fullWidth>
                                <TextField
                                  value="Standart Kayıt - ÖSYM"
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
            </Grid>
          </Grid>
        </Layout>
      </>
    );
  }
}

export default Home;
