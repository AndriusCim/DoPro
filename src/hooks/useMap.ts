import { CoronaStatus } from "api/countries";

export const useMap = (coronaStats: CoronaStatus[] | null) => {
  const geoJson = {
    type: "FeatureCollection",
    features:
      coronaStats &&
      coronaStats.map(x => {
        return {
          type: "Feature",
          properties: { ...x },
          geometry: {
            type: "Point",
            coordinates: [x.countryInfo.lat, x.countryInfo.lng]
          }
        };
      })
  };

  return {
    geoJson
  };
};
