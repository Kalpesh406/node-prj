const express = require('express');
const path = require('path');
const {defaultController} = require("./controllers/defaultcontroller");
const {loginController} = require("./controllers/logincontroller");
const {g2Controller, saveUser} = require("./controllers/g2pagecontroller");
const {gController, getUser, updateCarInfo} = require("./controllers/gpagecontroller");
const {mongoose } = require("mongoose");
const userModel = require("./model/model");

const MONGO_URL = "mongodb+srv://kalpeshp24h:kalpesh.406@cluster0.jvj4zkn.mongodb.net/prajapati36?retryWrites=true&w=majority"
// app.use(express.static(path.join(__dirname, "public")));

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Create server

const PORT = 3400;
app.listen(PORT, ()=>{console.log("Server started on port 3400.")});

app.set("view engine","ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));


async function mongoConnect(){
    await mongoose.connect(MONGO_URL)

}
mongoConnect();

app.use(express.json());

app.get("/", defaultController);

app.get("/g",gController);
app.get("/g/:licenseNumber",getUser);
app.put("/g",updateCarInfo);

app.get("/g2", g2Controller);
app.post("/g2", saveUser);

app.get("/login", loginController);

