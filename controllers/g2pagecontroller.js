const userModel = require("../model/model")

const g2Controller = (req, res) => {
    return res.render("g2", { data: { title: "G2", description: "Welcome to Kalpesh's Driving Kiosk" } })
}

const saveUser = async (req, res) => { 
    console.log(req.body);
    await userModel.create({
        ...req.body
    })
    return res.status(201).send(); };

module.exports = { g2Controller, saveUser };
