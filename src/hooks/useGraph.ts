import { useApi } from '../hooks/useApi'
import { GraphInfoDto } from '../api/graph';

export const useGraph = (country: string) => {

    const urlCases = `https://api.covid19api.com/country/${country}/status/confirmed`;
    const urlDeaths = `https://api.covid19api.com/country/${country}/status/deaths`;
    const { data: graphInfo, loading } = useApi<GraphInfoDto[]>(true, urlCases);
    const { data: deathInfo, loading: deathLoading } = useApi<GraphInfoDto[]>(true, urlDeaths);

    const stateCases = {
        labels: graphInfo?.map(x => x.Date.toString().substring(0, 10)),
        datasets: [
            {
                label: 'Confirmed Cases',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#47B881',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 0.2,
                data: graphInfo?.map(x => x.Cases)
            }
        ]
    }

    const stateDeaths = {
        labels: deathInfo?.map(x => x.Date.toString().substring(0, 10)),
        datasets: [
            {
                label: 'Deaths',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#EC4C47',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 0.2,
                data: deathInfo?.map(x => x.Cases)
            }
        ]
    }

    return {
        stateDeaths,
        stateCases,
        deathInfo,
        graphInfo,
        loading: loading && deathLoading
    }
}