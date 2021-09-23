const express = require('express')
const path = require('path')
const hbs = require("hbs")

const app = express()

const publicFolder = path.join(__dirname, 'public')
const templatePath = path.join(__dirname, "/templates/views")
const partialsPath = path.join(__dirname, "/templates/partials")

// To set the view engine

app.set("view engine", "hbs")
app.set('views', templatePath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicFolder))

app.get("/", (req, res) => {
    res.render('index',{
        login: "Saket",
        title: "ShutterUp - Home"
    })
})

app.get("/about", (req, res) => {
    res.render('about',{
        title: "ShutterUp - About"
    });
});

app.get("/about/*", (req, res) => {
    res.render('404', {
        errorcomment: "404, Oops this About page couldn't found"
    });
});

app.get("/login", (req, res) => {
    res.render('webLogin',{
        title: "ShutterUp - Login"
    })
});
app.get("/welcome", (req, res) => {
    res.render('welcome',{
        title: "ShutterUp - Account",
        name: (req.query.name)
    })
});

app.get("/register", (req, res) => {
    res.render('webSignup',{
        title: "ShutterUp - Register"
    })
});

app.get("*", (req, res) => {
    res.render('404', {
        errorcomment: "404, Oops this page couldn't found"
    });
});

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server started at port ${PORT}`))