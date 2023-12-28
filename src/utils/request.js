import * as axios from "axios"

async function getRequest(baseUrl, headers, uri, res) {
  const axiosInstance = axios.default.create({
    baseURL: baseUrl,
    timeout: 1000,
    headers: headers
  })
  try {
    const response = await axiosInstance.get(uri)
    res.status(200).json({'status': 200, 'data': response.data})
  } catch (error) {
    console.log(`makeRequest: ${error}`)
    res.status(500).json({
      "title": "Request Error",
      "status": 500
    })
  }
}

async function postRequest(baseUrl, headers, body, uri, res) {
  const axiosInstance = axios.default.create({
    baseURL: baseUrl,
    timeout: 1000,
    headers: headers,
    data: body
  })
  try {
    const response = await axiosInstance.post(uri)
    res.status(200).json({'status': 200, 'data': response.data})
  } catch (error) {
    console.log(`postRequest: ${error} ${response.status}`)
    res.status(500).json({
      "title": "Request Error",
      "status": 500
    })
  }
}

export { getRequest, postRequest }
