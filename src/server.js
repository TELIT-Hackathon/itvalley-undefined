"use strict";

const Net = require("net");
const path = require("path");
const compiler = require("compilex");
const express = require("express");
const bodyParser = require("body-parser");
const formidable = require("formidable");
const fs = require("fs");
const cors = require("cors");
const app = express();
const client = new Net.Socket();

// app.use("/", express.static(path.join(__dirname, "dist")));

const PORT = 4000;
const HOSTNAME = "0.0.0.0";
const clientLog = [];

app.use(bodyParser.json());
app.use(cors());
function compilePython(code) {
  const envData = { OS: "linux" };
  return new Promise((resolve, reject) => {
    compiler.compilePython(envData, code, function (data) {
      resolve(data);
    });
  });
}

const option = { stats: true };
compiler.init(option);

client.on("data", function (chunk) {
  clientLog.push(chunk.toString());
});

client.on("end", function (chunk) {});

app.get("/download", function (req, res) {
  res.download("./companyRequest.pdf");
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/quest_submit.html"));
  //res.download('./companyRequest.pdf')
});

// app.listen(PORT, function () {
//   console.log(`Server listening on:${PORT}.`)
// })

app.post("/login/login-access", function (req, res) {
  let title = req.body.title;
  let tags = req.body.tags;
  let questionLine = req.body.login_txt;
  //let pdfFile = req.body.f

  var form = new formidable.IncomingForm();

  //console.log(pdfFile)
});
let code = `print("Hello world")`;
app.post("/submit", function (req, res) {
  code = req.body.code_block;
  console.log("this is what we got", code);
  res.status(201).send();
});
app.get("/compile_result", function (req, res) {
  console.log("We are here");
  compilePython(code).then((rsp) => res.json(rsp));
});

app.post("", function (req, res) {});

app.on("connection", function (socket) {
  //clients.push(socket)
  console.log("A new connection has been established.");

  socket.on("data", function (chunk) {
    console.log(chunk);
  });

  socket.on("end", function () {
    console.log("Closing connection with the client");
  });
});

////////
// button press

app.post("/compilecode", function (req, res) {
  let code = req.body.code;
  let input = req.body.input;
  let inputRadio = req.body.inputRadio;
  let lang = req.body.lang;

  if (lang === "Python") {
    const envData = { OS: "linux" };

    if (inputRadio === "true") {
      compiler.compilePythonWithInput(envData, code, input, function (data) {
        res.send(data);
      });
    } else {
      compiler.compilePython(envData, code, function (data) {
        res.send(data);
      });
    }
  }
});

app.get("/fullStat", function (req, res) {
  compiler.fullStat(function (data) {
    res.send(data);
  });
});

compiler.flush(function () {
  console.log("All temporary files flushed !");
});

app.listen(PORT, HOSTNAME, () => {}); //HOSTNAME)
