'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const userEvents = require('./user-info/events')
const countryEvents = require('./countries-visited/events')
const bucketlistEvents = require('./bucketlist-countries/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  userEvents.addHandlers()
  countryEvents.addHandlers()
  bucketlistEvents.addHandlers()
})
