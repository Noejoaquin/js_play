(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"node-fetch":3}],2:[function(require,module,exports){
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

},{"./fetch.js":1}],3:[function(require,module,exports){
(function (global){
"use strict";

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[2]);
