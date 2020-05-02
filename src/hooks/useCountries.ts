import { useState } from 'react';
import { coronaStatusDto } from 'api/countries';
import { useApi } from '../hooks/useApi'

export const useCountries = () => {
    const [searchString, setSearchString] = useState<string>("");

    const url = 'https://corona.lmao.ninja/v2/countries'
    const { data: stats, loading, error } = useApi<coronaStatusDto[]>(true, url);

    const coronaStats = stats && stats.filter(x => x.country.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1);

    return {
        coronaStats,
        loading,
        error,
        onSearch: setSearchString
    }
}