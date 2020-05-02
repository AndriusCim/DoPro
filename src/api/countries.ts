import { useApi } from 'hooks/useApi';

export interface countryInfo {
    flag: string;
}

export interface coronaStatusDto {
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
    countryInfo: countryInfo
}

export interface coronaStatus {
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
    countryInfo: countryInfo
}

export const mapCoronaStatusDtoToModel = (dto: coronaStatusDto): coronaStatus => ({
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
    countryInfo: dto.countryInfo
  });
