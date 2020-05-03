import React, { useState } from 'react';

import { useCountries } from '../hooks/useCountries';
import CountriesTable from '../components/CountriesTable';
import Header from '../components/Header';
import Map from '../components/Map';
import CountriesStatuses from '../components/CountriesStatuses';
import { Spinner } from 'evergreen-ui';
import Graph from '../components/Graph';
import { CoronaStatusDto } from '../api/countries';

const Home: React.FC = () => {
    const [selectedCountry, setSelectedCountry] = useState<CoronaStatusDto | null>(null);
    const { coronaStats, loading } = useCountries();

    return (
        <>
            <Header />
            {loading && !coronaStats
                ? <div style={{ height: 800 }} className="cs-d-flex cs-align-items-center cs-justify-content-center"><Spinner size={50} /></div>
                : (<div className="cs-d-flex">
                    <div>
                        <CountriesStatuses stats={coronaStats} />
                        <CountriesTable onSelect={setSelectedCountry}/>
                    </div>
                    <Map stats={coronaStats} />
                    <Graph selectedCountry={selectedCountry} />
                </div>
                )}
        </>
    )
}

export default Home;