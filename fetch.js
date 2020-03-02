const fetch = require("node-fetch")

module.exports = {
  fetchUsers: () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => displayData(data))
    },
  fetchUserInfo: (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => createPopUp(data, id))
  }
}

const displayData = data => {
  console.log(data)
  data.forEach(datum => {
    let node = document.createElement("LI")
    node.value = datum.id
    node.id = datum.id
    let textNode = document.createTextNode(`${datum.name}`)
    node.appendChild(textNode)
    document.getElementById('userList').appendChild(node)
  })
}

const createPopUp = (data, id) => {
  console.log(data)
  let parent = document.getElementById(id)
  let node = document.createElement("SPAN")
  let textNode = document.createTextNode(
    `phone number: ${data.phone},
     email: ${data.email},
     website: ${data.website}`
  )
  node.appendChild(textNode)
  parent.appendChild(node)
}
