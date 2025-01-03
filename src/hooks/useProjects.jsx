import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../services/apiProjects";

export function useProjects() {
  const { data: projects, isLoading: loadingProjects } = useQuery({
    queryFn: getProjects,
    queryKey: ["projects"],
  });

  return { projects, loadingProjects };
}
