import React, { useState } from "react";
import { toaster } from "evergreen-ui";

import { CoronaStatus } from "../api/countries";
import { useCountries } from "../hooks/useCountries";
import CountriesStatuses from "../components/CountriesStatuses";
import CountriesTable from "../components/CountriesTable";
import Header from "../components/Header";
import Map from "../components/Map";
import Graph from "../components/Graph";
import Spin from '../components/Spin';

const Home: React.FC = () => {
  const [selectedCountry, setSelectedCountry] =useState<CoronaStatus | null>(null);
  const { coronaStats, loading, error } = useCountries();

  if (error) {
    toaster.danger("Something went wrong");
  }

  return (
    <>
      <Header />
      {loading && !coronaStats ? (
        <div
          style={{ height: 800 }}
        >
          <Spin />
        </div>
      ) : (
        <div className="cs-d-flex">
          <div>
            <CountriesStatuses stats={coronaStats} />
            <CountriesTable onSelect={setSelectedCountry} />
          </div>
          <Map stats={coronaStats} />
          <Graph selectedCountry={selectedCountry} />
        </div>
      )}
    </>
  );
};

export default Home;
