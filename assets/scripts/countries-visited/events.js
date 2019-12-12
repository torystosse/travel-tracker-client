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

  console.log('form data is' + formData)

  api.addTravels(formData)
    .then(console.log)
    .catch(console.error)
}

const onViewTravels = event => {
  event.preventDefault()
  console.log('button click worked!')

  api.viewTravels()
    .then(ui.getTravelsSuccess)
    .catch(ui.failure)
}

const addHandlers = event => {
  $('.first-create').on('click', onCreateTracker)
  $('#create-tracker').on('submit', onAddTravels)
  $('.view-countries').on('click', onViewTravels)
}

module.exports = {
  addHandlers
}
