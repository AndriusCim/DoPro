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
      <div className="cs-d-flex">
        <div className="cs-pl-sm cs-d-flex cs-align-items-center cs-justify-content-center cs-flex-column cs-py-lg">
          <img
            className="cs-mb-md"
            height={50}
            src={selectedCountry.countryInfo.flag}
          />
          <Heading size={900}>{selectedCountry.countryName}</Heading>
          <Heading marginTop="8px" size={300}>
            {selectedCountry.countryInfo.iso}
          </Heading>
        </div>
        <div className="cs-w-100">
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
          <div className="cs-p-md cs-d-flex cs-justify-content-space-between">
            <div className="cs-text-center">
              <Heading size={500}>Deaths per 1M</Heading>
              <Heading size={600}>
                <span className="cs-color-green">
                  {roundNumbers(selectedCountry.deathsPerOneMillion)}
                </span>
              </Heading>
            </div>
            <div className="cs-text-center">
              <Heading size={500}>Tests per 1M</Heading>
              <Heading size={600}>
                <span className="cs-color-green">
                  {roundNumbers(selectedCountry.testsPerOneMillion)}
                </span>
              </Heading>
            </div>
            <div className="cs-text-center">
              <Heading size={500}>Critical</Heading>
              <Heading size={600}>
                <span className="cs-color-green">
                  {roundNumbers(selectedCountry.critical)}
                </span>
              </Heading>
            </div>
          </div>
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
