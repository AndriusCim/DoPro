import { CoronaStatusDto } from 'api/countries';

export const useMap = (stats: CoronaStatusDto[] | null) => {

    const geoJson = {
        type: 'FeatureCollection',
        features: stats && stats.map(x => {
            const { lat, long: lng } = x.countryInfo;
            return {
                type: 'Feature',
                properties: {
                    ...x,
                },
                geometry: {
                    type: 'Point',
                    coordinates: [lat, lng]
                }
            }
        })
    }

    return {
        mapData: geoJson,
    }
}