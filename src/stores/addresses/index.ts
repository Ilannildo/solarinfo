import { api } from "@/services/api";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { createUseAllAddressesKey } from "./key";
import { IAddress } from "./type";

export const useAllAddresses = (options?: UseQueryOptions<IAddress[]>) => {
  return useQuery(
    createUseAllAddressesKey(),
    () => api.get(`/addresses`).then((res) => res.data),
    { ...options, refetchOnWindowFocus: false, staleTime: 1000 * 10 * 60 }
  );
};
