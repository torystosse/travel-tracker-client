'use strict'

const showVisitedCountryTemplate = require('../templates/visited-country.handlebars')

const messages = $('#user-message')
const countryCount = $('#country-count')

const onSuccess = message => {
  $('#user-message')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  setTimeout(() => messages.html(''), 4000)
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#user-message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  setTimeout(() => messages.html(''), 4000)
  $('form').trigger('reset')
}

const getTravelsSuccess = (data) => {
  if (data.visited_countries.length < 1) {
    $('.country-tracker').hide()
    onFailure('Oh no... there are no countries here! Create your tracker first.')
  } else {
    // console.log('you have countries - yay!')
    // console.log(data)
    const showTrackerHtml = showVisitedCountryTemplate({ visited_countries: data.visited_countries })
    countryCount.show()
    countryCount.html("You've visited " + data.visited_countries.length + '/195 countries! Keep it up!')
    onSuccess('Your travel history is looking good!')
    $('.country-tracker').html(showTrackerHtml)
    $('.country-tracker').show()
    $('.first-create').hide()
    $('.initial-add-button').hide()
    $('.update-tracker-button').show()
  }
}

const getTravelsSuccessNoMessage = (data) => {
  if (data.visited_countries.length < 1) {
    $('.country-tracker').hide()
    onFailure('Oh no... there are no countries here! Create your tracker first.')
  } else {
    // console.log('you have countries - yay!')
    // console.log(data)
    const showTrackerHtml = showVisitedCountryTemplate({ visited_countries: data.visited_countries })
    countryCount.html("You've visited " + data.visited_countries.length + '/195 countries! Keep it up!')
    $('.country-tracker').html(showTrackerHtml)
    $('.country-tracker').show()
    $('.first-create').hide()
    $('.initial-add-button').hide()
    $('.update-tracker-button').show()
  }
}

const getTravelsFailure = message => {
  onFailure('Oh no... something went wrong! Try again.')
}

// const failure = (error) => {
//   console.error(error)
// }

const createTrackerSuccess = message => {
  onSuccess('You created a tracker! How exciting!')
}

const createTrackerFailure = message => {
  onFailure("Oh no... something went wrong! Maybe you've already created a tracker?")
}

const addTravelsSuccess = message => {
  onSuccess('You added a country! Hope the trip was awesome!')
}

const addTravelsFailure = message => {
  onFailure('Oh no... something went wrong! Try again.')
}

const deleteCountriesSuccess = message => {
  onSuccess('Are you sure you meant to delete that...')
}

const deleteCountriesFailure = message => {
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

// const showEdit = countryId => {
//   // do something with the countryId? so it only shows that one country's update?
//   $('.update-country').show()
//   $('.edit-button').hide()
// }

module.exports = {
  getTravelsSuccess,
  getTravelsSuccessNoMessage,
  getTravelsFailure,
  createTrackerSuccess,
  createTrackerFailure,
  addTravelsSuccess,
  addTravelsFailure,
  deleteCountriesSuccess,
  deleteCountriesFailure,
  // showEdit,
  updateCountrySuccess,
  updateCountryFailure
}
