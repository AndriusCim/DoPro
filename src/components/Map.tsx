import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import { useMap } from '../hooks/useMap';
import { CoronaStatusDto } from '../api/countries';
import { Pill, Heading } from 'evergreen-ui';

interface Props {
    stats: CoronaStatusDto[] | null
}

const Map: React.FC<Props> = ({ stats }) => {
    const { mapData } = useMap(stats);

    const round = (num: number) => {
        return Math.abs(Number(num)) >= 1.0e+9

            ? (Math.abs(Number(num)) / 1.0e+9).toFixed(3) + "B"
            // Six Zeroes for Millions 
            : Math.abs(Number(num)) >= 1.0e+6

                ? (Math.abs(Number(num)) / 1.0e+6).toFixed(1) + "M"
                // Three Zeroes for Thousands
                : Math.abs(Number(num)) >= 1.0e+3

                    ? (Math.abs(Number(num)) / 1.0e+3).toFixed() + "K"

                    : Math.abs(Number(num));
    };

    const icon = (x: number) => L.divIcon({
        className: 'custom-icon',
        html: ReactDOMServer.renderToString(<Pill display="inline-flex" color="green" isSolid>{round(x)}</Pill>)
    })

    return (
        <LeafletMap
            center={[0, 0]}
            zoom={4}
        >
            <TileLayer
                url="https://api.mapbox.com/styles/v1/andriuscim/ck9rbeuag2vyl1ilex3nm8cev/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5kcml1c2NpbSIsImEiOiJjazlyOXdybmQwNnN2M2VvYmtkOWtqaXNuIn0.k5MmDcrLBu93DfRj9CZXzw"
                attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
            />
            {mapData.features && mapData.features.map(x =>
                <Marker icon={icon(x.properties.cases)} position={[x.geometry.coordinates[0], x.geometry.coordinates[1]]}>
                    <Popup>
                        <div >
                            <Heading size={500}><img className="cs-pr-sm" height={10} src={x.properties.countryInfo.flag} />{x.properties.country}</Heading>
                            <div className="cs-d-flex cs-align-items-center cs-mr-sm">
                                <Heading size={300}>Total Cases: </Heading>
                                <Heading size={400}><span className="cs-color-green cs-pl-sm">{round(x.properties.cases)}</span></Heading>
                            </div>
                            <div className="cs-d-flex cs-align-items-center cs-mr-sm">
                                <Heading size={300}>Total Deaths: </Heading>
                                <Heading size={400}><span className="cs-color-green cs-pl-sm">{round(x.properties.deaths)}</span></Heading>
                            </div>
                            <div className="cs-d-flex cs-align-items-center cs-mr-sm">
                                <Heading size={300}>Recovered: </Heading>
                                <Heading size={400}><span className="cs-color-green cs-pl-sm">{round(x.properties.recovered)}</span></Heading>
                            </div>
                            <div className="cs-d-flex cs-align-items-center cs-mr-sm">
                                <Heading size={300}>Tests: </Heading>
                                <Heading size={400}><span className="cs-color-green cs-pl-sm">{round(x.properties.tests)}</span></Heading>
                            </div>
                            <div className="cs-d-flex cs-align-items-center cs-mr-sm">
                                <Heading size={300}>Today Cases: </Heading>
                                <Heading size={400}><span className="cs-color-green cs-pl-sm">{round(x.properties.todayCases)}</span></Heading>
                            </div>
                            <div className="cs-d-flex cs-align-items-center cs-mr-sm">
                                <Heading size={300}>New Deaths:</Heading>
                                <Heading size={400}><span className="cs-color-green cs-pl-sm">{round(x.properties.todayDeaths)}</span></Heading>
                            </div>
                        </div >
                    </Popup>
                </Marker>
            )}

        </LeafletMap>
    );
}

export default Map;