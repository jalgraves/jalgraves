import express from 'express'
import { config } from '../utils/main.js'
const router = express.Router()
const pages = config.pages

router.use(function (req, res, next) {
  next()
})

router.get('/', function(req, res, next) {
  const home = pages.index
  res.render("main", home.metadata)
})

router.get('/healthz', function(req, res, next) {
  console.log(`[GET] Health | ${req.path}`)
  res.sendStatus(200)
})

router.get('/index', function(req, res, next) {
  const home = pages.home
  res.render("main", home.metadata)
})

router.get('/about', function (req, res, next) {
  const about = pages.about
  res.render("main", about.metadata)
})

router.get('/blog', function (req, res, next) {
  const blog = pages.blog
  res.render("main", blog.metadata)
})

router.get('/menu', function (req, res, next) {
  const menu = pages.menu
  res.render("main", menu.metadata)
})

router.get('/about.html', function (req, res, next) {
  const about = pages.about
  res.render("main", about.metadata)
})

router.get('/contact', function (req, res, next) {
  const contact = pages.contact
  res.render("main", contact.metadata)
})

router.get('/contact.html', function (req, res, next) {
  const contact = pages.contact
  res.render("main", contact.metadata)
})

router.get('/parties', function (req, res, next) {
  const parties = pages.parties
  res.render("main", parties.metadata)
})

router.get('/parties.html', function (req, res, next) {
  const parties = pages.parties
  res.render("main", parties.metadata)
})

export default router
