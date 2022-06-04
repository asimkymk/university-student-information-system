var cors = require("cors");

const express = require("express"),
  app = express(),
  port = 3001;

bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
const privateKey = "ASIM";
const fs = require("fs");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function tokenControl(request, response, next) {
  jwt.verify(request.headers.token, privateKey, function (err, decoded) {
    if (decoded) next();
    else
      return response.json(
        {
          result: false,
          data: [],
          message: "Token geçersiz.",
        },
        401
      );
  });
}
app.post("/", tokenControl, (req, res) => {
  //console.log(req.headers);
  //console.log(req.body);
  let rawdata = fs.readFileSync("data/student.json");
  let students = JSON.parse(rawdata);
  for (index in students) {
    user = students[index];
    if (req.body.tcNo == user.tcNo) {
      let data = {
        Pazartesi: 0,
        Salı: 0,
        Çarşamba: 0,
        Perşembe: 0,
        Cuma: 0,
      };
      for (j in user.dersAlma) {
        const ders = user.dersAlma[j];
        let rawdata1 = fs.readFileSync("data/lecture.json");
        let lecture = JSON.parse(rawdata1);
        for (j in lecture) {
          if (lecture[j].dersKodu == ders.dersKodu && lecture[j].donem == 6) {
            data[lecture[j].dersGunu] += 1;
          }
        }
      }

      var values = Object.values(data);

      return res.json({
        result: true,

        data: [
          {
            alinanDers: user.alinanDers,
            notOrtalamasi: user.notOrtalamasi,
            bulunulanSinif: user.bulunulanSinif,
            donemOrtalamalari: user.donemOrtalamalari,
            gunlukDersSayisi: values,
          },
        ],
        message: "Anasayfa açıldı.",
      });
    }
  }

  return res.json({
    result: false,
    data: [],
    message: "Bilgi bulunamadı.",
  });
});

app.post("/grade", tokenControl, (req, res) => {
  //console.log(req.headers);
  //console.log(req.body);
  let rawdata = fs.readFileSync("data/student.json");
  let students = JSON.parse(rawdata);
  for (index in students) {
    user = students[index];
    if (req.body.tcNo == user.tcNo) {
      let data = user.dersAlma;
      let responsedata = [];
      let responseindex = 0;
      for (k in user.dersAlma) {
        const ders = user.dersAlma[k];
        let rawdata1 = fs.readFileSync("data/lecture.json");
        let lecture = JSON.parse(rawdata1);
        for (j in lecture) {
          if (lecture[j].dersKodu == ders.dersKodu) {
            if (lecture[j].donem == 6) {
              responsedata.push(data[j]);
              responsedata[responseindex].toplamKredi = lecture[j].toplamKredi;
              responsedata[responseindex].dersAdi = lecture[j].dersAdi;
              responseindex++;
            }
          }
        }
      }
      console.log(data);

      return res.json({
        result: true,

        data: responsedata,
        message: "Anasayfa açıldı.",
      });
    }
  }

  return res.json({
    result: false,
    data: [],
    message: "Bilgi bulunamadı.",
  });
});

app.post("/gradecard", tokenControl, (req, res) => {
  //console.log(req.headers);
  //console.log(req.body);
  let rawdata = fs.readFileSync("data/student.json");
  let students = JSON.parse(rawdata);
  for (index in students) {
    user = students[index];
    if (req.body.tcNo == user.tcNo) {
      let data = user.dersAlma;
      let responsedata = [];
      let responseindex = 0;

      for (k in user.dersAlma) {
        const ders = user.dersAlma[k];
        let rawdata1 = fs.readFileSync("data/lecture.json");
        let lecture = JSON.parse(rawdata1);
        for (j in lecture) {
          if (lecture[j].dersKodu == ders.dersKodu) {
            responsedata.push(data[j]);
            responsedata[responseindex].toplamKredi = lecture[j].toplamKredi;
            responsedata[responseindex].t = lecture[j].t;
            responsedata[responseindex].dersAdi = lecture[j].dersAdi;
            responsedata[responseindex].donem = lecture[j].donem;
            responsedata[responseindex].tur = lecture[j].tur;
            responseindex++;
          }
        }
      }
      responsedata.push({ agno: user.donemOrtalamalari });

      return res.json({
        result: true,

        data: responsedata,
        message: "Anasayfa açıldı.",
      });
    }
  }

  return res.json({
    result: false,
    data: [],
    message: "Bilgi bulunamadı.",
  });
});


app.post("/lectureList", tokenControl, (req, res) => {
  let rawdata = fs.readFileSync("data/student.json");
  let students = JSON.parse(rawdata);
  for (index in students) {
    user = students[index];
    if (req.body.tcNo == user.tcNo) {
      let data = user.dersAlma;
      let responsedata = [];
      let responseindex = 0;
      for (k in user.dersAlma) {
        const ders = user.dersAlma[k];
        let rawdata1 = fs.readFileSync("data/lecture.json");
        let lecture = JSON.parse(rawdata1);
        for (j in lecture) {
          if (lecture[j].dersKodu == ders.dersKodu) {
            if (lecture[j].donem == user.bulunulanDonem) {

              responsedata.push(data[j]);
              responsedata[responseindex].toplamKredi = lecture[j].toplamKredi;
              responsedata[responseindex].dersAdi = lecture[j].dersAdi;
              responsedata[responseindex].p = lecture[j].p;
              responsedata[responseindex].t = lecture[j].t;
              responsedata[responseindex].l = lecture[j].l;
              responsedata[responseindex].donem = lecture[j].donem;
              responseindex++;
            }
          }
        }
      }
      console.log(data);

      return res.json({
        result: true,

        data: responsedata,
        message: "Anasayfa açıldı.",
      });
    }
  }
});

app.post("/login", (req, res) => {
  let rawdata = fs.readFileSync("data/student.json");
  let students = JSON.parse(rawdata);
  for (index in students) {
    user = students[index];
    if (req.body.tcNo == user.tcNo && req.body.password == user.password) {
      var token = jwt.sign({ tcNo: user.tcNo }, privateKey);
      return res.json({
        result: true,
        data: [
          {
            token: token,
          },
        ],
        message: "Giriş yapıldı.",
      });
    }
  }

  return res.json({
    result: false,
    data: [],
    message: "Bilgiler yanlış.",
  });
});
