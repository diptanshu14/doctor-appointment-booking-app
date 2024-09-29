import express from "express"
import cors from "cors"
import "dotenv/config"

import connectDB from "./config/database.js"
import connectCloud from "./config/cloud.js"
import routes from "./routes/routes.js"

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloud()

//middlewares
app.use(express.json())
app.use(cors())

//api routes
app.use(routes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})