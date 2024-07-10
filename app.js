import express from "express"
import dotenv from "dotenv"
import conn from "./db.js"
import pageRoute from "./routes/pageRoute.js"
import photoRouter from './routes/photoRoute.js';

dotenv.config()

// connection to the DB
conn()

const app = express()
const port = process.env.PORT

//ejs template engine
app.set("view engine","ejs")

// static files middleware
app.use(express.static("public"))
app.use(express.json())

//routes
app.use("/",pageRoute)
app.use('/photos', photoRouter);

// app.get("/",(req,res)=>{
//     res.render("index")
// })

// app.get("/about",(req,res)=>{
//     res.render("about")
// })

app.listen(port,()=>{
    console.log(`Application running on port:${port}`)
})

// ethemkizilyer3546
// f9ERnmcdoiH1SZ6R
// mongodb+srv://ethemkizilyer3546:<password>@cluster0.2esmrii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0