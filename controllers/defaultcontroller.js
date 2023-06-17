const defaultController = (req, res) => {
    return res.render("index", { data: { title: "Dashboard", description: "Welcome to Kalpesh's Driving Kiosk" } })
}

module.exports = { defaultController };