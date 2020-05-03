export interface CountryInfo {
    flag: string;
    lat: number;
    long: number;
}

export interface CoronaStatusDto {
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
    countryInfo: CountryInfo
}

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
}

export const mapCoronaStatusDtoToModel = (dto: CoronaStatusDto): CoronaStatus => ({
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
