import express from "express"
import * as axios from "axios"
import { appSecret } from "../utils/secrets.js"
import { postRequest } from "../utils/request.js"
import { urls } from "../utils/network.js"
const router = express.Router()

const AUTH = 'Basic ' + Buffer.from(appSecret.api_user + ':' + appSecret.api_pass).toString('base64')
const axiosInstance = axios.default.create({
  baseURL: urls.contentApi,
  timeout: 1000,
  headers: {'Content-Type': 'application/json', 'Authorization': AUTH}
})

async function getPosts(uri, res) {
  try {
    const response = await axiosInstance.get(uri)
    res.status(200).json({'status': 200, 'data': response.data})
  } catch (error) {
    console.log(`getPosts: ${error}`)
    res.status(500).json({
      "title": "Failed to get blog posts",
      "status": 500
    })
  }
}

router.get("/posts", function (req, res, next) {
  const uri = `/v1/content/blog`
  getPosts(uri, res)
})

router.post("/create-post", function (req, res, next) {
  console.log("CREATING POST")
  console.log(req.body)
  let data = JSON.stringify(req.body)
  const headers = {
    "Accept": "*/*",
    "Content-Type": "application/json",
    "Authorization": AUTH
  }
  console.log(headers)
  try {
    postRequest(urls.contentApi, headers, data, "/v1/content/posts", res)
  } catch(error) {
    console.log("AUTH Error: " + error)
    res.status(500).json({
      "title": "Content API Failure",
      "status": 500
    })
  }
})

router.get("/:page", function(req, res, next) {
  res.redirect(`/${req.params["page"]}`)
})

export default router
