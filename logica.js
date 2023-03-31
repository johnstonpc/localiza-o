const url = 'https://ipapi.co/json/';

// Faz uma requisição GET para o serviço de geolocalização de IP
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Extrai as informações de localização do objeto retornado
    const city = data.city;
    const region = data.region;
    const country = data.country_name;
    const latitude = data.latitude;
    const longitude = data.longitude;

    // Imprime as informações de localização no console
    console.log(`Localização: ${city}, ${region}, ${country}`);
    console.log(`Latitude: ${latitude}`);
    console.log(`Longitude: ${longitude}`);

    document.getElementById('latitude').innerHTML += latitude
    document.getElementById('longitude').innerHTML += longitude
    document.getElementById('cidade').innerHTML += city
    document.getElementById('região').innerHTML += region
  })
  .catch(error => console.error(error));
  
