import { useQuery } from "@tanstack/react-query";
import { getResume } from "../services/apiResume";

export function useResume() {
  const { data: resume, isLoading: loadingResume } = useQuery({
    queryFn: getResume,
    queryKey: ["resume"],
  });

  return { resume, loadingResume };
}
