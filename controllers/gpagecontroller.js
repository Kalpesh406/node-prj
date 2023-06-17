const userModel = require("../model/model");
const gController = (req, res) => {
    return res.render("g", { data: { title: "G", description: "Welcome to our Drive Test PR online platform, your gateway to obtaining your G licence in Ontario. Our user-friendly interface streamlines the process, allowing you to conveniently book your G-licence test online. Prepare for the road ahead as you navigate through a comprehensive assessment of your driving skills, knowledge, and understanding of road rules. With our guidance and support, you'll gain the confidence needed to pass the G-licence test and enjoy the privileges of full driving independence. Book your G-licence test today and pave the way for a smooth journey towards your driving goals.", image: "/assets/img2.jpg" } })
}

const getUser = async (req, res) => {
    const licenseNumber = req.query.licenseNumber;
    console.log(licenseNumber);
    const result = await userModel.findOne({ licenseNumber: licenseNumber });
    console.log(result);
    res.status(200).json(result);
}

const updateCarInfo = async (req, res) => {
    const carData = req.body;
    console.log(carData.licenseNumber, carData.car_details);
    const result = await userModel.updateOne(
        { licenseNumber: carData.licenseNumber },
        {
            $set: {
                car_details: carData.car_details
            }
        })
    return res.status(200).send();
}

module.exports = { gController, getUser, updateCarInfo };