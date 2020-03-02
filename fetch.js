const fetch = require("node-fetch")

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => logData(data))

const variable = 1

const logData = data => {
  // console.log(data);
  console.log(data)
  data.forEach(datum => {
    console.log(datum)
    let node = document.createElement("LI")
    let textNode = document.createTextNode(`${datum.name}`)
    node.appendChild(textNode)
    document.getElementById('users').appendChild(node)
  })
}
