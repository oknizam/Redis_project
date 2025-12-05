const client = require("../redisClient");

const handlePosts = async (req, res) => {
  try {
    let cachedData = await client.get("posts");

    if (cachedData) {
      cachedData = JSON.parse(cachedData);
      console.log("cached data", cachedData)
      return res.status(200).json(cachedData)
    }

    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    response = await response.json();
    await client.set("posts", JSON.stringify(response))
    client.expire("posts", 5000)
    return res.status(200).json(response)
  }
  catch (err) {
    console.log("error fetcing user", err);
    return res.status(500).json(err)
  }
}


module.exports = {
  handlePosts
}