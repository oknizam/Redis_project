const Router = require("express").Router;
const { handlePosts } = require("../controllers/posts.controllers");

const postsRoute = Router();

postsRoute.get("/", handlePosts);


module.exports = postsRoute;