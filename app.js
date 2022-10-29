const express = require("express")
const app = express()

const personas = [{
    nombre: "Juan",
    edad: 21
}]

app.get("/", (req, res) => {
    res.send("Hello World!")
    }
)

app.get("/personas", (req, res) => {
    res.send(personas)
    }
)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
    }
)