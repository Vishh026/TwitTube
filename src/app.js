import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

//Allow only trusted wesite like frontend port 5176 and backend-3000 so getting data from frontend ,it allow only frontend
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
//we are accepting the json format
app.use(express.json({limit:"16kb"})) 

//for getting form-data otherwise its undefined
app.use(express.urlencoded({extended:true,limit:"16kb"}))

// for storing pdf and images in public folder
app.use(express.static("public"))




export { app }