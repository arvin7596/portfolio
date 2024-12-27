import { useQuery } from "@tanstack/react-query";
import { getSkills } from "../services/apiSkills";

export function useSkills() {
  const { data: skills, isLoading: loadingSkills } = useQuery({
    queryFn: getSkills,
    queryKey: ["skills"],
  });

  return { skills, loadingSkills };
}
