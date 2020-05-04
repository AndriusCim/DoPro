import { useState } from 'react';
import { getCoronaStatus } from '../api/countries';

export const useCountries = () => {
    const [searchString, setSearchString] = useState<string>('');
    const { result, loading, error } = getCoronaStatus();

    const coronaStats =
      result &&
      result.filter(
        x =>
          x.countryName
            .toLocaleLowerCase()
            .indexOf(searchString.toLocaleLowerCase()) !== -1
      );
  
    return {
      coronaStats,
      loading,
      error,
      onSearch: setSearchString
    };
  };
  