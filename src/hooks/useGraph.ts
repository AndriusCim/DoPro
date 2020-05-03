import { useApi } from '../hooks/useApi'
import { GraphInfoDto } from '../api/graph';

export const useGraph = (country: string) => {

    const url = `https://api.covid19api.com/country/${country}/status/confirmed`;
    const { data: graphInfo, loading } = useApi<GraphInfoDto[]>(true, url);

    return {
        graphInfo,
        loading
    }
}