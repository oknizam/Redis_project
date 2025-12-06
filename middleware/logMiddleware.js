const logMiddleWare = (req, res, next) => {
  const start = new Date();

  res.on("finish", () => {
    let responseTime = new Date() - start;

    console.log("response time", responseTime)
  })
  next();
}

module.exports = {
  logMiddleWare
}
