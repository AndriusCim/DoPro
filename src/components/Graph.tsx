import React from "react";

import { Line } from "react-chartjs-2";
import { Heading, toaster } from "evergreen-ui";

import { CoronaStatus } from "../api/countries";
import { roundNumbers } from "../model/model";
import { useGraph } from "../hooks/useGraph";
import Spin from "./Spin";

interface Props {
  selectedCountry: CoronaStatus | null;
}

const Graph: React.FC<Props> = ({ selectedCountry }) => {
  const { confirmedCases, confirmedDeaths, error, loading } = useGraph(
    selectedCountry?.countryName || ""
  );

  if (!selectedCountry) {
    return null;
  }

  if (!confirmedCases || !confirmedDeaths || loading) {
    return (
      <div style={{ width: 1000 }}>
        <Spin />
      </div>
    );
  }

  if (error) {
    toaster.danger("Something went wrong");
  }

  return (
    <div style={{ width: 1000 }}>
      <div className="cs-d-flex cs-align-items-center cs-justify-content-center cs-py-lg">
        <Heading size={900}>
          <img
            className="cs-mr-md"
            height={35}
            src={selectedCountry.countryInfo.flag}
          />
          {selectedCountry.countryName}
        </Heading>
      </div>
      <div className="cs-p-md cs-d-flex cs-justify-content-space-between">
        <div className="cs-text-center">
          <Heading size={500}>Confirmed Cases</Heading>
          <Heading size={600}>
            <span className="cs-color-green">
              {roundNumbers(selectedCountry.cases)}
            </span>
          </Heading>
        </div>
        <div className="cs-text-center">
          <Heading size={500}>Deaths</Heading>
          <Heading size={600}>
            <span className="cs-color-green">
              {roundNumbers(selectedCountry.deaths)}
            </span>
          </Heading>
        </div>
        <div className="cs-text-center">
          <Heading size={500}>Recovered</Heading>
          <Heading size={600}>
            <span className="cs-color-green">
              {roundNumbers(selectedCountry.recovered)}
            </span>
          </Heading>
        </div>
      </div>
      <div className="cs-p-md cs-d-flex cs-justify-content-space-between">
        <div className="cs-text-center">
          <Heading size={500}>New Cases</Heading>
          <Heading size={600}>
            <span className="cs-color-green">
              {roundNumbers(selectedCountry.todayCases)}
            </span>
          </Heading>
        </div>
        <div className="cs-text-center">
          <Heading size={500}>New Deaths</Heading>
          <Heading size={600}>
            <span className="cs-color-green">
              {roundNumbers(selectedCountry.todayDeaths)}
            </span>
          </Heading>
        </div>
        <div className="cs-text-center">
          <Heading size={500}>Tests</Heading>
          <Heading size={600}>
            <span className="cs-color-green">
              {roundNumbers(selectedCountry.tests)}
            </span>
          </Heading>
        </div>
      </div>
      <div className="cs-p-sm">
        <Line data={confirmedCases} />
      </div>
      <div className="cs-p-sm">
        <Line data={confirmedDeaths} />
      </div>
    </div>
  );
};

export default Graph;
