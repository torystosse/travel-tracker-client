'use strict'

const showBucketlistCountryTemplate = require('../templates/bucketlist-country.handlebars')

const messages = $('#user-message')

const onSuccess = message => {
  $('#user-message')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  setTimeout(() => messages.html(''), 3000)
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#user-message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  setTimeout(() => messages.html(''), 3000)
  $('form').trigger('reset')
}

const getTravelsSuccess = (data) => {
  if (data.bucketlist_countries.length < 1) {
    $('.country-tracker-bucketlist').hide()
    onFailure('Oh no... there are no countries here! Create your bucket list first.')
  } else {
    console.log(data)
    const showTrackerHtml = showBucketlistCountryTemplate({
      bucketlist_countries: data.bucketlist_countries
    })
    onSuccess('Your bucket list is looking good!')
    $('.country-tracker-bucketlist').html(showTrackerHtml)
    $('.country-tracker-bucketlist').show()
    $('.first-create-bucketlist').hide()
    $('.initial-add-button-bucketlist').hide()
    $('.update-tracker-button-bucketlist').show()
  }
}

const getTravelsSuccessNoMessage = (data) => {
  if (data.bucketlist_countries.length < 1) {
    $('.country-tracker-bucketlist').hide()
    onFailure('Oh no... there are no countries here! Create your bucket list first.')
  } else {
    console.log(data)
    const showTrackerHtml = showBucketlistCountryTemplate({
      bucketlist_countries: data.bucketlist_countries
    })
    $('.country-tracker-bucketlist').html(showTrackerHtml)
    $('.country-tracker-bucketlist').show()
    $('.first-create-bucketlist').hide()
    $('.initial-add-button-bucketlist').hide()
    $('.update-tracker-button-bucketlist').show()
  }
}

// const failure = (error) => {
//   console.error(error)
// }

const getTravelsFailure = message => {
  onFailure('Oh no... something went wrong! Try again.')
}

// const failure = (error) => {
//   console.error(error)
// }

const createBucketListSuccess = message => {
  onSuccess('You created a bucket list! How exciting!')
}

const createBucketListFailure = message => {
  onFailure("Oh no... something went wrong! Maybe you've already created a bucket list?")
}

const addTravelsSuccess = message => {
  onSuccess('You added a country! Seems like a great place to visit!')
}

const addTravelsFailure = message => {
  onFailure('Oh no... something went wrong! Try again.')
}

const deleteCountrySuccess = message => {
  onSuccess('You deleted a country, hope you got to visit it!')
}

const deleteCountryFailure = message => {
  onFailure('Oh no... something went wrong! Try again.')
}

const updateCountrySuccess = message => {
  onSuccess('Country updated.')
}

const updateCountryFailure = message => {
  onFailure('Oh no... something went wrong! Try again.')
}
// $('.initial-tracker').show()
// $('.created-tracker-update').show()

module.exports = {
  getTravelsSuccess,
  getTravelsSuccessNoMessage,
  getTravelsFailure,
  createBucketListSuccess,
  createBucketListFailure,
  addTravelsSuccess,
  addTravelsFailure,
  deleteCountrySuccess,
  deleteCountryFailure,
  updateCountrySuccess,
  updateCountryFailure
}
