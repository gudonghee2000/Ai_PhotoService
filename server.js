import express from "express";
import aiRouter from "./routers/aiRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/views");

app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("assets"));
app.use("/ai", aiRouter);


app.listen(8080, function () {
    console.log("서버 실행 포트는 8080번 입니다🚀")
});