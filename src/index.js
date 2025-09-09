import 'dotenv/config'
import connectDB from "./db/index.js"
import { app } from './app.js'

// console.log(process.env)
const port = process.env.PORT || 8000;
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`⚙️  Server is running at port: ${port}`)
        })
    })
    .catch(err => console.log("Database connection failed !!!"))