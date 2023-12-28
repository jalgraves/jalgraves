const CONTACT_API_HOST = process.env.CONTACT_API_HOST || 'contact-api'
const CONTACT_API_PROTOCOL = process.env.CONTACT_API_PROTOCOL || 'http'
const CONTACT_API_PORT = process.env.CONTACT_API_SERVICE_PORT || process.env.CONTACT_API_PORT

function makeUrl(port, protocol, host) {
  const url = port ? `${protocol}://${host}:${port}` : `${protocol}://${host}`
  return url
}

const urls = {
    contactApi: makeUrl(CONTACT_API_PORT, CONTACT_API_PROTOCOL, CONTACT_API_HOST)
}

if (process.env.NODE_ENV === "development") {
  console.log(urls)
}

export { urls }
