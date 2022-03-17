"use strict";

require("regenerator-runtime");

var _express = _interopRequireDefault(require("express"));

var _aiRouter = _interopRequireDefault(require("./routers/aiRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use("/static", _express["default"]["static"]("assets"));
app.use("/ai", _aiRouter["default"]);
app.listen(process.env.PORT || 8080, function () {
  console.log("서버 실행 포트는 8080번 입니다🚀");
});