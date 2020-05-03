import React, { useState } from 'react';

import { useGraph } from '../hooks/useGraph';
import { useCountries } from '../hooks/useCountries';
import CountriesTable from '../components/CountriesTable';
import Header from '../components/Header';
import Map from '../components/Map';
import CountriesStatuses from '../components/CountriesStatuses';
import { Spinner } from 'evergreen-ui';
import Graph from '../components/Graph';

const Home: React.FC = () => {
    const [selectedCountry, setSelectedCountry] = useState<string>('');
    const { coronaStats, loading } = useCountries();
    const { graphInfo, loading: graphLoading } = useGraph(selectedCountry);

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
                    <Graph loading={graphLoading} graphInfo={graphInfo} />
                </div>
                )}
        </>
    )
}

export default Home;