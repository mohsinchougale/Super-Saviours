import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "http://localhost:5000/police";
const numberURL =
  "https://maps.googleapis.com/maps/api/place/details/json?place_id=";

const Police = () => {
  const [policeStations, setPoliceStations] = useState([]);
  const [numbers, setNumbers] = useState("");
  let pos;

  useEffect(() => {
    console.log("a");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    }
    console.log("b");
  }, []);

  // useEffect(() => {
  //   console.log("c");
  //   axios.get(`${baseURL}/${pos?.lat}/${pos?.lng}`).then((res) => {
  //     setPoliceStations(res.data.results);
  //   });

  //   console.log("d");
  // }, [pos]);

  const getPoliceStations = () => {
    axios.get(`${baseURL}/${pos?.lat}/${pos?.lng}`).then((res) => {
      setPoliceStations(res.data.results);
    });
  };

  const getNumbers = (placeId) => {
    for (var i = 0; i < 5; i++) {
      console.log(policeStations[i].place_id);
      axios.get(`${numberURL}${policeStations[i].place_id}`).then((res) => {
        console.log("c");
        console.log(res.data);
      });
    }
  };

  return (
    <div>
      <button onClick={getPoliceStations}>Send SOS</button>
      <button onClick={getNumbers}>Get Numbers</button>
      <div className="display__policeStaions">
        {policeStations.map((policeStation) => (
          <li key={policeStation.place_id}>{policeStation.name}</li>
        ))}
      </div>
    </div>
  );
};

export default Police;
