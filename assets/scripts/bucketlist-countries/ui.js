'use strict'

const showBucketlistCountryTemplate = require('../templates/bucketlist-country.handlebars')

const getTravelsSuccess = (data) => {
  console.log(data)
  const showTrackerHtml = showBucketlistCountryTemplate({ bucketlist_countries: data.bucketlist_countries })
  $('.country-tracker-bucketlist').html(showTrackerHtml)
  $('.country-tracker-bucketlist').show()
  $('.first-create-bucketlist').hide()
  $('.initial-add-button-bucketlist').hide()
  $('.update-tracker-button-bucketlist').show()
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
