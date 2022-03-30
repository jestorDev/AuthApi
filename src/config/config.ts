export default {
    jwtSecret:  process.env.JWT_SECRET,
    DB: {
        URI: process.env.MONGODB_URI || "mongodb://localhost/jwtttutorial",
        USER: "",
        PASSWORD: "",
    }
}