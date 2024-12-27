import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../services/apiUserInfo";

export function useUserInfo() {
  const { data: userInfo, isLoading: loadingUserInfo } = useQuery({
    queryFn: getUserInfo,
    queryKey: ["user-info"],
  });
  return { userInfo, loadingUserInfo };
}
