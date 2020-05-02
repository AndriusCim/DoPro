import { useEffect, useState } from 'react';
import axios from 'axios';

interface State<T> {
  data: T | null,
  loading: boolean,
  error: any,
}

const initialState = {
  data: null,
  loading: false,
  error: ''
}

export function useApi<T>(run: boolean, url: string) {
  const [state, setState] = useState<State<T>>(initialState);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    if (run) {
      const fetchData = async () => {
        try {
          setState(prevState => ({ ...prevState, loading: true }))
          const response = await axios.get(url);
          if (response.status === 200 && !signal.aborted) {
            setState(prevState => ({ ...prevState, data: response.data }))
          }
        } catch (err) {
          if (!signal.aborted) {
            setState(prevState => ({ ...prevState, error: err }))
          }
        } finally {
          if (!signal.aborted) {
            setState(prevState => ({ ...prevState, loading: false }))
          }
        }
      };
      fetchData();
    }

    return () => {
      abortController.abort();
    };
  }, [run, url]);

  return state;
}