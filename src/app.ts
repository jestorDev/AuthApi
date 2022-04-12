import express from "express"

import morgan from "morgan"
import cors from "cors";

import passport from "passport";

import passportMiddleware from "./middleware/passport";

import authRoutes from "./routes/auth.routes";
import specialRoutes from "./routes/auth.routes";


const app = express();

app.set("port" , process.env.PORT || 3000)

// Static serve
app.use(express.static('./public'));

//middleware

app.use (morgan("dev"))
app.use(cors())
app.use (express.urlencoded ({extended:false}))
app.use (express.json())



app.use(passport.initialize())

passport.use(passportMiddleware)

app.use(authRoutes)



//routes
//app.get('/', (req, res) => {
//    res.send('hello world')
//  })

app.get( "/api", ( req , res)=> {
    res.send("The API is at http://localhost:" + app.get("port"));
})



export default app