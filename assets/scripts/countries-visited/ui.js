'use strict'

const showVisitedCountryTemplate = require('../templates/visited-country.handlebars')

const getTravelsSuccess = (data) => {
  console.log(data)
  const showTrackerHtml = showVisitedCountryTemplate({ visited_countries: data.visited_countries })
  $('.country-tracker').html(showTrackerHtml)
  $('.country-tracker').show()
  $('.first-create').hide()
  $('.initial-add-button').hide()
  $('.update-tracker-button').show()
}

const failure = (error) => {
  console.error(error)
}

// $('.initial-tracker').show()
// $('.created-tracker-update').show()

module.exports = {
  getTravelsSuccess,
  failure
}
