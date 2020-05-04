import React from "react";
import ReactDOMServer from "react-dom/server";

import { Pill, Heading } from "evergreen-ui";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import { CoronaStatus } from "../api/countries";
import { roundNumbers } from "../model/model";
import { useMap } from "../hooks/useMap";

interface Props {
  stats: CoronaStatus[] | null;
}

const Map: React.FC<Props> = ({ stats }) => {
  const { geoJson } = useMap(stats);

  const icon = (x: number) =>
    L.divIcon({
      className: "custom-icon",
      html: ReactDOMServer.renderToString(
        <Pill display="inline-flex" color="green" isSolid>
          {roundNumbers(x)}
        </Pill>
      )
    });

  return (
    <LeafletMap center={[0, 0]} zoom={4}>
      <TileLayer
        url="https://api.mapbox.com/styles/v1/andriuscim/ck9rbeuag2vyl1ilex3nm8cev/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5kcml1c2NpbSIsImEiOiJjazlyOXdybmQwNnN2M2VvYmtkOWtqaXNuIn0.k5MmDcrLBu93DfRj9CZXzw"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      {geoJson.features &&
        geoJson.features.map(x => (
          <Marker
            key={x.properties.countryName}
            icon={icon(x.properties.cases)}
            position={[x.geometry.coordinates[0], x.geometry.coordinates[1]]}
          >
            <Popup>
              <div>
                <Heading size={500}>
                  <img
                    className="cs-pr-sm"
                    height={10}
                    src={x.properties.countryInfo.flag}
                  />
                  {x.properties.countryName}
                </Heading>
                <div className="cs-d-flex cs-align-items-center cs-mr-sm">
                  <Heading size={300}>Total Cases: </Heading>
                  <Heading size={400}>
                    <span className="cs-color-green cs-pl-sm">
                      {roundNumbers(x.properties.cases)}
                    </span>
                  </Heading>
                </div>
                <div className="cs-d-flex cs-align-items-center cs-mr-sm">
                  <Heading size={300}>Total Deaths: </Heading>
                  <Heading size={400}>
                    <span className="cs-color-green cs-pl-sm">
                      {roundNumbers(x.properties.deaths)}
                    </span>
                  </Heading>
                </div>
                <div className="cs-d-flex cs-align-items-center cs-mr-sm">
                  <Heading size={300}>Recovered: </Heading>
                  <Heading size={400}>
                    <span className="cs-color-green cs-pl-sm">
                      {roundNumbers(x.properties.recovered)}
                    </span>
                  </Heading>
                </div>
                <div className="cs-d-flex cs-align-items-center cs-mr-sm">
                  <Heading size={300}>Tests: </Heading>
                  <Heading size={400}>
                    <span className="cs-color-green cs-pl-sm">
                      {roundNumbers(x.properties.tests)}
                    </span>
                  </Heading>
                </div>
                <div className="cs-d-flex cs-align-items-center cs-mr-sm">
                  <Heading size={300}>Today Cases: </Heading>
                  <Heading size={400}>
                    <span className="cs-color-green cs-pl-sm">
                      {roundNumbers(x.properties.todayCases)}
                    </span>
                  </Heading>
                </div>
                <div className="cs-d-flex cs-align-items-center cs-mr-sm">
                  <Heading size={300}>New Deaths:</Heading>
                  <Heading size={400}>
                    <span className="cs-color-green cs-pl-sm">
                      {roundNumbers(x.properties.todayDeaths)}
                    </span>
                  </Heading>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
    </LeafletMap>
  );
};

export default Map;
