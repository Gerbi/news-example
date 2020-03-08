import { ref, toRefs, reactive } from '@vue/composition-api';
import useFetch from './fetch';

export default function () {
  const breweries = reactive({ list: [], error: null, fetching: false });
  const val = ref('technology');
  const api = ref('2fe02a107f914d02bf678cd0a8805d8a');

  const submitted = async () => {
    const {
      response,
      error,
      fetchData,
      fetching,
    } = useFetch(
      `https://newsapi.org/v2/everything?q=${val.value}&apiKey=${api.value}`,
      {},
    );
    fetchData();
    breweries.list = response;
    breweries.error = error;
    breweries.fetching = fetching;
  };
  return { submitted, ...toRefs(breweries), val };
}
