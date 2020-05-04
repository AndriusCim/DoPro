import React from "react";
import {
  Table,
  SearchInput,
  Heading,
  Icon,
  toaster
} from "evergreen-ui";

import { CoronaStatus } from "../api/countries";
import { useCountries } from "../hooks/useCountries";
import Spin from "./Spin";

interface Props {
  onSelect: (x: CoronaStatus) => void;
}

const CountriesTable: React.FC<Props> = ({ onSelect }) => {
  const { coronaStats, loading, error, onSearch } = useCountries();
  if (!coronaStats || loading) {
    return <Spin />;
  }

  if (error) {
    toaster.danger("Something went wrong");
  }

  return (
    <>
      <div className="cs-m-sm">
        <SearchInput
          placeholder="Filter country"
          width="100%"
          onChange={(e: any) => onSearch(e.target.value)}
        />
      </div>
      <Table>
        <Table.Head>
          <Table.TextHeaderCell>Country</Table.TextHeaderCell>
          <Table.TextHeaderCell>Confirmed</Table.TextHeaderCell>
          <Table.TextHeaderCell>Recovered</Table.TextHeaderCell>
          <Table.TextHeaderCell>Deaths</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={730}>
          {coronaStats.map(x => (
            <Table.Row
              isSelectable
              onSelect={() => onSelect(x)}
              key={x.countryName}
            >
              <Table.TextCell>
                <img
                  height={20}
                  title={x.countryName}
                  src={x.countryInfo.flag}
                />
              </Table.TextCell>
              <Table.TextCell>{x.cases}</Table.TextCell>
              <Table.TextCell>{x.recovered}</Table.TextCell>
              <Table.TextCell>{x.deaths}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div className="footer">
        <Heading size={300}>
          <div className="cs-d-flex cs-align-items-center cs-color-white cs-p-md cs-justify-content-center">
            <Icon className="cs-pr-sm" icon="info-sign" />
            Select country to see more details
          </div>
        </Heading>
      </div>
    </>
  );
};

export default CountriesTable;
