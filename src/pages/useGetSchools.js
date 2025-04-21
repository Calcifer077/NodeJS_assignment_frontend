import { useQuery } from "@tanstack/react-query";
import { getSchools } from "../services/apiSchools";

export function useGetSchools() {
  // This will return various things.
  const {
    isLoading,
    data: schools,
    error,
  } = useQuery({
    queryKey: ["schools"],
    queryFn: getSchools,
  });

  return { isLoading, schools, error };
}
