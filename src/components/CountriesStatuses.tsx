import React from "react";
import { Heading } from "evergreen-ui";

import { CoronaStatus } from "../api/countries";
import { sumNumbers, roundNumbers } from "../model/model";

interface Props {
  stats: CoronaStatus[] | null;
}

const CountriesStatuses: React.FC<Props> = ({ stats }) => {
  if (!stats) {
    return null;
  }

  return (
    <div
      style={{ width: 300 }}
      className="cs-p-md cs-d-flex cs-justify-content-space-between"
    >
      <div className="cs-text-center">
        <Heading size={600}>Confirmed</Heading>
        <Heading size={700}>
          <span className="cs-color-green">
            {roundNumbers(sumNumbers(stats.map(x => x.cases)))}
          </span>
        </Heading>
      </div>
      <div className="cs-text-center">
        <Heading size={600}>Deaths</Heading>
        <Heading size={700}>
          <span className="cs-color-green">
            {roundNumbers(sumNumbers(stats.map(x => x.deaths)))}
          </span>
        </Heading>
      </div>
      <div className="cs-text-center">
        <Heading size={600}>Recovered</Heading>
        <Heading size={700}>
          <span className="cs-color-green">
            {roundNumbers(sumNumbers(stats.map(x => x.recovered)))}
          </span>
        </Heading>
      </div>
    </div>
  );
};

export default CountriesStatuses;
