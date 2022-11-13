var express = require('express')
var router = express.Router()
var config = require('../utils/config.json')
var pages = config.pages

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

router.get(/^\/index\.(.*)\/?$/i, function(req, res, next) {
  res.redirect('/')
})

router.get(/^\/about\.(.*)\/?$/i, function(req, res, next) {
  res.redirect('/about')
})

router.get(/^\/blog\.(.*)\/?$/i, function(req, res, next) {
  res.redirect('/blog')
})

router.get('/contact', function (req, res, next) {
  const contact = pages.contact
  res.render("main", contact.metadata)
})

router.get('/contact.html', function (req, res, next) {
  const contact = pages.contact
  res.render("main", contact.metadata)
})

router.get('/about', function (req, res, next) {
  const about = pages.about
  res.render("main", about.metadata)
})

router.get('/blog', function (req, res, next) {
  const blog = pages.blog
  res.render("main", blog.metadata)
})

router.get('/blog.html', function (req, res, next) {
  const blog = pages.blog
  res.render("main", blog.metadata)
})

module.exports = router
