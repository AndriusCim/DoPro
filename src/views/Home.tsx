import React from 'react';

import { Table, Input } from 'antd';

import { countryInfo } from '../api/countries';
import { useCountries } from '../hooks/useCountries';

const Home: React.FC = () => {
    const { coronaStats, loading, onSearch } = useCountries();
    const columns = [
        {
            title: 'Flag',
            dataIndex: 'countryInfo',
            key: 'countryInfo',
            render: ((x: countryInfo) => (<img style={{ width: 30 }} src={x.flag} />))
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'Cases',
            dataIndex: 'cases',
            key: 'cases',
        },
        {
            title: 'Deaths',
            dataIndex: 'deaths',
            key: 'deaths',
        },
        {
            title: 'Recovered',
            dataIndex: 'recovered',
            key: 'recovered',
        },
        {
            title: 'Today Deaths',
            dataIndex: 'todayDeaths',
            key: 'todayDeaths',
        },
        {
            title: 'Today Cases',
            dataIndex: 'todayCases',
            key: 'todayCases',
        },
        {
            title: 'Tests per one million',
            dataIndex: 'testsPerOneMillion',
            key: 'testsPerOneMillion',
        },
        {
            title: 'Tests',
            dataIndex: 'tests',
            key: 'tests',
        },
        {
            title: 'Deaths per one million',
            dataIndex: 'deathsPerOneMillion',
            key: 'deathsPerOneMillion',
        }
    ];

    return (
        <>
            <Input.Search onSearch={onSearch} />
            <Table dataSource={coronaStats} loading={loading} columns={columns} />;
        </>
    )
}

export default Home;