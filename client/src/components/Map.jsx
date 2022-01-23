// import React, { useEffect } from "react";

// const Map = () => {
//   let map;
//   let service;
//   let infoWindow;
//   const google = window.google;

//   const getHospitalDetails = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const pos = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         };
//         console.log(window.google);
//         var pyrmont = new window.google.maps.LatLng(pos);
//         // map = new google.maps.Map(document.getElementById("map"), {
//         //   center: pyrmont,
//         //   zoom: 15,
//         // });
//         var request = {
//           location: pyrmont,
//           radius: "7000",
//           type: ["hospital"],
//         };
//         service = new google.maps.places.PlacesService(map);
//         service.nearbySearch(request, callback);

//         infoWindow = new google.maps.InfoWindow();
//         infoWindow.setPosition(pos);
//         infoWindow.setContent("Location found.");
//         infoWindow.open(map);
//         map.setCenter(pos);
//       });
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter());
//     }
//   };

//   function callback(results, status) {
//     if (status === google.maps.places.PlacesServiceStatus.OK) {
//       for (var i = 0; i < results.length; i++) {
//         console.log(results[i]);
//         createMarker(results[i]);
//       }
//     }
//   }

//   function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(
//       browserHasGeolocation
//         ? "Error: The Geolocation service failed."
//         : "Error: Your browser doesn't support geolocation."
//     );
//     infoWindow.open(map);
//   }

//   function createMarker(place) {
//     if (!place.geometry || !place.geometry.location) return;

//     const marker = new google.maps.Marker({
//       map,
//       position: place.geometry.location,
//     });

//     google.maps.event.addListener(marker, "click", () => {
//       infoWindow.setContent(place.name || "");
//       infoWindow.open(map);
//     });
//   }

//   return (
//     <div>
//       Emergency Hospital
//       <button onClick={getHospitalDetails}>Send SOS</button>
//     </div>
//   );
// };

// export default Map;

// // // This example requires the Places library. Include the libraries=places
// // // parameter when you first load the API. For example:
// // // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
// // let map;
// // let service;
// // let infoWindow;

// // function initMap() {
// //     // Try HTML5 geolocation.
// //     if (navigator.geolocation) {
// //       navigator.geolocation.getCurrentPosition(
// //         (position) => {
// //           const pos = {
// //             lat: position.coords.latitude,
// //             lng: position.coords.longitude,
// //           };

// //         var pyrmont = new google.maps.LatLng(pos);
// //         map = new google.maps.Map(document.getElementById('map'), {
// //             center: pyrmont,
// //             zoom: 15
// //             });
// //         var request = {
// //             location: pyrmont,
// //             radius: '7000',
// //             type: ['hospital']
// //         };
// //         service = new google.maps.places.PlacesService(map);
// //         service.nearbySearch(request, callback);

// //         infoWindow = new google.maps.InfoWindow();
// //         infoWindow.setPosition(pos);
// //         infoWindow.setContent("Location found.");
// //         infoWindow.open(map);
// //         map.setCenter(pos);
// //         }
// //       );
// //     } else {
// //       // Browser doesn't support Geolocation
// //       handleLocationError(false, infoWindow, map.getCenter());
// //     }

// // }

// // function callback(results, status) {
// //   if (status == google.maps.places.PlacesServiceStatus.OK) {
// //     for (var i = 0; i < results.length; i++) {
// //       console.log(results[i]);
// //       createMarker(results[i]);
// //     }
// //   }
// // }

// // function createMarker(place) {
// //   if (!place.geometry || !place.geometry.location) return;

// //   const marker = new google.maps.Marker({
// //     map,
// //     position: place.geometry.location,
// //   });

// //   google.maps.event.addListener(marker, "click", () => {
// //     infoWindow.setContent(place.name || "");
// //     infoWindow.open(map);
// //   });
// // }

// // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
// //     infoWindow.setPosition(pos);
// //     infoWindow.setContent(
// //       browserHasGeolocation
// //         ? "Error: The Geolocation service failed."
// //         : "Error: Your browser doesn't support geolocation."
// //     );
// //     infoWindow.open(map);
// //   }
