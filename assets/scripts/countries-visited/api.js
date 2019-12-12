'use strict'

const config = require('../config')
const store = require('../store')

const addTravels = formData => {
  return $.ajax({
    url: config.apiUrl + '/visited_countries',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const viewTravels = () => {
  return $.ajax({
    url: config.apiUrl + '/visited_countries',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const deleteCountry = id => {
  return $.ajax({
    url: config.apiUrl + '/visited_countries/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateCountry = (id, formData) => {
  return $.ajax({
    url: config.apiUrl + '/visited_countries/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

// const addTravels = (country, year) => {
//   return $.ajax({
//     url: config.apiUrl + '/visited_countries',
//     method: 'POST',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     data: {
//       visited_country: {
//         country: country,
//         year: year,
//         user_id: `user_id=${store.user.id}`
//       }
//     }
//   })
// }

module.exports = {
  addTravels,
  viewTravels,
  deleteCountry,
  updateCountry
}
