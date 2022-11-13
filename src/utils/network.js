const CONTACT_API_HOST = process.env.CONTACT_API_HOST
const CONTACT_API_PROTOCOL = process.env.CONTACT_API_PROTOCOL
const CONTACT_API_PORT = process.env.CONTACT_API_SERVICE_PORT || process.env.CONTACT_API_PORT
const MENU_API_HOST = process.env.MENU_API_HOST
const MENU_API_PROTOCOL = process.env.MENU_API_PROTOCOL
const MENU_API_PORT = process.env.MENU_API_SERVICE_PORT || process.env.MENU_API_PORT

function makeUrl(port, protocol, host) {
    const url = port ? `${protocol}://${host}:${port}` : `${protocol}://${host}`
    return url
}

const urls = {
    contactApi: makeUrl(CONTACT_API_PORT, CONTACT_API_PROTOCOL, CONTACT_API_HOST),
    menuApi: makeUrl(MENU_API_PORT, MENU_API_PROTOCOL, MENU_API_HOST)
}

if (process.env.NODE_ENV === "development") {
  console.log(urls)
}

module.exports = { urls }
