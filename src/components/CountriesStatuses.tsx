import React from 'react';
import { CoronaStatusDto } from 'api/countries';
import { Heading } from 'evergreen-ui';

interface Props {
    stats: CoronaStatusDto[] | null
}

const CountriesStatuses: React.FC<Props> = ({ stats }) => {
    if (!stats) {
        return null;
    }

    const sumCases = stats
        .map(item => item.cases)
        .reduce((prev, curr) => prev + curr, 0);

    const sumDeaths = stats
        .map(item => item.deaths)
        .reduce((prev, curr) => prev + curr, 0);

    const sumRecovered = stats
        .map(item => item.recovered)
        .reduce((prev, curr) => prev + curr, 0);


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
        <div style={{ width: 300 }} className="cs-p-md cs-d-flex cs-justify-content-space-between">
            <div className="cs-text-center">
                <Heading size={600}> Confirmed</Heading>
                <Heading size={700}><span className="cs-color-green">{round(sumCases)}</span></Heading>
            </div>
            <div className="cs-text-center">
                <Heading size={600}>Death</Heading>
                <Heading size={700}><span className="cs-color-green">{round(sumDeaths)}</span></Heading>
            </div>
            <div className="cs-text-center">
                <Heading size={600}>Recovered</Heading>
                <Heading size={700}><span className="cs-color-green">{round(sumRecovered)}</span></Heading>
            </div>
        </div >
    );
}

export default CountriesStatuses;