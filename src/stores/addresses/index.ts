import { apiGoogleService } from "@/services/api";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { createUseAddressBuildingInsightsKey } from "./key";
import { IAddress, IBuildingInsightsResponse } from "./type";

export const useAddressBuildingInsights = (
  { address }: { address: IAddress },
  options?: UseQueryOptions<IBuildingInsightsResponse>
) => {
  return useQuery(
    createUseAddressBuildingInsightsKey({
      address_id: address.uuid,
    }),
    async () => {
      let params = `?location.latitude=${address.latitude}&location.longitude=${address.longitude}&requiredQuality=HIGH`;

      const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
      if(API_KEY) {
        params += `&key=${API_KEY}`
      }

      return await apiGoogleService.get(params).then((res) => res.data);
    },
    { ...options, refetchOnWindowFocus: false, staleTime: 1000 * 10 * 60 }
  );
};
