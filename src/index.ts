import app from "./app";

app.listen(app.get("port"))

console.log("Server on : " , app.get("port"));
