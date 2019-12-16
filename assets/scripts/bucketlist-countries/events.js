'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateTracker = event => {
  event.preventDefault()

  $('.initial-add-button-bucketlist').show()
  $('.first-create-button-bucketlist').hide()
  $('.view-button-bucketlist').hide()
  console.log('clicked onCreateTracker')

  ui.createBucketListSuccess()
}

const onAddTravels = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  // console.log('form data is' + formData)
  $('.view-button-bucketlist').hide()
  $('form').trigger('reset')
  api.addTravels(formData)
    .then(function () {
      onViewTravels(event)
    })
    .then(ui.addTravelsSuccess)
    .catch(ui.addTravelsFailure)
}

const onViewTravels = event => {
  event.preventDefault()
  // console.log('button click worked!')
  $('.view-button-bucketlist').hide()
  api.viewTravels()
    .then(ui.getTravelsSuccess)
    .catch(ui.getTravelsFailure)
}

const onDeleteCountry = event => {
  event.preventDefault()
  console.log('clicked onDeleteCountry')

  const countryId = $(event.target).data('id')

  api.deleteCountry(countryId)
    .then(function () {
      onViewTravels(event)
    })
    .then(ui.deleteCountrySuccess)
    .catch(ui.deleteCountryFailure)
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
    .then(ui.updateCountrySuccess)
    .catch(ui.updateCountryFailure)
}

const addHandlers = event => {
  $('.first-create-button-bucketlist').on('click', onCreateTracker)
  $('#create-tracker-bucketlist').on('submit', onAddTravels)
  $('.view-countries-bucketlist').on('click', onViewTravels)
  $('#update-tracker-bucketlist').on('submit', onAddTravels)
  $('.country-tracker-bucketlist').on('click', '.delete-country-bucketlist', onDeleteCountry)
  $('.country-tracker-bucketlist').on('submit', '.update-country-bucketlist', onUpdateCountry)
}

module.exports = {
  addHandlers
}
