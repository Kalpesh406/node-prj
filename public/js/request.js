const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const licenseNumber = document.getElementById("licenseNumber");
const age = document.getElementById("age");
const dob = document.getElementById("dob");

const make = document.getElementById("make");
const model = document.getElementById("model");
const year = document.getElementById("year");
const plateNumber = document.getElementById("plateNumber");

const frmg2 = document.getElementById("frmg2");

async function updateCarInfo() {
    const carData = {
        firstName: firstName.value,
        lastName: lastName.value,
        licenseNumber: licenseNumber.value,
        age: age.value,
        dob: dob.value,
        car_details: {
            make: make.value,
            model: model.value,
            year: year.value,
            plateNumb9er: plateNumber.value,
        },
    };
    console.log(carData);
    const response = await fetch("/g2", {
        method: "Post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(carData),
    });
}

frmg2.addEventListener("submit", (event) => {
    event.preventDefault();
    updateCarInfo();
})
