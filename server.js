const express = require("express");
const app = express();
const helmet = require("helmet");
require("dotenv").config();
const morgan = require("morgan");

const userRoute = require("./Routes/user.route");

// app.get("/user/1111", (req, res, next) => {
//   res.json({
//     status: "success",
//     student: {
//       userId: 1111,
//       name: "abak",
//       link: {
//         feed_url: "http://localhost:5000/feeds/1111",
//       },
//     },
//   });
// });

// app.get("/feeds/1111", (req, res, next) => {
//   res.json({
//     status: "success",
//     feeds: [
//       {
//         feedId: 1,
//         titile: "title 01",
//         like: 3,
//         links: {
//           likes_url: "http://localhost:5000/likes/1",
//         },
//       },
//       {
//         feedId: 2,
//         titile: "title 02",
//         like: 3,
//         links: {
//           likes_url: "http://localhost:5000/likes/2",
//         },
//       },
//     ],
//   });
// });

app.use(helmet());
app.use(morgan("common"));
app.use("/v1/", userRoute);

console.log(`PORT:::`, process.env.PORT);
const PORT = process.env.PORT || 5000;

//Can get a list of all Users
// app.get("/v1/users", (req, res, next) => {
//   console.log(req.url);
//   console.log(req.method);
//   res.send("This is Home page");
// });

// //Create a post
// app.post("/v1/user/", (req, res, next) => {
//   res.send("This is Home page");
// });

// //Delete a user
// app.delete("/v1/user/", (req, res, next) => {
//   res.send("This is Home page");
// });

app.listen(PORT, () => {
  console.log(`The server running at ${PORT}`);
});
