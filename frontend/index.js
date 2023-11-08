async function moduleProject4() {

  // 👇 WORK WORK BELOW THIS LINE 👇
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  let descriptions = [
    ["Sunny", "☀️"],
    ["Cloudy", "☁️"],
    ["Rainy", "🌧️"],
    ["Thunderstorm", "⛈️"],
    ["Snowy", "❄️"],
    ["Partly Cloudy", "⛅️"]
  ]

  // 👉 Tasks 1 - 5 go here
// Task 1
document.getElementById('weatherWidget').style.display = 'none';

const cityDropdown = document.getElementById('cityDropdown');

// Task 2 and Task 3
cityDropdown.addEventListener('change', (event) => {
  // Task 3
  cityDropdown.disabled = true;
  document.getElementById('weatherWidget').style.display = 'none';
  document.querySelector('p.info').textContent = 'Fetching weather data...';

  // Task 4
  axios.get(`http://localhost:3003/api/weather?city=${encodeURIComponent(event.target.value)}`)
    .then(response => {
      // Task 5
      const weatherData = response.data;
      document.querySelector('p.info').textContent = '';
      cityDropdown.disabled = false;
      document.getElementById('weatherWidget').style.display = 'block';

      document.getElementById('cityName').textContent = weatherData.name;
      document.getElementById('temperature').textContent = `${weatherData.temperature}°`;
      const weatherDescriptionEmoji = descriptions.find(desc => desc[0] === weatherData.weather_description)[1];
      document.getElementById('weatherDescription').textContent = weatherDescriptionEmoji;
    })
    .catch(error => {
      // Task 4 (Error Handling)
      console.error(error.message);
    });
});

  // 👆 WORK WORK ABOVE THIS LINE 👆

}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()
