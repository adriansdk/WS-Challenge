import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

function Map(props) {
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        localStorage.setItem("lat", pos.lat);
        localStorage.setItem("lng", pos.lng);
      });
    } else {
      handleLocationError();
    }
  });

  useEffect(() => {
    let lat = localStorage.getItem("lat");
    let lng = localStorage.getItem("lng");
    let map = L.map("map", {
      center: [lat, lng],
      zoom: 16,
      zoomControl: false
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      detectRetina: true,
      maxZoom: 20,
      maxNativeZoom: 17
    }).addTo(map);
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup("Sua localização")
      .openPopup();
  });

  return <Wrapper width="300px" height="300px" id="map"></Wrapper>;
}

export default Map;
