// dadena e niza od broevi
// ispecati go najgolemiot broj

let numbers = [5, 10, 4, 3, 8, 11, -15, 13]

const cities = [
  {
    name: 'Barcelona',
    best_club: 'CF Barcelona',
    population: '120305631'
  },
  {
    name: 'London',
    best_club: 'Arsenal',
    population: '120305333'
  },
  {
    name: 'Madrid',
    best_club: 'Atletico',
    population: '120305633'
  },
  {
    name: 'Valencia',
    best_club: 'Valencia CF',
    population: '120305644'
  },
  {
    name: 'Rome',
    best_club: 'Roma',
    population: '120303333333'
  }
]

// 1. advanced
// console.log(Math.max(...numbers))

// 2. old but gold
let max = Number.MIN_VALUE

numbers.forEach(currentNumber => {
  if (max < currentNumber) {
    max = currentNumber
  } 
})

console.log(max)

