const express = require("express");
const userRoute = require("./routes/posts.routes")
const { logMiddleWare } = require("./middleware/logMiddleware")


const app = express();
app.use(express.json());

app.use(logMiddleWare)

app.use("/users", userRoute)


app.listen(9000, () => {
  console.log("listening 9000 port")
})
