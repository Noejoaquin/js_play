// console.log("hello")


function soundMaker(sound, times) {

  function makeSound() {
    console.log(`${sound}`)
  }

  for(let i = 0; i < times; i++) {
    makeSound()
  }
}


// soundMaker("woofy", 5)

Array.prototype.myUniq = function() {
  let newArray = []
  let set = new Set()
  console.log("here!!!!")
  for(let i = 0; i < this.length; i++) {
    if(set.has(this[i])) {
      continue;
    } else {
      newArray.push(this[i])
      set.add(this[i])
    }
  }
  return newArray
}

Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i])
  }
}

Array.prototype.myMap = function(callback) {
  let res = []
  this.myEach(el => {
    res.push(callback(el))
  })
  return res
}


Array.prototype.myReduce = function(callback, initialVal) {
  let acc = initialVal || this[0]
  this.myEach(el => {
    acc = callback(acc, el)
  })
  return acc
}

[1,2,3].myReduce((a, e) => a + e, 5)

function myRange(start, end) {
  if(end < start) {
    return []
  }
  let range = myRange(start, end - 1)
  range.push(end)
  return range
}

function sumRecursion(arr) {
  if(arr.length === 1) return arr[0];

  return sumRecursion(arr.slice(1)) + arr[0]
}

function bsearch(arr,target) {
  const mid = Math.floor(arr.length / 2)
  const midElement = arr[mid]
  console.log(arr, 'array')
  console.log(mid, 'mid')
  console.log(midElement, 'midelement')

  if(target === midElement) {
    return target
  } else if (target < midElement) {
    return bsearch(arr.slice(0, mid - 1), target)
  } else if(target > midElement) {
    return bsearch(arr.slice(mid + 1), target)
  } else {
    return -1
  }
}
