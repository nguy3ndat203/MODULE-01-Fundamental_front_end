const original = {
  name: 'Bob',
  age: 30
}

const copy = JSON.parse(JSON.stringify(original))

original.address.city = 'Los Angeles'

copy.name = 'Charlie'

console.log(original)
console.log(copy)
