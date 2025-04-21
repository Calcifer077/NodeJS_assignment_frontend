import { useMutation } from "@tanstack/react-query";
import { addSchool as addSchoolApi } from "../services/apiSchools";

export function useAddSchool() {
  const { mutate: addSchool, isLoading } = useMutation({
    mutationFn: addSchoolApi,
  });

  return { addSchool, isLoading };
}
