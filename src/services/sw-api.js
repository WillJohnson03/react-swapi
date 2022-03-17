const baseUrl = 'https://swapi.dev'

export function getAllStarships(){
  return fetch(`${baseUrl}/api/starships`)
  .then(res => res.json())
}

// fetch to https://www.swapi.dev/api/starships/:starship
export function getDetails(apiUrl) {
  return fetch(`${apiUrl}`)
  .then(res => res.json())
}