import express, { urlencoded } from "express"
import {engine} from "express-handlebars"
import __dirname from "./utils.js"
import * as path from "path"


const app = express()
const PORT = 4000

app.use(express.json());
app.use(urlencoded({ extended: true }));

//estructura handlebars
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", path.resolve(__dirname + "/views"))



app.get("/", (req, res) => {
    res.render("home", {
    title: "backend | Handlebars"
})
})
app.listen(PORT, () => {
    console.log(`Servidor por Puerto ${PORT}`)
})