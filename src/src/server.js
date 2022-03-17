import "regenerator-runtime";
import express from "express";
import aiRouter from "./routers/aiRouter";

const PORT = process.env.PORT || 8080;
const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("assets"));
app.use("/ai", aiRouter);


app.listen(PORT, function () {
    console.log(`서버 실행 포트는 ${PORT}번 입니다🚀`)
});