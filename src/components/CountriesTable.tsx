import React from 'react';
import { Table, SearchInput, Spinner, Heading, Icon } from 'evergreen-ui'
import { useCountries } from '../hooks/useCountries';

interface Props {
    onSelect: (x: string) => void;
}

const CountriesTable: React.FC<Props> = ({onSelect}) => {
    const { coronaStats, loading, onSearch } = useCountries();
    if (!coronaStats || loading) {
        return (
            <div style={{ height: 730 }} className="cs-d-flex cs-align-items-center cs-justify-content-center"><Spinner size={50} /></div>
        );
    }

    return (
        <div>
            <div className="cs-m-sm">
                <SearchInput placeholder="Filter country" width="100%" onChange={(e: any) => onSearch(e.target.value)} />
            </div>
            <Table>
                <Table.Head>
                    <Table.TextHeaderCell>
                        Country
                </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                        Confirmed
    </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                        Recovered
    </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                        Deaths
    </Table.TextHeaderCell>
                </Table.Head>
                <Table.Body height={730}>
                    {coronaStats.map(x => (
                        <Table.Row isSelectable onSelect={() => onSelect(x.country)} key={x.country}>
                            <Table.TextCell><img title={x.country} height={20} src={x.countryInfo.flag} /></Table.TextCell>
                            <Table.TextCell>{x.cases}</Table.TextCell>
                            <Table.TextCell>{x.recovered}</Table.TextCell>
                            <Table.TextCell>{x.deaths}</Table.TextCell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            <div className="footer">
                <Heading size={300}><div className="cs-d-flex cs-align-items-center cs-color-white cs-p-md cs-justify-content-center">
                    <Icon className="cs-pr-sm" icon="info-sign" />Select country to see more details</div>
                </Heading>
            </div>
        </div>
    );
}

export default CountriesTable;