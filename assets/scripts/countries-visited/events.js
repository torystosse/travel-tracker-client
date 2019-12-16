'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateTracker = event => {
  event.preventDefault()

  $('.initial-add-button').show()
  $('.first-create-button').hide()
  $('.view-button').hide()
  console.log('clicked onCreateTracker')
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
    .catch(console.error)
}

const onViewTravels = event => {
  event.preventDefault()
  // console.log('button click worked!')

  // $('.update-country').hide()
  $('.view-button').hide()
  api.viewTravels()
    .then(ui.getTravelsSuccess)
    .catch(ui.failure)

  // countryCount()
}

const onDeleteCountry = event => {
  event.preventDefault()
  console.log('clicked onDeleteCountry')

  const countryId = $(event.target).data('id')

  api.deleteCountry(countryId)
    .then(function () {
      onViewTravels(event)
    })
    .catch(console.error)
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

  console.log('onUpdateCountry formData is ' + formData)
  console.log(countryId)

  $('form').trigger('reset')
  api.updateCountry(countryId, formData)
    .then(function () {
      onViewTravels(event)
    })
    .catch(console.error)
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
