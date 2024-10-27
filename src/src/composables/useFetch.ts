import { ref } from 'vue';
import axios from 'axios';

// eslint-disable-next-line no-unused-vars
export function useFetch<T>(url: string, options?: { onSuccess?: (data: T) => void }) {
  const data = ref<T | null>(null);
  const error = ref<string | null>(null);
  const loading = ref(true);

  const fetchData = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await axios.get<T>(url);
      data.value = response.data;

      if (options?.onSuccess) {
        options.onSuccess(response.data);
      }
    } catch (err: unknown) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch data';
    } finally {
      loading.value = false;
    }
  };

  // Fetch data when hook is called
  fetchData();

  return {
    data,
    error,
    loading,
    refresh: fetchData, // Optionally provide a refresh function to re-fetch data
  };
}
