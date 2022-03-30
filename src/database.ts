import mongoose from "mongoose";

import config from "./config/config";




mongoose.connect(config.DB.URI )




const connetion = mongoose.connection;


connetion.once("open" , () => {
    console.log("MongoDB connection stablished");
})


connetion.on("error" , (err) => {
    console.log(err);
    process.exit(0)
})
