'use strict'

const api = require('./api')
const ui = require('./ui')
// const handlebars = require('../templates/visited-country.handlebars')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateTracker = event => {
  event.preventDefault()

  // need to create below
  // if (handlebars.visited_countries !== '') {
  //   ui.createTrackerFailure()
  //   console.log('failure')
  // } else {
  //   ui.createTrackerSuccess()
  //   $('.initial-add-button').show()
  //   $('.first-create-button').hide()
  //   $('.view-button').hide()
  //   console.log('clicked onCreateTracker')
  // }

  api.viewTravels()
    .then(function (data) {
      hasTravels(data)
    })
}

const hasTravels = (data) => {
  // console.log('from hasTravels: ', data.visited_countries)
  if (data.visited_countries.length !== 0) {
    ui.createTrackerFailure()
  } else {
    ui.createTrackerSuccess()
    $('.initial-add-button').show()
    $('.first-create-button').hide()
    $('.view-button').hide()
    // console.log('clicked onCreateTracker')
  }
}

// below, trying to find number of countries visited.

// const onShowGamesSuccess = response => {
//   const games = response.games.length
//
//   $('#user-stats').text(games)
//   $('#user-stats').show()
// }

// const countryCount = response => {
//   const countries = response.visited_country.length
//
//   $('.country-count').text(countries)
//   console.log("you've visited " + countries + ' countries')
// }

const onAddTravels = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  // console.log('form data is' + formData)

  $('.view-button').hide()
  $('form').trigger('reset')
  api.addTravels(formData)
    .then(function () {
      onViewTravels(event)
    })
    .then(ui.addTravelsSuccess)
    .catch(ui.addTravelsFailure)

    // need to add above uis
}

const onViewTravels = event => {
  event.preventDefault()
  // console.log('button click worked!')

  // $('.update-country').hide()
  $('.view-button').hide()
  api.viewTravels()
    .then(ui.getTravelsSuccess)
    .catch(ui.getTravelsFailure)

  // countryCount()
}

const onViewTravelsNoMessage = event => {
  event.preventDefault()
  // console.log('button click worked!')

  // $('.update-country').hide()
  $('.view-button').hide()
  api.viewTravels()
    .then(ui.getTravelsSuccessNoMessage)
    .catch(ui.getTravelsFailure)

  // countryCount()
}

const onDeleteCountry = event => {
  event.preventDefault()
  // console.log('clicked onDeleteCountry')

  const countryId = $(event.target).data('id')

  api.deleteCountry(countryId)
    .then(function () {
      onViewTravelsNoMessage(event)
    })
    .then(ui.deleteCountriesSuccess)
    .catch(ui.deleteCountriesFailure)
}

// const onUpdateCountry = event => {
//   event.preventDefault()
//
//   const countryId = $(event.target).data('id')
//
//   api.updateCountry(countryId)
//     .then(function () {
//       onViewTravels(event)
//     })
//     .catch(console.error)
// }
//

const onUpdateCountry = event => {
  event.preventDefault()

  const countryId = $(event.target).data('id')

  const form = event.target
  const formData = getFormFields(form)

  // console.log('onUpdateCountry formData is ' + formData)
  // console.log(countryId)

  $('form').trigger('reset')
  api.updateCountry(countryId, formData)
    .then(function () {
      onViewTravelsNoMessage(event)
    })
    .then(ui.updateCountrySuccess)
    .catch(ui.updateCountryFailure)
}

// const onShowUpdate = event => {
//   event.preventDefault()
//
//   console.log('hiding this button')
//
//   $('.update-country').show()
//   $('.fake-update').hide()
// }

const addHandlers = event => {
  $('.first-create-button').on('click', onCreateTracker)
  $('#create-tracker').on('submit', onAddTravels)
  $('.view-countries').on('click', onViewTravels)
  $('#update-tracker').on('submit', onAddTravels)
  $('.country-tracker').on('click', '.delete-country', onDeleteCountry)
  $('.country-tracker').on('submit', '.update-country', onUpdateCountry)
  // $('.country-tracker').on('click', '.fake-update', onShowUpdate)
}

module.exports = {
  addHandlers
}
