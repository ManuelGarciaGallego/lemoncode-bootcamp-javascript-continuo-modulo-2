// var nameHotel = prompt('Introduce el nombre del hotel');
// document.getElementById('hotel-name').innerHTML = 'Hotel ' + nameHotel;

// var locationHotel = prompt('Introduce la ubicación del hotel');
// document.getElementById('hotel-location').innerHTML = locationHotel;

var hotel = {
  name: '',
  location: '',
};

// hotel.name = prompt('Introduce el nombre del hotel');
// document.getElementById('hotel-name').innerHTML = 'Hotel ' + hotel.name

// hotel.location = prompt('Introduce la ubicación del hotel');
// document.getElementById('hotel-location').innerHTML = hotel.location


//Notación de corchetes:

hotel.name = prompt('Introduce el nombre del hotel');
document.getElementById('hotel-name').innerHTML = 'Hotel ' + hotel['name']

hotel.location = prompt('Introduce la ubicación del hotel');
document.getElementById('hotel-location').innerHTML = hotel['location']