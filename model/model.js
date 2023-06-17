const mongoose =  require('mongoose')


const userSchema = mongoose.Schema({
    firstName: String, 
    lastName: String, 
    licenseNumber: String, 
    age: Number, 
    birthDate: Date, 
    model: String, 
    year: Date, 
    plateNumber: String
})
module.exports = User = mongoose.model('user', userSchema);


