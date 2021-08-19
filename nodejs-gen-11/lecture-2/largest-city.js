// dadena e grupa od gradovi
// ispecatete go imeto i najdobriot fudbalski klub vo gradot
// so najmnogu ziteli

module.exports = (cities) => {
  let max = 0
  let memoIndex = 0

  for(let i = 0; i < cities.length; i++) {
    if(max < Number.parseInt(cities[i].population)){
      max = cities[i].population
      memoIndex = i
    }
  }

  return cities[memoIndex]
}
