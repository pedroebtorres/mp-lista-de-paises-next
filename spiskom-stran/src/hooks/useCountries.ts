import { fetchCountries } from '@/utils/fetchCountries';
import useSWR from 'swr';

export const useCountries = () => {
    const { data, error, isLoading} = useSWR('countries', fetchCountries);

    return{
        countries: data, error, isLoading
    }
}
