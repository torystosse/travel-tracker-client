'use strict'

const store = require('../store')

const onSuccess = message => {
  $('#user-message')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#user-message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  $('form').trigger('reset')
}

const onSignUpSuccess = () => {
  onSuccess('You successfully signed up. Now, sign in.')
}

const onSignUpFailure = () => {
  onFailure('Uh oh... something went wrong! Try again.')
}

const onSignInSuccess = responseData => {
  store.user = responseData.user
  onSuccess('You successfully signed in.')
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
  onFailure('Uh oh... something went wrong! Try again.')
}

const onChangePasswordSuccess = () => {
  onSuccess('You successfully changed your password.')
}

const onChangePasswordFailure = () => {
  onFailure('Uh oh... something went wrong! Try again.')
}

const onSignOutSuccess = () => {
  onSuccess('You successfully signed out.')
  // below, the store no longer knows who we are. delete the token.
  store.user = {}
  $('.before-auth').show()
  $('.after-auth').hide()
  $('.first-create').hide()
  $('.view-button').hide()
  $('.initial-add-button').hide()
  $('.update-tracker-button').hide()
  $('.country-tracker').hide()

  $('.first-create-bucketlist').hide()
  $('.view-button-bucketlist').hide()
  $('.initial-add-button-bucketlist').hide()
  $('.update-tracker-button-bucketlist').hide()
  $('.country-tracker-bucketlist').hide()
  // console.log('everything is hidden')
}

const onSignOutFailure = () => {
  onFailure('Uh oh... something went wrong! Try again.')
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
