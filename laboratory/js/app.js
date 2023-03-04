//Objetivos:

// var hotel = {
//   name: "Barceló",
//   location: "Málaga",
//   img: "https://static.barcelo.com/content/dam/bhg/master/es/hoteles/spain/andalucia/malaga/barcelo-malaga/carrusel/BMAL_INT_84.jpg.bhgimg.optm1100.jpg/1604511181638.jpg",
// };

// document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
// document.getElementById("location-hotel").innerHTML = "Ubicado en " + hotel.location;
// document.getElementById("img-hotel").src = hotel.img;

// var rating = prompt("Puntuación: del 1 al 5");
// document.getElementById("rating").innerHTML = rating + " estrellas";

// var anonymous = confirm("¿Quiere que la reseña sea anónima?");
// document.getElementById("anonymous").checked = anonymous;


//Opcional:

var hoteles = {
  Barceló: {
    name: "Barceló",
    location: "Málaga",
    img: "https://img.ev.mu/images/hotels/150987/600x400/561291.jpg",
  },
  Ibis: {
    name: "Ibis",
    location: "Málaga",
    img: "https://www.ahstatic.com/photos/3674_ho_00_p_1024x768.jpg",
  },   
};

var selectedHotel = prompt("Indique el nombre del hotel sobre el que quiere hacer la reseña: Barceló o Ibis");

document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[selectedHotel].name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[selectedHotel].location;
document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

var stars = {
  1 :
    "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  2 :
    "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  3 :
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
  4 :
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
  5 :
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};


var rating = prompt("¿Cuántas estrellas del 1 al 5?");
document.getElementById("rating").innerHTML = stars[rating];

var anonymous = confirm("¿Quiere que la reseña sea anónima?");
document.getElementById("anonymous").checked = anonymous;
