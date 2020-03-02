const animal = (species, name) => {
  let _species = species;
  let _name = name

  return {
    name: () => _name,
    species: () => _species,
  }
}

let jacks = animal('dog', 'jacks')

console.log(jacks.name())
console.log(jacks.species())
console.log(jacks._name)
