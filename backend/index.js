const express = require("express"),
  app = express(),
  port = 3001;

bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
const privateKey = "ASIM";
var user;
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
app.get("/", tokenControl, (req, res) => {
  console.log(user);
  return res.json({
    result: true,

    data: [
      {
        alinanDers: user.alinanDers,
        notOrtalamasi: user.notOrtalamasi,
        bulunulanSinif: user.bulunulanSinif,
      },
    ],
    message: "Anasayfa açıldı.",
  });
});
app.post("/login", (req, res) => {
  const fs = require("fs");
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
