'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateTracker = event => {
  event.preventDefault()

  $('.initial-add-button').show()
  $('.first-create-button').hide()
  console.log('clicked onCreateTracker')
}

const onAddTravels = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  // console.log('form data is' + formData)

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

  api.viewTravels()
    .then(ui.getTravelsSuccess)
    .catch(ui.failure)
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

const addHandlers = event => {
  $('.first-create-button').on('click', onCreateTracker)
  $('#create-tracker').on('submit', onAddTravels)
  $('.view-countries').on('click', onViewTravels)
  $('#update-tracker').on('submit', onAddTravels)
  $('.country-tracker').on('click', '.delete-country', onDeleteCountry)
  $('.country-tracker').on('submit', '.update-country', onUpdateCountry)
}

module.exports = {
  addHandlers
}
