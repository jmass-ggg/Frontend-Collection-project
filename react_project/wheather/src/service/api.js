const LATITUDE_URL="https://geocoding-api.open-meteo.com"
const WHEATHER_URL="https://api.open-meteo.com"

export const getWheather = async (location) => {
  const response = await fetch(
    `${LATITUDE_URL}/v1/search?name=${encodeURIComponent(location)}&count=1`
  )

  const data = await response.json()
  const place = data.results?.[0]

  if (!place) {
    throw new Error('Country not found')
  }

  const weatherResponse = await fetch(
    `${WHEATHER_URL}/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m`
  )

  if (!weatherResponse.ok) {
    throw new Error('Weather fetch failed')
  }

  return await weatherResponse.json()
}

