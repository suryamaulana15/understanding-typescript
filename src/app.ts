import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_MAPS_API_KEY = 'AIzaSyD6QfO3BDePzyxvNjlBR5IXUDiCaRB5DWY';

type GoogleGeoCodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: 'OK' | 'ZERO_RESULTS';
};

// declare var google: any;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get<GoogleGeoCodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${enteredAddress}&key=${GOOGLE_MAPS_API_KEY}`
    )
    .then((res) => {
      if (res.data.status !== 'OK') {
        throw Error('Could not fetch location!');
      }
      console.log(res);
      const coordinates = res.data.results[0].geometry.location;
      console.log(coordinates);

      const map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          center: coordinates,
          zoom: 16,
        }
      );

      new google.maps.Marker({ position: coordinates, map: map });
    })
    .catch((err) => console.log(err));
  console.log(enteredAddress);
}

form.addEventListener('submit', searchAddressHandler);
