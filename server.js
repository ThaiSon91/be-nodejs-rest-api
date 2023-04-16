const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/user/1111", (req, res, next) => {
  res.json({
    status: "success",
    student: {
      userId: 1111,
      name: "abak",
      link: {
        feed_url: "http://localhost:5000/feeds/1111",
      },
    },
  });
});

app.get("/feeds/1111", (req, res, next) => {
  res.json({
    status: "success",
    feeds: [
      {
        feedId: 1,
        titile: "title 01",
        like: 3,
        links: {
          likes_url: "http://localhost:5000/likes/1",
        },
      },
      {
        feedId: 2,
        titile: "title 02",
        like: 3,
        links: {
          likes_url: "http://localhost:5000/likes/2",
        },
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`The server running at ${PORT}`);
});
