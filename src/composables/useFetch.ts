import { ref } from 'vue';
import axios, { AxiosHeaders, AxiosResponse } from 'axios';

interface UseFetchOptions<T> {
  onSuccess?: (data: T, headers: Partial<AxiosHeaders>) => void;
  // Allow additional query parameters
  getParams?: () => Record<string, unknown>;
}

export function useFetch<T>(url: string, options?: UseFetchOptions<T>) {
  const data = ref<T | null>(null);
  const error = ref<string | null>(null);
  const loading = ref(false);  // can use suspense instead

  const fetchData = async () => {
    loading.value = true;
    error.value = null;

    try {
      const params = options?.getParams ? options.getParams() : {};
      const response: AxiosResponse<T> = await axios.get<T>(url, { params });
      data.value = response.data;

      if (options?.onSuccess) {
        options.onSuccess(response.data, response.headers);
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
