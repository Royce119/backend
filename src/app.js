const express = require("express");
const cors = require("cors");

//Routes
const authRouter = require("./routes/auth/auth.router");
const contactRouter = require("./routes/contact/contact.router");
const subscribtionsRouter = require("./routes/subscribtions/subscribtions.router");
//
const app = express();
app.use(
  cors({
    origin: [
      "https://bis-grad-project.vercel.app",
      "https://bis-grad-project.vercel.app/",
      "https://bis-grad-project.vercel.app/profile",
    ],
    credentials: true, //i
  })
);

app.use(express.json());
app.use(authRouter);
app.use(contactRouter);
app.use(subscribtionsRouter);

//
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong !";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});

module.exports = app;
