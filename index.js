import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()


const allowedOrigins = ["http://localhost:5173"];
app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


app.get("/api", (req, res) => {
    res.cookie("test", "test", {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        secure: true,
        sameSite: "strict",
    }).send("Hello niglet")
})


app.get("/api/cookie", (req, res) => {
    const cookie = req.cookies.test
    res.send(cookie)
})


app.listen(3000, () => {
    console.log("Server is running")
})