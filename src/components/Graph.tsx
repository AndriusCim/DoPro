import React from 'react';
import { Line } from 'react-chartjs-2';
import { Heading } from 'evergreen-ui';
import { CoronaStatusDto } from '../api/countries';
import { useGraph } from '../hooks/useGraph';

interface Props {
    selectedCountry: CoronaStatusDto | null;
}

const Graph: React.FC<Props> = ({ selectedCountry }) => {
    const { stateCases, stateDeaths } = useGraph(selectedCountry?.country || '');

    if (!selectedCountry) {
        return null;
    }


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

    return (
        <div style={{ width: 1000 }}>
            <div className="cs-d-flex cs-align-items-center cs-justify-content-center cs-py-lg"><Heading size={900}><img className="cs-mr-md" height={35} src={selectedCountry.countryInfo.flag} />{selectedCountry.country}</Heading></div>
            <div className="cs-p-md cs-d-flex cs-justify-content-space-between">
                <div className="cs-text-center">
                    <Heading size={500}>Confirmed Cases</Heading>
                    <Heading size={600}><span className="cs-color-green">{round(selectedCountry.cases)}</span></Heading>
                </div>
                <div className="cs-text-center">
                    <Heading size={500}>Deaths</Heading>
                    <Heading size={600}><span className="cs-color-green">{round(selectedCountry.deaths)}</span></Heading>
                </div>
                <div className="cs-text-center">
                    <Heading size={500}>Recovered</Heading>
                    <Heading size={600}><span className="cs-color-green">{round(selectedCountry.recovered)}</span></Heading>
                </div>
            </div >
            <div className="cs-p-md cs-d-flex cs-justify-content-space-between">
                <div className="cs-text-center">
                    <Heading size={500}>New Cases</Heading>
                    <Heading size={600}><span className="cs-color-green">{round(selectedCountry.todayCases)}</span></Heading>
                </div>
                <div className="cs-text-center">
                    <Heading size={500}>New Deaths</Heading>
                    <Heading size={600}><span className="cs-color-green">{round(selectedCountry.todayDeaths)}</span></Heading>
                </div>
                <div className="cs-text-center">
                    <Heading size={500}>Tests</Heading>
                    <Heading size={600}><span className="cs-color-green">{round(selectedCountry.tests)}</span></Heading>
                </div>
            </div >
            <div className="cs-p-sm">
                <Line data={stateCases} />
            </div>
            <div className="cs-p-sm">
                <Line data={stateDeaths} />
            </div>
        </div>
    );
}

export default Graph;