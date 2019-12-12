'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateTracker = event => {
  event.preventDefault()

  // go to UI to show the form to create the tracker

  // api.createTracker()
  //   .then(console.log)
  //   .catch(console.error)
}

const onAddTravels = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  // console.log('form data is' + formData)

  api.addTravels(formData)
    .then(console.log)
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

  api.updateCountry(countryId, formData)
    .then(function () {
      onViewTravels(event)
    })
    .catch(console.error)
}

const addHandlers = event => {
  $('.first-create').on('click', onCreateTracker)
  $('#create-tracker').on('submit', onAddTravels)
  $('.view-countries').on('click', onViewTravels)
  $('#update-tracker').on('submit', onAddTravels)
  $('.country-tracker').on('click', '.delete-country', onDeleteCountry)
  $('.country-tracker').on('submit', '.update-country', onUpdateCountry)
}

module.exports = {
  addHandlers
}
