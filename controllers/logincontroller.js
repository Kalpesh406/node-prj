const loginController = (req, res) => {
    return res.render("login", {data : {title : "Login", description : "Please enter your Username and Password." , image : "assets/img4.jpg"}})
}

module.exports = {loginController};