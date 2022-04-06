export default {
    jwtSecret:  process.env.JWT_SECRET || "someSecret " ,
    DB: {
        URI: process.env.MONGODB_URI || "mongodb://localhost/jwtttutorial",
        USER: "",
        PASSWORD: "",
    }
}