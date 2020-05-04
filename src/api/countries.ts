import { useApi } from '../hooks/useApi'

export type StatusCriteria = 'deaths' | 'confirmed'

interface CoronaStatusByCriteriaDto {
    Country: string,
    Date: Date,
    Cases: number
};

export interface CoronaStatusByCriteria {
    countryName: string,
    date: Date,
    cases: number
};

interface CountryInfoDto {
    flag: string;
    lat: number;
    long: number;
};

export interface CountryInfo {
    flag: string;
    lat: number;
    lng: number;
};

interface CoronaStatusDto {
    country: string;
    cases: number;
    deaths: number;
    recovered: number;
    todayDeaths: number;
    todayCases: number;
    testsPerOneMillion: number;
    tests: number;
    critical: number;
    deathsPerOneMillion: number;
    countryInfo: CountryInfoDto
};

export interface CoronaStatus {
    countryName: string;
    cases: number;
    deaths: number;
    recovered: number;
    todayDeaths: number;
    todayCases: number;
    testsPerOneMillion: number;
    tests: number;
    critical: number;
    deathsPerOneMillion: number;
    countryInfo: CountryInfo
};

const mapCountryInfoDtoToModel = (dto: CountryInfoDto): CountryInfo => ({
    flag: dto.flag,
    lat: dto.lat,
    lng: dto.long
});

const mapCoronaStatusByCriteriaDtoToModel = (dto: CoronaStatusByCriteriaDto): CoronaStatusByCriteria => ({
    countryName: dto.Country,
    cases: dto.Cases,
    date: dto.Date
});

const mapCoronaStatusDtoToModel = (dto: CoronaStatusDto): CoronaStatus => ({
    countryName: dto.country,
    cases: dto.cases,
    deaths: dto.deaths,
    critical: dto.critical,
    todayCases: dto.todayCases,
    testsPerOneMillion: dto.testsPerOneMillion,
    tests: dto.tests,
    deathsPerOneMillion: dto.deathsPerOneMillion,
    recovered: dto.recovered,
    todayDeaths: dto.todayDeaths,
    countryInfo: mapCountryInfoDtoToModel(dto.countryInfo)
});

export const getCoronaStatus = () => {
    const url = 'https://corona.lmao.ninja/v2/countries'
    const { data, loading, error } = useApi<CoronaStatusDto[]>(url);
    const result = data && data.map(mapCoronaStatusDtoToModel || []);
    return {
        result,
        loading,
        error
    }
};

export const getCoronaStatusByCriteria = (criteria: StatusCriteria, countryName: string) => {
    const url = `https://api.covid19api.com/country/${countryName}/status/${criteria}`;
    const { data, loading, error } = useApi<CoronaStatusByCriteriaDto[]>(url);
    const result = data && data.map(mapCoronaStatusByCriteriaDtoToModel || []);
    return {
        result,
        loading,
        error
    }
};