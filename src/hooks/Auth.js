import { useMutation, useQuery, useQueryClient } from "react-query";
import { LoginApi, TableApi } from "../services/Api";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation(LoginApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(["data"])
    }
  });
};

export const useTableData = () => {
  return useQuery(['data'], () => TableApi())
}