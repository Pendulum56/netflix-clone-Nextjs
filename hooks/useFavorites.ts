import useSWR from "swr";

import fetcher from "@/lib/fetcher";

const useFavorites = () => {
  const { data, error, isLoading } = useSWR("/api/favorites", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading,
  };
};

export default useFavorites;
