const fetchAPI = require('./fetch.js')


fetchAPI.fetchUsers()

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('userList').addEventListener('click', function(e) {
    console.log(e.target.value)
    fetchAPI.fetchUserInfo(e.target.value)
  })
})
