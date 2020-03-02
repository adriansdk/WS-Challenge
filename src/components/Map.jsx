import React, { useEffect } from "react";
import '../styles/Map.scss'

const Map = props => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = process.env.PUBLIC_URL + "/sdk/tomtom.min.js";
    document.body.appendChild(script);
    script.async = true;
    script.onload = function() {
      window.tomtom.L.map("map", {
        source: "vector",
        key: props.apiKey,
        center: [37.769167, -122.478468],
        basePath: "/sdk",
        zoom: 15
      });
    };
  });

  return (
    <div>
      <div id="map"></div>
    </div>
  );
};

export default Map;
