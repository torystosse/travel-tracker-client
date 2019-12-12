'use strict'

const showVisitedCountryTemplate = require('../templates/visited-country.handlebars')

const getTravelsSuccess = (data) => {
  console.log(data)
  const showTrackerHtml = showVisitedCountryTemplate({ visited_countries: data.visited_countries })
  $('.country-tracker').html(showTrackerHtml)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getTravelsSuccess,
  failure
}
