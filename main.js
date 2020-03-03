const fetchAPI = require('./fetch.js')


fetchAPI.fetchUsers()

let open = new Set()

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('userList').addEventListener('click', function(e) {
    const userId = e.target.value
    if(open.has(userId)) {
      let li = document.getElementById(`${userId}`)
      closeInfo(li)
      open.delete(userId)
    } else {
      fetchAPI.fetchUserInfo(e.target.value)
      open.add(userId)
    }
  })

  function closeInfo(li) {
    li.removeChild(li.lastChild)
  }
})
