'use strict'

const store = require('../store')

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

const onSignUpSuccess = () => {
  onSuccess('Thanks for signing up! Now, sign in.')
}

const onSignUpFailure = () => {
  onFailure('Oh no... something went wrong! Try again.')
}

const onSignInSuccess = responseData => {
  store.user = responseData.user
  onSuccess('Welcome back!')
  $('.change-pw').show()
  $('#sign-out').show()
  // $('.after-auth').show()
  $('.first-create').show()
  $('.view-button').show()
  $('.first-create-bucketlist').show()
  $('.view-button-bucketlist').show()
  $('.first-create-button').show()
  $('.first-create-button-bucketlist').show()
  $('.before-auth').hide()
}
// below does not work, but the idea is... if the user does not have visited
// countries, then show option to create the tracker. If user does have visited
// countries, then do not show option to create the tracker.

//   if (store.user.visited_countries === {}) {
//     console.log('there are no countries here')
//     $('.first-create-button').show()
//   } else {
//     console.log('there are indeed countries here')
//     console.log(store)
//     $('.first-create-button').hide()
//   }
// }

const onSignInFailure = () => {
  onFailure('Oh no... something went wrong! Try again.')
}

const onChangePasswordSuccess = () => {
  onSuccess('Password changed.')
}

const onChangePasswordFailure = () => {
  onFailure('Oh no... something went wrong! Try again.')
}

const onSignOutSuccess = () => {
  onSuccess('Come back soon!')
  // below, the store no longer knows who we are. delete the token.
  store.user = {}
  $('.before-auth').show()
  $('.after-auth').hide()
  $('.first-create').hide()
  $('.view-button').hide()
  $('.initial-add-button').hide()
  $('.update-tracker-button').hide()
  $('.country-tracker').hide()
  $('#country-count').hide()

  $('.first-create-bucketlist').hide()
  $('.view-button-bucketlist').hide()
  $('.initial-add-button-bucketlist').hide()
  $('.update-tracker-button-bucketlist').hide()
  $('.country-tracker-bucketlist').hide()
  // console.log('everything is hidden')
}

const onSignOutFailure = () => {
  onFailure('Oh no... something went wrong! Try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
